import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { ArrowLeft, Leaf, ShieldCheck, CheckCircle2 } from "lucide-react";
import { products } from "../../../data/products";
import ProductActions from "./ProductActions";
import styles from "./ProductDetails.module.css";

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const { id } = await params;
  const product = products.find((p) => p.id === parseInt(id));
  
  if (!product) return { title: "Product Not Found" };

  return {
    title: product.title,
    description: product.description,
    openGraph: {
      title: `${product.title} | Paavai Paarampariyam`,
      description: product.description,
      images: [{ url: product.image, width: 800, height: 800, alt: product.title }],
    },
  };
}

// In Next.js App Router, dynamic params must be awaited or correctly typed.
export default async function ProductDetails({ params }: { params: { id: string } }) {
  const { id } = await params;
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    notFound();
  }

  return (
    <main className={styles.main}>
      <div className="container">
        {/* Breadcrumb */}
        <div className={styles.breadcrumb}>
          <Link href="/shop" className={styles.backLink}>
            <ArrowLeft size={16} /> Back to Shop
          </Link>
          <span className={styles.separator}>/</span>
          <span className={styles.current}>{product.title}</span>
        </div>

        <div className={styles.productLayout}>
          {/* Left Column: Image */}
          <div className={styles.imageColumn}>
            <div className={styles.imageContainer}>
              <Image
                src={product.image}
                alt={product.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className={styles.productImage}
              />
            </div>
          </div>

          {/* Right Column: Details */}
          <div className={styles.detailsColumn}>
            <div className={styles.badges}>
              <span className={styles.badge}><Leaf size={14} /> 100% Natural</span>
              <span className={styles.badge}><ShieldCheck size={14} /> Premium Quality</span>
            </div>

            <h1 className={`${styles.title} serif-font`}>{product.title}</h1>
            <p className={styles.shortDesc}>{product.description}</p>
            
            <p className={styles.longDesc}>{product.longDescription}</p>

            <ProductActions product={product} />

            <div className={styles.infoSection}>
              <div className={styles.benefitsBlock}>
                <h3>Why Choose {product.title}?</h3>
                <ul className={styles.benefitsList}>
                  {product.benefits.map((benefit, index) => (
                    <li key={index}>
                      <CheckCircle2 size={18} className={styles.checkIcon} />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.ingredientsBlock}>
                <h3>Ingredients</h3>
                <p>{product.ingredients.join(", ")}</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </main>
  );
}
