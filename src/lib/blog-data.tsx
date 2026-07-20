import {
  Server,
  Code2,
  ShoppingCart,
  Smartphone,
  Megaphone,
  Globe,
  Rocket,
  Users,
  TrendingUp,
  Zap,
  FileText,
  BarChart3,
} from "lucide-react";
import type { Category, Post } from "@/types/blog";

export const categoryIcon: Record<Category, React.ReactNode> = {
  "Web Development": <Code2 className="h-4 w-4" />,
  "IT Services": <Server className="h-4 w-4" />,
  eCommerce: <ShoppingCart className="h-4 w-4" />,
  "Digital Marketing": <Megaphone className="h-4 w-4" />,
  SEO: <Globe className="h-4 w-4" />,
  "B2B Ordering": <FileText className="h-4 w-4" />,
};

// Full content for B2B posts
const b2bContent: Record<number, string> = {
  101: `The footwear industry is evolving rapidly, and manufacturers are facing increasing pressure to modernize their operations. Despite advances in manufacturing and supply chain, many businesses still rely on manual order-taking methods during partner meets and routine distributor ordering.

Orders are often collected on paper, shared through WhatsApp, communicated over phone calls, or maintained in Excel sheets. While these methods may have worked in the past, they are no longer efficient for businesses managing large product portfolios and widespread distribution networks.

Key challenges include order errors due to complex product variants, time-consuming partner meets, lack of real-time visibility, high dependency on sales teams, and difficult routine distributor ordering.

OVENTRA provides a cloud-based B2B ordering platform designed specifically for footwear manufacturers and distributors, helping them digitize partner meet ordering and routine distributor ordering with speed and accuracy.`,
  102: `Partner meets are among the most valuable opportunities for footwear manufacturers to engage with distributors and generate seasonal business. However, many companies still rely on manual order-taking during these events, leading to delays, errors, and missed opportunities.

A Digital Partner Meet replaces traditional paper-based ordering with a mobile-enabled ordering platform. Distributors can browse the complete product catalogue, view product details, scan QR codes attached to product displays, add products directly to their cart, and submit orders instantly.

Key benefits include faster order booking, higher order accuracy, real-time order visibility, better distributor experience, and improved sales team productivity.

OVENTRA's Partner Meet module enables manufacturers to create digital events, display complete product catalogues, enable QR-based ordering, capture orders in real time, and export order data for ERP integration.`,
  103: `Manual distributor ordering creates numerous challenges for footwear businesses, including frequent order errors, orders received through multiple channels, lack of real-time visibility, time-consuming order processing, sales team spending time on administration, poor distributor experience, and difficulty scaling operations.

A digital ordering platform allows distributors to select products directly from a structured product catalogue, eliminating manual data entry and significantly improving order accuracy. Orders are centralized on a single platform, providing live dashboards that allow management to monitor orders as they are placed.

OVENTRA helps businesses digitize routine distributor ordering through a simple mobile application, enabling distributors to browse products, view designs and pricing, place orders anytime, and track order history.`,
  104: `Paper and WhatsApp may have served the footwear industry for years, but they were never designed to manage today's complex distribution networks. A dedicated mobile ordering platform offers the speed, accuracy, transparency, and scalability that modern footwear businesses need to stay competitive.

Paper-based ordering leads to handwriting errors, incorrect article codes, missing sizes or colors, time-consuming data entry, and delayed processing. WhatsApp ordering creates scattered orders, no standardized format, difficulty tracking revisions, and no product catalog.

A mobile app-based ordering platform provides structured product selection, faster order placement, improved accuracy, real-time order tracking, complete order history, and centralized management.

OVENTRA enables manufacturers to digitize their complete ordering ecosystem, supporting both partner meet ordering and routine distributor ordering through a single platform.`,
  105: `QR Code-Based Ordering is transforming footwear partner meets by enabling distributors to scan a unique QR code attached to each product using a mobile application. Instead of manually searching for products or writing article numbers, distributors simply scan, select, and submit orders instantly.

During partner meets, manufacturers typically showcase hundreds of footwear designs. Managing these manually often results in long queues, incorrect article codes, wrong sizes or colors, and delayed order finalization.

QR-based ordering provides faster order booking, higher order accuracy, better distributor experience, increased sales team productivity, real-time order visibility, and reduced post-event work.

OVENTRA enables QR-based ordering through digital product catalogues, mobile-based ordering, real-time dashboards, and ERP-ready reports.`,
  106: `For footwear manufacturers and distributors, product catalog management is one of the most challenging aspects of daily operations. Every style is available in multiple sizes, colors, variants, and packaging options, resulting in thousands of SKUs.

Challenges include thousands of SKU combinations, manual product search, incorrect product selection, frequent product launches, and lack of product standardization.

Best practices include organizing products by category, using standard product codes, displaying complete product information, enabling smart search and filters, keeping the catalog updated, and supporting mobile access.

OVENTRA allows users to manage unlimited product variants, advanced search and filters, mobile product catalog, QR code-based product selection, and centralized product management.`,
  107: `Real-time order visibility means every order placed by a distributor is instantly available to authorized users across the organization. Sales managers and management can monitor orders as they are placed, distributor-wise order status, product-wise demand, and total order value.

Without real-time visibility, management faces delayed decision making, sales teams spend too much time on administration, no visibility for sales managers, slow response to market demand, and difficult performance monitoring.

Real-time visibility improves sales productivity by allowing sales representatives to focus on selling, faster order confirmation, better coordination between teams, live monitoring during partner meets, and improved distributor experience.

OVENTRA provides live order tracking, business performance analysis, partner meet management, and centralized dashboards.`,
  108: `Choosing the right B2B ordering platform is a strategic business investment. Key factors to consider include industry-specific functionality, support for partner meets, routine distributor ordering, easy product catalog management, mobile accessibility, real-time dashboard and reporting, ERP compatibility, scalability, security and reliability, and ease of use.

For footwear manufacturers managing large product catalogs and extensive distributor networks, a purpose-built platform delivers far greater value than a generic ordering application.

OVENTRA combines partner meet ordering, routine distributor ordering, intelligent product catalog management, QR-based ordering, and real-time dashboards into one powerful platform.`,
  109: `A connected digital ordering network brings manufacturers, distributors, and dealers onto one digital platform. Instead of multiple communication channels, everyone interacts through a structured ordering system.

Benefits for manufacturers include complete visibility, faster order processing, better demand planning, and improved sales productivity. Distributors gain a dedicated ordering platform for their dealer network, while dealers enjoy a faster and more convenient ordering experience.

OVENTRA connects the entire distribution network through one integrated ecosystem, supporting both manufacturers and distributors with digital ordering capabilities.`,
  110: `A digital B2B ordering platform automates repetitive tasks, allowing businesses to handle more orders without proportionately increasing manpower. Instead of adding administrative resources, organizations can improve efficiency through automation.

As distribution networks grow, manual processes create hidden costs including additional sales coordinators, more order entry operators, increased administrative workload, higher chances of order errors, delayed order processing, and more customer support queries.

Digital ordering enables faster order processing, self-service ordering, centralized product management, real-time visibility, and scalable growth.

OVENTRA helps footwear businesses scale through partner meet ordering, routine distributor ordering, dealer ordering, smart product catalog, live dashboards, and ERP-ready integration.`,
};

