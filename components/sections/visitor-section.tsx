"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PixelCard from "@/components/ui/pixel-card";
import ShinyText from "../ui/shiny-text";
import {
  Send,
  User,
  Bot,
  MessageSquare,
  ShieldAlert,
  CheckCircle2,
} from "lucide-react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { saveVisitorMessage } from "@/app/actions/visitor";

// Info about Raisul Rayat for the AI
const RAISUL_INFO = `
You are an AI assistant for Raisul Rayat's portfolio. 
Raisul is a Full Stack/Frontend Developer (Architect).
Education: BSc in Computer Science at United International University (2022-Present), Dean's List, 3.5+ CGPA.
Experience: Web Solutions Intern at Tekshilpa Solutions Ltd (2025).
Key Projects: 
- TuitionTrack: A dedicated platform for managing private tuitions.
- Cyber Play Arena: A modern gaming arena management system.
- UIU Sprs: A specialized solution for university-scale resource tracking.
- Spendo: An AI-driven financial solution that won 1st Place at UIU's IC6 Startup Competition.
Technical Stack: 
- Frontend: React, Next.js, Tailwind CSS, GSAP, motion.dev, Vite, TanStack Start.
- Backend: Node.js, Express, Appwrite, Firebase, Sanity.
- Database: PostgreSQL, MongoDB, Redis, Supabase, Prisma.
- Tools: Git, Docker, Sentry, Postman, Vercel, Figma.
Skills: Intelligent Systems, Software Engineering, GenAI Integration.
Purpose: Help visitors learn about Raisul's work, skills, and background. Keep responses concise and professional.
`;

