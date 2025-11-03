
import { PrismaClient } from '@prisma/client/react-native';
import { reactiveHooksExtension } from '@prisma/react-native';

const baseClient = new PrismaClient({
  log: ["query", "info", "warn"]
});

export const prismaClient = baseClient.$extends(reactiveHooksExtension());

export async function initDB() {
  try {
    baseClient.$applyPendingMigrations();
  } catch(e) {
    console.log("Falha ao aplicar migrações: ", e);
    throw new Error("Falha ao inicializar o bando de dados");
  }
}