export const posts: Post[] = [
  // ============================================================
  // B2B ORDERING BLOG POSTS (Featured Series)
  // ============================================================
  {
    id: 101,
    title: "Why Footwear Manufacturers Should Digitize Their B2B Ordering Process",
    excerpt:
      "Learn how digital B2B ordering helps footwear manufacturers reduce order errors, streamline partner meets, improve distributor ordering, and increase operational efficiency.",
    date: "20 Jul 2026",
    author: "OVENTRA Team",
    category: "B2B Ordering",
    tags: ["B2B Ordering", "Footwear", "Digital Transformation"],
    readTime: "8 min read",
    icon: <TrendingUp className="h-8 w-8" />,
    gradient: "linear-gradient(135deg,#6D1025,#214E8A)",
    featured: true,
    content: b2bContent[101],
  },
  {
    id: 102,
    title: "How to Conduct a Successful Digital Partner Meet for Footwear Distributors",
    excerpt:
      "Learn how footwear manufacturers can digitize partner meets, reduce order errors, improve distributor experience, and capture real-time orders with digital ordering.",
    date: "19 Jul 2026",
    author: "OVENTRA Team",
    category: "B2B Ordering",
    tags: ["Digital Partner Meet", "Footwear", "Distributors"],
    readTime: "7 min read",
    icon: <Users className="h-8 w-8" />,
    gradient: "linear-gradient(135deg,#214E8A,#8F1538)",
    content: b2bContent[102],
  },
  {
    id: 103,
    title: "7 Challenges of Manual Distributor Ordering and How to Overcome Them",
    excerpt:
      "Discover the seven biggest challenges of manual distributor ordering in the footwear industry and learn how a digital B2B ordering platform improves accuracy and efficiency.",
    date: "18 Jul 2026",
    author: "OVENTRA Team",
    category: "B2B Ordering",
    tags: ["Distributor Ordering", "Challenges", "Automation"],
    readTime: "6 min read",
    icon: <Zap className="h-8 w-8" />,
    gradient: "linear-gradient(135deg,#8F1538,#6D1025)",
    content: b2bContent[103],
  },
  {
    id: 104,
    title: "Paper, WhatsApp or Mobile App? The Future of B2B Ordering in the Footwear Industry",
    excerpt:
      "Compare paper-based, WhatsApp, and mobile app ordering for footwear businesses. Learn why digital B2B ordering improves accuracy, efficiency, and distributor experience.",
    date: "17 Jul 2026",
    author: "OVENTRA Team",
    category: "B2B Ordering",
    tags: ["B2B Ordering", "Mobile App", "Future"],
    readTime: "8 min read",
    icon: <Smartphone className="h-8 w-8" />,
    gradient: "linear-gradient(135deg,#6D1025,#8F1538)",
    content: b2bContent[104],
  },
  {
    id: 105,
    title: "How QR Code-Based Ordering is Transforming Footwear Partner Meets",
    excerpt:
      "Discover how QR code-based ordering helps footwear manufacturers digitize partner meets, improve order accuracy, reduce manual work, and deliver a seamless distributor experience.",
    date: "16 Jul 2026",
    author: "OVENTRA Team",
    category: "B2B Ordering",
    tags: ["QR Code Ordering", "Partner Meets", "Footwear"],
    readTime: "7 min read",
    icon: <FileText className="h-8 w-8" />,
    gradient: "linear-gradient(135deg,#214E8A,#6D1025)",
    content: b2bContent[105],
  },
  {
    id: 106,
    title: "Best Practices for Managing Large Product Catalogs with Multiple Sizes and Colors",
    excerpt:
      "Learn how footwear manufacturers can efficiently manage large product catalogs with multiple sizes, colors, and variants. Discover best practices for digital catalog management.",
    date: "15 Jul 2026",
    author: "OVENTRA Team",
    category: "B2B Ordering",
    tags: ["Product Catalog", "SKU Management", "Footwear"],
    readTime: "6 min read",
    icon: <BarChart3 className="h-8 w-8" />,
    gradient: "linear-gradient(135deg,#8F1538,#214E8A)",
    content: b2bContent[106],
  },
  {
    id: 107,
    title: "How Real-Time Order Visibility Improves Sales Team Productivity",
    excerpt:
      "Discover how real-time order visibility helps footwear manufacturers improve sales team productivity, streamline distributor ordering, and make faster business decisions.",
    date: "14 Jul 2026",
    author: "OVENTRA Team",
    category: "B2B Ordering",
    tags: ["Real-Time Visibility", "Sales Productivity", "Order Management"],
    readTime: "6 min read",
    icon: <Globe className="h-8 w-8" />,
    gradient: "linear-gradient(135deg,#6D1025,#214E8A)",
    content: b2bContent[107],
  },
  {
    id: 108,
    title: "Choosing the Right B2B Ordering Platform for Your Footwear Business",
    excerpt:
      "Learn how to choose the best B2B ordering platform for your footwear business. Discover key features and why OVENTRA is purpose-built for footwear manufacturers.",
    date: "13 Jul 2026",
    author: "OVENTRA Team",
    category: "B2B Ordering",
    tags: ["B2B Platform", "Selection Guide", "Footwear"],
    readTime: "9 min read",
    icon: <Rocket className="h-8 w-8" />,
    gradient: "linear-gradient(135deg,#214E8A,#8F1538)",
    content: b2bContent[108],
  },
  {
    id: 109,
    title: "From Distributor to Dealer: Building a Connected Digital Ordering Network",
    excerpt:
      "Discover how footwear manufacturers and distributors can build a connected digital ordering network that improves dealer engagement and streamlines B2B ordering.",
    date: "12 Jul 2026",
    author: "OVENTRA Team",
    category: "B2B Ordering",
    tags: ["Distributor Network", "Dealer Ordering", "Connected Network"],
    readTime: "7 min read",
    icon: <ShoppingCart className="h-8 w-8" />,
    gradient: "linear-gradient(135deg,#8F1538,#6D1025)",
    content: b2bContent[109],
  },
  {
    id: 110,
    title: "How Digital Ordering Helps Footwear Brands Scale Faster Without Increasing Operational Costs",
    excerpt:
      "Learn how digital B2B ordering helps footwear manufacturers and distributors scale faster, reduce operational costs, improve order accuracy, and streamline operations.",
    date: "11 Jul 2026",
    author: "OVENTRA Team",
    category: "B2B Ordering",
    tags: ["Digital Ordering", "Scale", "Cost Reduction"],
    readTime: "8 min read",
    icon: <Zap className="h-8 w-8" />,
    gradient: "linear-gradient(135deg,#6D1025,#214E8A)",
    content: b2bContent[110],
  },

  // ============================================================
  // EXISTING BLOG POSTS
  // ============================================================
  {
    id: 1,
    title: "Reliable Web Hosting Solutions for Growing Businesses",
    excerpt:
      "A dependable hosting layer keeps your site fast, secure, and always reachable. Here's how to choose infrastructure that scales with you instead of against you.",
    date: "06 Feb 2026",
    author: "Aanya Kapoor",
    category: "IT Services",
    tags: ["Hosting", "Infrastructure", "Uptime"],
    readTime: "4 min read",
    icon: <Server className="h-8 w-8" />,
    gradient: "linear-gradient(135deg,#6D1025,#214E8A)",
    content:
      "A dependable hosting layer keeps your site fast, secure, and always reachable. Here's how to choose infrastructure that scales with you instead of against you.",
  },
  {
    id: 2,
    title: "IT Services That Actually Move the Needle for Your Team",
    excerpt:
      "From managed security to cloud migration, the right IT partner turns technology from a cost center into a growth lever. Here's what to look for.",
    date: "04 Feb 2026",
    author: "Rohan Mehta",
    category: "IT Services",
    tags: ["Cloud", "Security", "Support"],
    readTime: "6 min read",
    icon: <Server className="h-8 w-8" />,
    gradient: "linear-gradient(135deg,#214E8A,#8F1538)",
    content: "From managed security to cloud migration, the right IT partner turns technology from a cost center into a growth lever.",
  },
  {
    id: 3,
    title: "Launching a High-Performing Shopify Storefront",
    excerpt:
      "Shopify makes it easy to sell fast — but a store that converts needs deliberate UX, speed, and merchandising decisions from day one.",
    date: "02 Feb 2026",
    author: "Priya Sharma",
    category: "eCommerce",
    tags: ["Shopify", "Conversion", "UX"],
    readTime: "5 min read",
    icon: <ShoppingCart className="h-8 w-8" />,
    gradient: "linear-gradient(135deg,#8F1538,#6D1025)",
    content: "Shopify makes it easy to sell fast — but a store that converts needs deliberate UX, speed, and merchandising decisions from day one.",
  },
  {
    id: 4,
    title: "Marketplace Management: Selling Across Every Channel",
    excerpt:
      "Running Amazon, Flipkart, and your own store at once multiplies both opportunity and operational risk. Here's how to keep it all in sync.",
    date: "28 Jan 2026",
    author: "Kabir Anand",
    category: "eCommerce",
    tags: ["Marketplaces", "Operations", "Growth"],
    readTime: "5 min read",
    icon: <Globe className="h-8 w-8" />,
    gradient: "linear-gradient(135deg,#6D1025,#8F1538)",
    content: "Running Amazon, Flipkart, and your own store at once multiplies both opportunity and operational risk.",
  },
  {
    id: 5,
    title: "B2B Ordering Platforms: A New Advantage for Manufacturers",
    excerpt:
      "As trade agreements open new markets, manufacturers with self-serve B2B ordering are positioned to capture demand faster than legacy competitors.",
    date: "27 Jan 2026",
    author: "Simran Kaur",
    category: "eCommerce",
    tags: ["B2B", "Manufacturing", "Trade"],
    readTime: "7 min read",
    icon: <ShoppingCart className="h-8 w-8" />,
    gradient: "linear-gradient(135deg,#214E8A,#6D1025)",
    content: "As trade agreements open new markets, manufacturers with self-serve B2B ordering are positioned to capture demand faster.",
  },
  {
    id: 6,
    title: "Store Migration Without the Downtime Headache",
    excerpt:
      "Moving platforms is one of the riskiest projects in eCommerce. A careful migration plan protects your SEO, your data, and your revenue.",
    date: "23 Jan 2026",
    author: "Aanya Kapoor",
    category: "Web Development",
    tags: ["Migration", "SEO", "Platform"],
    readTime: "6 min read",
    icon: <Code2 className="h-8 w-8" />,
    gradient: "linear-gradient(135deg,#8F1538,#214E8A)",
    content: "Moving platforms is one of the riskiest projects in eCommerce. A careful migration plan protects your SEO, your data, and your revenue.",
  },
  {
    id: 7,
    title: "eCommerce Services That Expand Your Reach Online",
    excerpt:
      "Beyond the storefront: fulfillment, payments, and retention tooling that turn a website into a durable revenue channel.",
    date: "21 Jan 2026",
    author: "Rohan Mehta",
    category: "Digital Marketing",
    tags: ["Growth", "Retention", "Strategy"],
    readTime: "4 min read",
    icon: <Megaphone className="h-8 w-8" />,
    gradient: "linear-gradient(135deg,#6D1025,#214E8A)",
    content: "Beyond the storefront: fulfillment, payments, and retention tooling that turn a website into a durable revenue channel.",
  },
  {
    id: 8,
    title: "Website Redesign: When and How to Refresh Your Presence",
    excerpt:
      "An outdated site quietly costs you conversions. Here are the signals that tell you it's time for a redesign — and how to plan one without losing rankings.",
    date: "16 Jan 2026",
    author: "Priya Sharma",
    category: "Web Development",
    tags: ["Design", "UX", "Branding"],
    readTime: "5 min read",
    icon: <Code2 className="h-8 w-8" />,
    gradient: "linear-gradient(135deg,#214E8A,#8F1538)",
    content: "An outdated site quietly costs you conversions. Here are the signals that tell you it's time for a redesign.",
  },
  {
    id: 9,
    title: "Corporate Websites: Building Credibility Online",
    excerpt:
      "For B2B brands, your website is often the first handshake. A professional, fast, well-structured site does more selling than you'd expect.",
    date: "14 Jan 2026",
    author: "Kabir Anand",
    category: "Web Development",
    tags: ["Corporate", "Trust", "Performance"],
    readTime: "4 min read",
    icon: <Code2 className="h-8 w-8" />,
    gradient: "linear-gradient(135deg,#6D1025,#8F1538)",
    content: "For B2B brands, your website is often the first handshake. A professional, fast, well-structured site does more selling than you'd expect.",
  },
  {
    id: 10,
    title: "Mobile App Strategy for Customer-First Brands",
    excerpt:
      "A mobile app isn't a checkbox — it's a relationship channel. Here's how to decide if your business needs one, and what makes apps get reused.",
    date: "10 Jan 2026",
    author: "Simran Kaur",
    category: "Web Development",
    tags: ["Mobile", "Retention", "Product"],
    readTime: "6 min read",
    icon: <Smartphone className="h-8 w-8" />,
    gradient: "linear-gradient(135deg,#8F1538,#6D1025)",
    content: "A mobile app isn't a checkbox — it's a relationship channel. Here's how to decide if your business needs one.",
  },
  {
    id: 11,
    title: "SEO Fundamentals Most Businesses Still Get Wrong",
    excerpt:
      "Rankings aren't magic. They come from technical hygiene, real content strategy, and patience. Here's a grounded checklist to start from.",
    date: "07 Jan 2026",
    author: "Aanya Kapoor",
    category: "SEO",
    tags: ["SEO", "Content", "Technical"],
    readTime: "8 min read",
    icon: <Globe className="h-8 w-8" />,
    gradient: "linear-gradient(135deg,#214E8A,#6D1025)",
    content: "Rankings aren't magic. They come from technical hygiene, real content strategy, and patience.",
  },
  {
    id: 12,
    title: "Paid Advertising Budgets: Spend Less, Learn Faster",
    excerpt:
      "Most ad budgets are wasted on scale before the offer is proven. A tighter testing loop gets you to profitable spend sooner.",
    date: "03 Jan 2026",
    author: "Rohan Mehta",
    category: "Digital Marketing",
    tags: ["Paid Ads", "Testing", "ROI"],
    readTime: "5 min read",
    icon: <Rocket className="h-8 w-8" />,
    gradient: "linear-gradient(135deg,#6D1025,#214E8A)",
    content: "Most ad budgets are wasted on scale before the offer is proven. A tighter testing loop gets you to profitable spend sooner.",
  },
];

export const categories: Category[] = [
  "B2B Ordering",
  "Web Development",
  "IT Services",
  "eCommerce",
  "Digital Marketing",
  "SEO",
];

export const allTags = Array.from(new Set(posts.flatMap((p) => p.tags))).sort();