const VisitorSection = () => {
  const [messages, setMessages] = useState([
    {
      role: "bot",
      content:
        "Hi! I'm Raisul's AI assistant. Ask me anything about his projects, skills, or experience!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [anonName, setAnonName] = useState("");
  const [anonEmail, setAnonEmail] = useState("");
  const [anonMsg, setAnonMsg] = useState("");
  const [isSent, setIsSent] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // const scrollToBottom = () => {
  //   chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  // };

  // useEffect(() => {
  //   scrollToBottom();
  // }, [messages]);

  const handleChatSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsTyping(true);

    try {
      const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
      console.log("Attempting chat with API Key existence:", !!apiKey);

      if (!apiKey) {
        setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            {
              role: "bot",
              content:
                "I'd love to chat, but my API key isn't configured yet. Please add NEXT_PUBLIC_GEMINI_API_KEY to your environment and RESTART your dev server.",
            },
          ]);
          setIsTyping(false);
        }, 1000);
        return;
      }

      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: "gemini-flash-latest" });

      const prompt = `${RAISUL_INFO}\n\nVisitor: ${userMessage}\nAI:`;
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      setMessages((prev) => [...prev, { role: "bot", content: text }]);
    } catch (error) {
      console.error("Gemini AI Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          content: `Sorry, I encountered an error: ${error instanceof Error ? error.message : "Unknown error"}. Please check the console for details.`,
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleAnonSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!anonMsg.trim()) return;

    const result = await saveVisitorMessage({
      name: anonName,
      email: anonEmail,
      message: anonMsg,
    });
    console.log("DEBUG: Submission result:", result);

    if (result.success) {
      setIsSent(true);
      setTimeout(() => {
        setIsSent(false);
        setAnonMsg("");
        setAnonName("");
        setAnonEmail("");
      }, 3000);
    } else {
      alert(
        "Failed to send message. This might be because the database is not connected yet.",
      );
    }
  };

  return (
    <section
      id="visitor"
      className="relative w-full py-24 bg-black overflow-hidden border-t border-[#1a1a1a]"
    >
      {/* Background Gradients (Same as Tech Stack) */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none opacity-60"
        style={{
          background:
            "radial-gradient(circle at bottom left, rgba(14, 165, 233, 0.15) 0%, transparent 50%), radial-gradient(circle at top right, rgba(14, 165, 233, 0.1) 0%, transparent 50%)",
        }}
      />

      {/* Pixelated Background (Same as Tech Stack) */}
      <div className="absolute inset-0 z-0 opacity-15">
        <PixelCard
          variant="default"
          className="w-full h-full"
          gap={8}
          speed={20}
          autoAppear
          noHover
          noFocus
        />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10 transition-all duration-700 max-h-[100vh]">
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-[1px] bg-[#0ea5e9]/30" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#0ea5e9] font-normal">
              Connect
            </span>
            <div className="w-12 h-[1px] bg-[#0ea5e9]/30" />
          </div>

          <p className="text-zinc-500 max-w-2xl mx-auto text-lg leading-relaxed font-light">
            Chat with my AI twin or leave a footprint in my digital guestbook.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 h-auto lg:h-[550px]">
          {/* Left Side: AI Chatbot */}
          <div className="flex flex-col h-full bg-[#0d0d0d]/40 backdrop-blur-2xl border border-zinc-900/50 rounded-2xl overflow-hidden group">
            <div className="p-6 border-b border-zinc-900/50 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-500/5 flex items-center justify-center text-blue-400/80">
                  <Bot size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-white text-xs tracking-[0.2em] font-light uppercase opacity-80">
                    AI Assistant
                  </h3>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <div className="w-1 h-1 rounded-full bg-emerald-500/60 animate-pulse" />
                    <span className="text-[9px] text-zinc-600 uppercase tracking-widest font-normal">
                      Online
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-grow overflow-y-auto p-6 space-y-6 scrollbar-hide">
              <AnimatePresence initial={false}>
                {messages.map((msg, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[90%] md:max-w-[80%] flex items-start gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
                    >
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                          msg.role === "user"
                            ? "bg-zinc-900 text-zinc-500"
                            : "bg-blue-500/5 text-blue-400/70"
                        }`}
                      >
                        {msg.role === "user" ? (
                          <User size={12} strokeWidth={1.5} />
                        ) : (
                          <Bot size={12} strokeWidth={1.5} />
                        )}
                      </div>
                      <div
                        className={`p-4 rounded-2xl text-sm leading-relaxed font-light tracking-wide ${
                          msg.role === "user"
                            ? "bg-blue-600/5 border border-blue-500/10 text-blue-100/90"
                            : "bg-zinc-900/50 border border-zinc-800/30 text-zinc-400"
                        }`}
                      >
                        {msg.content}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-center gap-2 bg-zinc-900/50 p-3 px-4 rounded-2xl border border-zinc-800/30">
                    <div className="w-1 h-1 bg-blue-400/40 rounded-full animate-bounce [animation-delay:-0.3s]" />
                    <div className="w-1 h-1 bg-blue-400/40 rounded-full animate-bounce [animation-delay:-0.15s]" />
                    <div className="w-1 h-1 bg-blue-400/40 rounded-full animate-bounce" />
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            <form
              onSubmit={handleChatSubmit}
              className="p-4 border-t border-zinc-900/50 bg-[#080808]/40"
            >
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about my work..."
                  className="w-full bg-zinc-900/30 border border-zinc-800/50 rounded-xl px-4 py-3 text-sm text-zinc-300 placeholder:text-zinc-700 focus:outline-none focus:border-blue-500/20 transition-all font-light tracking-wide"
                />
                <button
                  type="submit"
                  disabled={isTyping || !input.trim()}
                  className="absolute right-2 p-2 text-zinc-600 hover:text-blue-500/60 disabled:opacity-20 disabled:hover:text-zinc-600 transition-all"
                >
                  <Send size={16} strokeWidth={1.5} />
                </button>
              </div>
            </form>
          </div>

          {/* Right Side: Anonymous Message */}
          <div className="flex flex-col h-full bg-[#0d0d0d]/40 backdrop-blur-2xl border border-zinc-900/50 rounded-2xl overflow-hidden p-8 lg:p-10 group relative">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-8 h-8 rounded-full bg-emerald-500/5 flex items-center justify-center text-emerald-400/80">
                <MessageSquare size={18} strokeWidth={1.5} />
              </div>
              <h3 className="text-white text-xs tracking-[0.2em] font-light uppercase opacity-80">
                Drop a Message
              </h3>
            </div>

            <form
              onSubmit={handleAnonSubmit}
              className="space-y-6 flex-grow flex flex-col"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[9px] text-zinc-600 uppercase tracking-[0.3em] ml-1 font-normal opacity-80">
                    Name
                  </label>
                  <input
                    type="text"
                    value={anonName}
                    onChange={(e) => setAnonName(e.target.value)}
                    placeholder="Optional"
                    className="w-full bg-zinc-900/20 border border-zinc-900 rounded-xl px-4 py-3 text-sm text-zinc-400 placeholder:text-zinc-800 focus:outline-none focus:border-emerald-500/10 transition-all font-light tracking-wide"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] text-zinc-600 uppercase tracking-[0.3em] ml-1 font-normal opacity-80">
                    Email
                  </label>
                  <input
                    type="email"
                    value={anonEmail}
                    onChange={(e) => setAnonEmail(e.target.value)}
                    placeholder="Optional"
                    className="w-full bg-zinc-900/20 border border-zinc-900 rounded-xl px-4 py-3 text-sm text-zinc-400 placeholder:text-zinc-800 focus:outline-none focus:border-emerald-500/10 transition-all font-light tracking-wide"
                  />
                </div>
              </div>

              <div className="space-y-2 flex-grow flex flex-col">
                <label className="text-[9px] text-zinc-600 uppercase tracking-[0.3em] ml-1 font-normal opacity-80">
                  Your Message
                </label>
                <textarea
                  value={anonMsg}
                  onChange={(e) => setAnonMsg(e.target.value)}
                  placeholder="Drop a note, feedback, or a quick hello..."
                  className="w-full flex-grow bg-zinc-900/20 border border-zinc-900 rounded-xl px-4 py-3 text-sm text-zinc-400 placeholder:text-zinc-800 focus:outline-none focus:border-emerald-500/10 transition-all resize-none font-light tracking-wide min-h-[120px]"
                />
              </div>

              <button
                type="submit"
                disabled={!anonMsg.trim() || isSent}
                className={`w-full py-4 rounded-xl flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.3em] transition-all font-light relative overflow-hidden ${
                  isSent
                    ? "bg-emerald-500/5 text-emerald-400/60 border border-emerald-500/10"
                    : "bg-zinc-900/50 text-zinc-500 border border-zinc-800/50 hover:bg-blue-600/5 hover:text-blue-400 hover:border-blue-500/20 active:scale-[0.98]"
                }`}
              >
                {isSent ? (
                  <>
                    <CheckCircle2 size={14} strokeWidth={1.5} />
                    Message Received
                  </>
                ) : (
                  <>
                    <Send
                      size={14}
                      strokeWidth={1.5}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                    Send Message
                  </>
                )}
              </button>
            </form>

            <div className="mt-8 flex items-center gap-3 p-4 bg-zinc-900/20 rounded-xl border border-zinc-900/50">
              <ShieldAlert
                className="text-zinc-700 flex-shrink-0"
                size={14}
                strokeWidth={1.5}
              />
              <p className="text-[9px] text-zinc-600 leading-relaxed font-light tracking-wide uppercase opacity-70">
                All communications are filtered and stored securely.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitorSection;
