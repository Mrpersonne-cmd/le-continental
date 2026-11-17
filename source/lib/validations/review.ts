import { z } from "zod";

export const reviewSchema = z.object({
  product_id: z.string().uuid(),
  order_id: z.string().uuid(),
  rating: z.number().int().min(1).max(5),
  comment: z
    .string()
    .max(80, "Maximum 80 caractères")
    .optional(),
});

export type ReviewInput = z.infer<typeof reviewSchema>;