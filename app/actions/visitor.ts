"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function saveVisitorMessage(formData: {
  name?: string;
  email?: string;
  message: string;
}) {
  console.log("DEBUG: --- saveVisitorMessage Start ---");
  console.log("DEBUG: Payload:", formData);
  try {
    const data = {
      name: formData.name || "Anonymous",
      email: formData.email || null,
      message: formData.message,
    };

    console.log("DEBUG: Attempting Prisma create with data:", data);

    const newMessage = await prisma.visitorMessage.create({
      data: data,
    });

    console.log("DEBUG: Prisma create Success. Object:", newMessage);

    // Immediate verification check
    const count = await prisma.visitorMessage.count();
    console.log("DEBUG: Current DB row count after write:", count);

    return { success: true, message: "Message saved successfully!" };
  } catch (error) {
    console.error("DEBUG: Prisma error caught!");
    console.error("DEBUG: Error details:", error);
    if (error instanceof Error) {
      console.error("DEBUG: Stack:", error.stack);
    }
    return {
      success: false,
      message:
        error instanceof Error ? error.message : "Failed to save message.",
    };
  } finally {
    console.log("DEBUG: --- saveVisitorMessage End ---");
  }
}
