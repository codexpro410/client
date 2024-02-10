import { z } from 'zod';

export const contactFormSchema = z.object({
  username: z.string().min(3).max(50),
  age: z.number().int().positive(),
  password: z.string().min(6),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;