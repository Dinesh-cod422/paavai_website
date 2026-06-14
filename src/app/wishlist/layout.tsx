import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Wishlist",
  description: "View the traditional products you have saved for later.",
  robots: {
    index: false,
    follow: false,
  }
};

export default function WishlistLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
