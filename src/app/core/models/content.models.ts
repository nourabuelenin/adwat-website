/**
 * Service Model - Represents a service offering
 */
export interface Service {
  id: string;
  title: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
  icon?: string;
  link?: string;
  featured?: boolean;
}

/**
 * Project/Case Study Model
 */
export interface Project {
  id: string;
  title: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
  industry: {
    en: string;
    ar: string;
  };
  client?: string;
  year?: number;
  image?: string;
  tags?: string[];
  link?: string;
  featured?: boolean;
}

/**
 * Testimonial Model
 */
export interface Testimonial {
  id: string;
  clientName: {
    en: string;
    ar: string;
  };
  position: {
    en: string;
    ar: string;
  };
  company: {
    en: string;
    ar: string;
  };
  content: {
    en: string;
    ar: string;
  };
  avatar?: string;
  rating?: number;
}

/**
 * Partner/Client Logo Model
 */
export interface Partner {
  id: string;
  name: string;
  logo: string;
  website?: string;
  category?: 'government' | 'enterprise' | 'partner';
}

/**
 * FAQ Model
 */
export interface FAQ {
  id: string;
  question: {
    en: string;
    ar: string;
  };
  answer: {
    en: string;
    ar: string;
  };
  category?: string;
  order?: number;
}

/**
 * Why Choose Us Feature Model
 */
export interface Feature {
  id: string;
  title: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
  icon?: string;
}

/**
 * Navigation Menu Item
 */
export interface MenuItem {
  label: {
    en: string;
    ar: string;
  };
  route: string;
  children?: MenuItem[];
}

/**
 * SEO Meta Data
 */
export interface SEOMeta {
  title: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
  keywords?: string[];
  ogImage?: string;
}

/**
 * Contact Info Model
 */
export interface ContactInfo {
  type: 'email' | 'phone' | 'address' | 'fax';
  label: {
    en: string;
    ar: string;
  };
  value: string;
  country?: 'SA' | 'EG';
  icon?: string;
}
