"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { Search, User, Heart, ShoppingCart, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import styles from "./Header.module.css";

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const { cartCount, wishlist } = useCart();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

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
            <Link href="/login" className={styles.iconBtn} aria-label="Profile">
              <User size={22} />
            </Link>
            <Link href="/wishlist" className={styles.iconBtn} aria-label="Wishlist">
              <Heart size={22} />
              {wishlist.length > 0 && <span className={styles.badge}>{wishlist.length}</span>}
            </Link>
            <Link href="/cart" className={styles.iconBtn} aria-label="Cart">
              <ShoppingCart size={22} />
              {cartCount > 0 && <span className={styles.badge}>{cartCount}</span>}
            </Link>
            
            {/* Hamburger Button */}
            <button 
              className={styles.hamburgerBtn}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
          <nav className={styles.mobileNav}>
            <Link href="/" className={`${styles.mobileNavLink} ${pathname === '/' ? styles.active : ''}`}>Home</Link>
            <Link href="/shop" className={`${styles.mobileNavLink} ${pathname === '/shop' ? styles.active : ''}`}>Shop</Link>
            <Link href="/about" className={`${styles.mobileNavLink} ${pathname === '/about' ? styles.active : ''}`}>About Us</Link>
            <Link href="/benefits" className={`${styles.mobileNavLink} ${pathname === '/benefits' ? styles.active : ''}`}>Benefits</Link>
            <Link href="/recipes" className={`${styles.mobileNavLink} ${pathname === '/recipes' ? styles.active : ''}`}>Recipes</Link>
            <Link href="/contact" className={`${styles.mobileNavLink} ${pathname === '/contact' ? styles.active : ''}`}>Contact</Link>
          </nav>
          
          <div className={styles.mobileSearchBar}>
            <input
              type="text"
              placeholder="Search products..."
              className={styles.searchInput}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleSearch}
            />
            <Search
              className={styles.searchIcon}
              size={18}
              onClick={() => {
                if (searchQuery.trim()) {
                  router.push(`/shop?q=${encodeURIComponent(searchQuery.trim())}`);
                  setSearchQuery("");
                  setIsMobileMenuOpen(false);
                }
              }}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
