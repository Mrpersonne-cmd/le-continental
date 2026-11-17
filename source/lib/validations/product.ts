import { z } from "zod";

export const productSchema = z.object({
  name: z.string().min(2, "Nom trop court"),
  description: z.string().optional(),
  price: z.number().int().positive("Prix invalide"),
  stock_quantity: z.number().int().min(0, "Stock invalide"),
  category_id: z.string().uuid("Catégorie invalide").optional().nullable(),
  image_url: z.string().url("URL invalide").optional().nullable(),
  is_active: z.boolean().default(true),
});

export type ProductInput = z.infer<typeof productSchema>;