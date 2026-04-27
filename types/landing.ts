export type Feature = {
  icon: string;
  title: string;
  description: string;
};

export type Plan = {
  id: "artesano" | "taller" | "industrial";
  title: string;
  subtitle: string;
  monthlyPrice: string;
  yearlyPrice: string;
  highlighted?: boolean;
  cta: string;
  features: string[];
};

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  imageUrl: string;
};
