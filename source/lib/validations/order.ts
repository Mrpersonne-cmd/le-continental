import { z } from "zod";

export const checkoutSchema = z.object({
  city: z.enum(["Douala", "Yaoundé", "Kribi", "Edéa"], {
    message: "Ville invalide",
  }),
  address: z.string().min(3, "Adresse trop courte").optional(),
});

export const orderItemSchema = z.object({
  product_id: z.string().uuid(),
  quantity: z.number().int().positive(),
});

export type CheckoutInput = z.infer<typeof checkoutSchema>;