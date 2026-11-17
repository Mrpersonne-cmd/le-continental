import { z } from "zod";

export const categorySchema = z.object({
  name: z.string().min(2, "Nom de catégorie trop court"),
});

export type CategoryInput = z.infer<typeof categorySchema>;