"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useCart } from "@/context/CartContext";
import styles from "./Contact.module.css";

export default function ContactPage() {
  const { showToast } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const userMessage = formData.get("message") as string;

    const phoneNumber = "917200189461"; // Actual business WhatsApp number
    const whatsappMessage = `*New Website Inquiry*%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Subject:* ${subject}%0A%0A*Message:*%0A${userMessage}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
    window.open(whatsappUrl, "_blank");

    // Clear the form after sending
    e.currentTarget.reset();
  };

  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className={`${styles.title} serif-font`}>Get in Touch</h1>
            <p className={styles.subtitle}>We'd love to hear from you</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className={styles.contentSection}>
        <div className={`container ${styles.gridContainer}`}>
          
          {/* Contact Information */}
          <div className={styles.infoColumn}>
            <div className={styles.infoCard}>
              <h2 className="serif-font">Contact Information</h2>
              <p className={styles.infoDescription}>
                Whether you have a question about our traditional products, need assistance with an order, or just want to say hello, we're here for you.
              </p>

              <div className={styles.infoList}>
                <div className={styles.infoItem}>
                  <div className={styles.iconWrapper}>
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3>Visit Us</h3>
                    <p><strong>Physical Shop:</strong><br />Opening Soon!</p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.iconWrapper}>
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3>Call Us</h3>
                    <p>+91 7200189461<br />Mon-Sat: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.iconWrapper}>
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3>Email Us</h3>
                    <p>paavaipaarambariyam@gmail.com<br />We reply within 24 hours.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={styles.formColumn}>
            <div className={styles.formCard}>
              <h2 className="serif-font">Send a Message</h2>
              <p className={styles.formDescription}>Fill out the form below and our team will get back to you shortly.</p>
              
              <form className={styles.contactForm} onSubmit={handleSubmit}>
                <div className={styles.inputGroup}>
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="name" required placeholder="Enter your full name" />
                </div>
                
                <div className={styles.inputGroup}>
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" required placeholder="Enter your email address" />
                </div>
                
                <div className={styles.inputGroup}>
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" name="subject" required placeholder="What is this regarding?" />
                </div>
                
                <div className={styles.inputGroup}>
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows={5} required placeholder="Write your message here..."></textarea>
                </div>
                
                <button type="submit" className={styles.submitBtn}>
                  Send via WhatsApp <Send size={18} />
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
