import { z } from 'zod';

const clientEnvSchema = z.object({
  PUBLIC_API_URL: z.string().min(1),
});

export const clientEnv = clientEnvSchema.parse({
  PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
});