export type UserRole = "user" | "admin";

export type OrderStatus = "en_cours" | "livree";

export type City = "Douala" | "Yaoundé" | "Kribi" | "Edéa";

export interface Profile {
  id: string;
  full_name: string;
  phone: string;
  role: UserRole;
  created_at: string;
  updated_at: string;
}

export interface Category {
  id: string;
  name: string;
  created_at: string;
}

export interface Product {
  id: string;
  name: string;
  description: string | null;
  price: number;
  stock_quantity: number;
  image_url: string | null;
  category_id: string | null;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface Order {
  id: string;
  user_id: string;
  status: OrderStatus;
  city: City;
  address: string | null;
  total_amount: number;
  whatsapp_number: string | null;
  created_at: string;
  updated_at: string;
}

export interface OrderItem {
  id: string;
  order_id: string;
  product_id: string;
  product_name: string;
  product_price: number;
  quantity: number;
  created_at: string;
}

export interface Review {
  id: string;
  user_id: string;
  product_id: string;
  order_id: string;
  rating: number;
  comment: string | null;
  created_at: string;
}