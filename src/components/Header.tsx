"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, User, Heart, ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import styles from "./Header.module.css";

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const { cartCount, wishlist } = useCart();

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchQuery.trim()) {
      router.push(`/shop?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery(""); // clear the input after search
    }
  };

  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        {/* Logo */}
        <Link href="/" className={styles.logoContainer}>
          <Image
            src="/images/logo.png"
            alt="Paavai Parampariyam"
            width={80}
            height={80}
            className={styles.logo}
          />
        </Link>

        {/* Navigation */}
        <nav className={styles.nav}>
          <Link href="/" className={`${styles.navLink} ${styles.active}`}>Home</Link>
          <Link href="/shop" className={styles.navLink}>Shop</Link>
          <Link href="/about" className={styles.navLink}>About Us</Link>
          <Link href="/benefits" className={styles.navLink}>Benefits</Link>
          <Link href="/recipes" className={styles.navLink}>Recipes</Link>
          <Link href="/contact" className={styles.navLink}>Contact</Link>
        </nav>

        {/* Actions */}
        <div className={styles.actions}>
          <div className={styles.searchBar}>
            <input
              type="text"
              placeholder="Search for products..."
              className={styles.searchInput}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleSearch}
            />
            <Search
              className={styles.searchIcon}
              size={18}
              style={{ cursor: "pointer" }}
              onClick={() => {
                if (searchQuery.trim()) {
                  router.push(`/shop?q=${encodeURIComponent(searchQuery.trim())}`);
                  setSearchQuery("");
                }
              }}
            />
          </div>
          
          <div className={styles.iconGroup}>
            <Search
              className={`${styles.iconBtn} ${styles.mobileOnlyIcon}`}
              size={22}
              onClick={() => router.push('/shop')}
              style={{ cursor: 'pointer' }}
            />
            <Link href="/login" className={`${styles.iconBtn} ${styles.desktopOnlyIcon}`} aria-label="Profile">
              <User size={22} />
            </Link>
            <Link href="/wishlist" className={styles.iconBtn} aria-label="Wishlist">
              <div className={styles.iconWrapper}>
                <Heart size={22} />
                {wishlist.length > 0 && <span className={styles.badge}>{wishlist.length}</span>}
              </div>
            </Link>
            <Link href="/cart" className={`${styles.iconBtn} ${styles.desktopOnlyIcon}`} aria-label="Cart">
              <div className={styles.iconWrapper}>
                <ShoppingCart size={22} />
                {cartCount > 0 && <span className={styles.badge}>{cartCount}</span>}
              </div>
            </Link>
          </div>
        </div>

      </div>
    </header>
  );
}
