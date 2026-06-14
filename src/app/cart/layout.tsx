import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Cart",
  description: "Review the traditional products in your cart before checkout.",
  robots: {
    index: false, // Don't index cart pages
    follow: false,
  }
};

export default function CartLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
