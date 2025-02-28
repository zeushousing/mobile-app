import { z } from "zod";

export const propertySchema = z.object({
  id: z.string(),
  name: z.string().min(3, 'Should be atleast 3 characters long'),
  description: z.string().min(10, 'Should be atleast 10 characters long'),
  price: z.number().min(1),
  status: z.enum(['available', 'unavailable']),
  image: z.string().min(1),
});

export type Property = z.infer<typeof propertySchema>;
