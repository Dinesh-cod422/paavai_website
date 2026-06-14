import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop Traditional Products",
  description: "Browse our premium selection of traditional South Indian spices, masalas, ghee, and jaggery.",
};

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
