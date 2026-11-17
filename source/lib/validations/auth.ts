import { z } from "zod";

export const loginSchema = z.object({
  phone: z
    .string()
    .min(9, "Numéro de téléphone invalide")
    .max(9, "Numéro de téléphone invalide")
    .regex(/^[6-9]\d{8}$/, "Numéro camerounais invalide"),
  password: z.string().min(6, "Mot de passe trop court"),
});

export const registerSchema = z.object({
  full_name: z.string().min(2, "Nom trop court"),
  phone: z
    .string()
    .min(9, "Numéro de téléphone invalide")
    .max(9, "Numéro de téléphone invalide")
    .regex(/^[6-9]\d{8}$/, "Numéro camerounais invalide"),
  password: z.string().min(6, "Mot de passe trop court"),
  confirm_password: z.string(),
}).refine((data) => data.password === data.confirm_password, {
  message: "Les mots de passe ne correspondent pas",
  path: ["confirm_password"],
});

export type LoginInput = z.infer<typeof loginSchema>;
export type RegisterInput = z.infer<typeof registerSchema>;