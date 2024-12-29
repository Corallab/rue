import "server-only";

import { z } from "zod";

const serverEnvSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']),
  PUBLIC_API_URL: z.string().min(1),
});

export const serverEnv = serverEnvSchema.parse(process.env);