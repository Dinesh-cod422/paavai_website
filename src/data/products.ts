export interface Product {
  id: number;
  title: string;
  size: string;
  price: number;
  image: string;
  description: string;
  longDescription: string;
  benefits: string[];
  ingredients: string[];
}

export const products: Product[] = [
  {
    id: 1,
    title: "Pure Cow Ghee",
    size: "500ml",
    price: 550,
    image: "/images/ghee.jpeg",
    description: "Traditionally churned A2 cow milk ghee for authentic taste and health.",
    longDescription: "Our Pure Cow Ghee is made using the traditional Bilona method from farm-fresh A2 cow milk. Slow-cooked to perfection, it retains a rich, nutty aroma, golden granular texture, and essential nutrients. It's a powerhouse of health that adds an irresistible flavor to any meal.",
    benefits: [
      "Rich in Omega-3 fatty acids",
      "Improves digestion and gut health",
      "Boosts immunity",
      "No artificial preservatives"
    ],
    ingredients: ["100% Pure Cow Milk Fat"]
  },
  {
    id: 2,
    title: "Turmeric Powder",
    size: "250g",
    price: 150,
    image: "/images/turmeric_powder.jpeg",
    description: "High-curcumin, sun-dried Salem turmeric powder.",
    longDescription: "Sourced directly from the rich soils of Erode, our Turmeric Powder is sun-dried and ground to retain maximum essential oils and a high curcumin content. It brings vibrant color, authentic flavor, and immense healing properties to your daily cooking.",
    benefits: [
      "High curcumin content (natural anti-inflammatory)",
      "Enhances immune function",
      "Rich in antioxidants",
      "100% organic and pure"
    ],
    ingredients: ["Dried Salem Turmeric"]
  },
  {
    id: 3,
    title: "Nattu Sarkkarai",
    size: "500g",
    price: 120,
    image: "/images/nattu_sarkarai.jpeg",
    description: "Unrefined raw country brown sugar directly from sugarcane fields.",
    longDescription: "A healthy, traditional alternative to refined white sugar, our Nattu Sarkkarai is prepared naturally without any chemical bleaching. It retains all the minerals and iron from the sugarcane juice, offering a rich caramel flavor to your teas, coffees, and sweets.",
    benefits: [
      "Excellent source of iron",
      "Chemical-free processing",
      "Low glycemic index compared to white sugar",
      "Helps prevent anemia"
    ],
    ingredients: ["Pure Sugarcane Juice Extract"]
  },
  {
    id: 4,
    title: "Kari Masala",
    size: "200g",
    price: 180,
    image: "/images/kari_masala.jpeg",
    description: "Authentic and aromatic traditional spice blend for rich curries.",
    longDescription: "Elevate your non-veg and rich vegetarian curries with our signature Kari Masala. This blend is crafted using an age-old family recipe, carefully slow-roasting premium spices to release their natural oils, giving your dishes an unforgettable, deep, and robust flavor.",
    benefits: [
      "Authentic traditional recipe",
      "Roasted and ground fresh",
      "No added MSG or colors",
      "Boosts metabolism"
    ],
    ingredients: ["Coriander", "Cumin", "Fennel", "Black Pepper", "Cinnamon", "Cloves", "Cardamom", "Red Chillies"]
  },
  {
    id: 5,
    title: "Milagai Thool",
    size: "250g",
    price: 160,
    image: "/images/milakai_thool.jpeg",
    description: "Premium Red Chilli Powder offering perfect heat and vibrant color.",
    longDescription: "Made from the finest sun-dried red chillies carefully hand-picked for quality. Our Milagai Thool offers the perfect balance of fiery heat and vibrant natural red color, ensuring every dish is visually appealing and spicy without the use of artificial colors.",
    benefits: [
      "Rich in Vitamin C",
      "Improves digestion",
      "Vibrant natural color",
      "Spicy and authentic"
    ],
    ingredients: ["Dried Red Chillies"]
  },
  {
    id: 6,
    title: "Sathu Maavu",
    size: "500g",
    price: 350,
    image: "/images/sathu_maavu.jpeg",
    description: "Traditional nutritious multi-grain health mix for all ages.",
    longDescription: "A powerhouse of nutrition, our Sathu Maavu is prepared using over 25 carefully selected sprouted grains, millets, pulses, and nuts. This wholesome mix provides essential proteins, vitamins, and minerals, making it the perfect energy-boosting breakfast for children and adults.",
    benefits: [
      "High in natural protein and fiber",
      "Sustained energy release",
      "Aids in healthy weight management",
      "Easy to digest"
    ],
    ingredients: ["Sprouted Millets", "Almonds", "Cashews", "Green Gram", "Black Gram", "Wheat", "Cardamom"]
  },
  {
    id: 8,
    title: "Sambar Podi",
    size: "250g",
    price: 200,
    image: "/images/sambar_podi.jpeg",
    description: "Classic South Indian lentil soup spice blend.",
    longDescription: "Bring the authentic taste of a traditional South Indian kitchen to your home with our Sambar Podi. Perfectly proportioned lentils and spices are roasted to a golden perfection, delivering an aromatic, thick, and flavorful sambar every single time.",
    benefits: [
      "Authentic homemade taste",
      "Freshly ground spices",
      "No artificial flavors",
      "Rich in proteins and spices"
    ],
    ingredients: ["Coriander", "Red Chillies", "Toor Dal", "Chana Dal", "Fenugreek", "Turmeric", "Cumin", "Black Pepper", "Asafoetida"]
  },
  {
    id: 9,
    title: "Coriander Powder",
    size: "250g",
    price: 130,
    image: "/images/malli_thool.jpeg",
    description: "Freshly ground Malli Thool (Coriander Powder) with a sweet, earthy aroma.",
    longDescription: "Ground from premium quality, plump coriander seeds, our Malli Thool provides a mild, earthy, and sweet aroma. It acts as the perfect thickening agent for gravies and curries while imparting a subtle and cooling flavor profile to balance spicy dishes.",
    benefits: [
      "Cooling effect on the body",
      "Promotes healthy digestion",
      "Rich in dietary fiber",
      "Enhances curry texture"
    ],
    ingredients: ["Dried Coriander Seeds"]
  }
];
