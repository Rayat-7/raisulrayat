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
  Sparkles,
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

  const handleChatSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsTyping(true);

    try {
      const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

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
      className="relative w-full py-16 md:py-24 bg-black overflow-hidden border-t border-[#1a1a1a]"
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

      <div className="container mx-auto px-6 max-w-7xl relative z-10 transition-all duration-700">
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-[1px] bg-[#0ea5e9]/30" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#0ea5e9] font-normal">
              Connect
            </span>
            <div className="w-8 h-[1px] bg-[#0ea5e9]/30" />
          </div>
          <p className="text-zinc-200 max-w-md mx-auto text-sm leading-relaxed font-light">
            Chat with my AI assistant or leave me a message.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* AI Chatbot — Takes more space */}
          <div className="lg:col-span-3 flex flex-col min-h-[420px] lg:h-[420px] border border-[#1a1a1a] rounded-xl overflow-hidden">
            {/* Chat Header */}
            <div className="px-4 py-3 border-b border-[#1a1a1a] flex items-center gap-2.5">
              <div className="w-6 h-6 rounded-md bg-[#0ea5e9]/10 flex items-center justify-center">
                <Sparkles size={12} className="text-[#0ea5e9]" />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[18px] font-medium text-white/80">
                  AI Assistant
                </span>
                <div className="flex items-center gap-1">
                  <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[9px] text-zinc-600 font-mono">
                    online
                  </span>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-grow overflow-y-auto p-4 space-y-3 scrollbar-hide">
              <AnimatePresence initial={false}>
                {messages.map((msg, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] ${
                        msg.role === "user"
                          ? "bg-[#0ea5e9]/10 border border-[#0ea5e9]/15 text-blue-100/90 rounded-xl rounded-br-sm"
                          : "bg-[#111] border border-[#1a1a1a] text-zinc-400 rounded-xl rounded-bl-sm"
                      } px-3.5 py-2.5 text-[13px] leading-relaxed`}
                    >
                      {msg.content}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-center gap-1.5 bg-[#111] px-3.5 py-2.5 rounded-xl border border-[#1a1a1a]">
                    <div className="w-1 h-1 bg-[#0ea5e9]/50 rounded-full animate-bounce [animation-delay:-0.3s]" />
                    <div className="w-1 h-1 bg-[#0ea5e9]/50 rounded-full animate-bounce [animation-delay:-0.15s]" />
                    <div className="w-1 h-1 bg-[#0ea5e9]/50 rounded-full animate-bounce" />
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Input */}
            <form
              onSubmit={handleChatSubmit}
              className="px-3 py-2.5 border-t border-[#1a1a1a]"
            >
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about my work..."
                  className="w-full bg-[#111] border border-[#1a1a1a] rounded-lg px-3.5 py-2 text-[13px] text-zinc-300 placeholder:text-zinc-700 focus:outline-none focus:border-[#0ea5e9]/20 transition-colors"
                />
                <button
                  type="submit"
                  disabled={isTyping || !input.trim()}
                  className="absolute right-1.5 p-1.5 text-zinc-600 hover:text-[#0ea5e9] disabled:opacity-20 transition-colors"
                >
                  <Send size={14} />
                </button>
              </div>
            </form>
          </div>

          {/* Anonymous Message */}
          <div className="lg:col-span-2 flex flex-col min-h-[420px] lg:h-[420px] border border-[#1a1a1a] rounded-xl overflow-hidden">
            {/* Header */}
            <div className="px-4 py-3 border-b border-[#1a1a1a] flex items-center gap-2.5">
              <div className="w-6 h-6 rounded-md bg-emerald-500/10 flex items-center justify-center">
                <MessageSquare size={12} className="text-emerald-400" />
              </div>
              <span className="text-[18px] font-medium text-white/80">
                Leave a Message
              </span>
            </div>

            {/* Form */}
            <form
              onSubmit={handleAnonSubmit}
              className="flex-grow flex flex-col p-4 gap-3"
            >
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  value={anonName}
                  onChange={(e) => setAnonName(e.target.value)}
                  placeholder="Name"
                  className="w-full bg-[#111] border border-[#1a1a1a] rounded-lg px-3 py-2 text-[12px] text-zinc-400 placeholder:text-zinc-700 focus:outline-none focus:border-emerald-500/20 transition-colors"
                />
                <input
                  type="email"
                  value={anonEmail}
                  onChange={(e) => setAnonEmail(e.target.value)}
                  placeholder="Email"
                  className="w-full bg-[#111] border border-[#1a1a1a] rounded-lg px-3 py-2 text-[12px] text-zinc-400 placeholder:text-zinc-700 focus:outline-none focus:border-emerald-500/20 transition-colors"
                />
              </div>

              <textarea
                value={anonMsg}
                onChange={(e) => setAnonMsg(e.target.value)}
                placeholder="Your message..."
                className="w-full flex-grow bg-[#111] border border-[#1a1a1a] rounded-lg px-3 py-2.5 text-[12px] text-zinc-400 placeholder:text-zinc-700 focus:outline-none focus:border-emerald-500/20 transition-colors resize-none min-h-[100px]"
              />

              <button
                type="submit"
                disabled={!anonMsg.trim() || isSent}
                className={`w-full py-2.5 rounded-lg flex items-center justify-center gap-2 text-[11px] uppercase tracking-widest font-medium transition-all ${
                  isSent
                    ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                    : "bg-[#111] text-zinc-500 border border-[#1a1a1a] hover:text-[#0ea5e9] hover:border-[#0ea5e9]/20 active:scale-[0.98]"
                }`}
              >
                {isSent ? (
                  <>
                    <CheckCircle2 size={12} />
                    Sent!
                  </>
                ) : (
                  <>
                    <Send size={12} />
                    Send
                  </>
                )}
              </button>

              {/* Privacy note */}
              <div className="flex items-center gap-2 pt-1">
                <ShieldAlert size={10} className="text-zinc-700 shrink-0" />
                <p className="text-[9px] text-zinc-700 leading-relaxed">
                  Messages are stored securely and privately.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitorSection;
