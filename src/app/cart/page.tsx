"use client";

import Image from "next/image";
import Link from "next/link";
import { Trash2, ArrowLeft, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import styles from "./Cart.module.css";

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, cartTotal } = useCart();

  const handleCheckout = () => {
    if (cart.length === 0) return;

    const phoneNumber = "917200189461"; // Updated with actual business WhatsApp number
    let message = "Hello Paavai Parampariyam! I would like to place an order:%0A%0A";
    
    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.title} (${item.selectedSize}) x ${item.quantity} = ₹${item.selectedPrice * item.quantity}%0A`;
    });

    message += `%0A*Total Amount: ₹${cartTotal}*%0A%0APlease let me know the payment details and shipping process. Thank you!`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  if (cart.length === 0) {
    return (
      <main className={styles.emptyMain}>
        <div className="container" style={{ textAlign: "center" }}>
          <ShoppingBag size={64} color="var(--accent-green-dark)" style={{ opacity: 0.5, marginBottom: "2rem" }} />
          <h1 className="serif-font" style={{ fontSize: "3rem", marginBottom: "1rem" }}>Your Cart is Empty</h1>
          <p style={{ color: "var(--text-secondary)", marginBottom: "3rem", fontSize: "1.2rem" }}>Looks like you haven't added anything to your cart yet.</p>
          <Link href="/shop" className="btn-primary" style={{ textDecoration: "none" }}>
            Return to Shop
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className={styles.main}>
      <div className="container">
        <div className={styles.header}>
          <h1 className="serif-font">Shopping Cart</h1>
          <p>{cart.length} item(s)</p>
        </div>

        <div className={styles.layout}>
          <div className={styles.cartItems}>
            {cart.map((item) => (
              <div key={item.cartItemId} className={styles.cartItem}>
                <div className={styles.itemImage}>
                  <Image src={item.image} alt={item.title} fill sizes="100px" className={styles.image} />
                </div>
                
                <div className={styles.itemDetails}>
                  <Link href={`/shop/${item.id}`} className={styles.itemTitle}>{item.title}</Link>
                  <span className={styles.itemSize}>{item.selectedSize}</span>
                  <span className={styles.itemPrice}>₹{item.selectedPrice}</span>
                </div>

                <div className={styles.itemActions}>
                  <div className={styles.quantity}>
                    <button onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}>+</button>
                  </div>
                  <div className={styles.itemTotal}>
                    ₹{item.selectedPrice * item.quantity}
                  </div>
                  <button 
                    className={styles.removeBtn} 
                    onClick={() => removeFromCart(item.cartItemId)}
                    aria-label="Remove item"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            ))}
            
            <Link href="/shop" className={styles.continueShopping}>
              <ArrowLeft size={16} /> Continue Shopping
            </Link>
          </div>

          <div className={styles.summary}>
            <h2 className="serif-font">Order Summary</h2>
            <div className={styles.summaryRow}>
              <span>Subtotal</span>
              <span>₹{cartTotal}</span>
            </div>
            <div className={styles.summaryRow}>
              <span>Shipping</span>
              <span>Calculated at checkout</span>
            </div>
            <div className={`${styles.summaryRow} ${styles.totalRow}`}>
              <span>Total</span>
              <span>₹{cartTotal}</span>
            </div>
            <button className={styles.checkoutBtn} onClick={handleCheckout}>
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
