import { PrismaClient } from "../app/generated/prisma";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import "dotenv/config";

const globalForPrisma = global as unknown as {
  prisma: PrismaClient;
};

if (!process.env.DATABASE_URL) {
  console.warn(
    "WARNING: DATABASE_URL is not defined in environment variables.",
  );
}

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
pool.on("error", (err) => {
  console.error("Unexpected error on idle client", err);
  process.exit(-1);
});
const adapter = new PrismaPg(pool);

const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    adapter,
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;
