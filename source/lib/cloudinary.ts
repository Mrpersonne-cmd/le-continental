import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export default cloudinary;

/**
 * Upload une image vers Cloudinary
 * @param file - Fichier (Buffer ou base64)
 * @param folder - Dossier Cloudinary (ex: "products")
 */
export async function uploadImage(
  file: string,
  folder: string = "products"
): Promise<string> {
  const result = await cloudinary.uploader.upload(file, {
    folder: `le-continental/${folder}`,
    transformation: [
      { width: 800, height: 800, crop: "limit" },
      { quality: "auto" },
      { fetch_format: "auto" },
    ],
  });

  return result.secure_url;
}

/**
 * Supprimer une image Cloudinary à partir de son URL
 */
export async function deleteImage(imageUrl: string): Promise<void> {
  try {
    // Extraire le public_id depuis l'URL
    const parts = imageUrl.split("/");
    const filename = parts[parts.length - 1];
    const publicId = `le-continental/products/${filename.split(".")[0]}`;

    await cloudinary.uploader.destroy(publicId);
  } catch (error) {
    console.error("Erreur suppression image Cloudinary:", error);
  }
}