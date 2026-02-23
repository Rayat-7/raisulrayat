import prisma from "./lib/prisma";

async function check() {
  try {
    const count = await prisma.visitorMessage.count();
    console.log("Current message count:", count);
    const messages = await prisma.visitorMessage.findMany({ take: 5 });
    console.log("Recent messages:", messages);
  } catch (error) {
    console.error("Check failed:", error);
  } finally {
    process.exit();
  }
}

check();
