export interface IAccount {
  email?: string;
  password?: string;
  accountName?: string;
  fullName?: string;
  isFullNameVisible?: boolean;
  displayName?: string;
  pronouns?: string;
  shortBio?: string;
  location?: {
    country?: string;
    state?: string;
    city?: string;
  };
  contact?: {
    contactMethod?: ContactMethods;
    contactInfo?: string;
    isContactVisible?: boolean;
  };
  professionalDetails?: {
    profession?: string;
    services?: string[];
  };
  images?: {
    avatar: string;
    banner: string;
  };
  agreedToTerms?: boolean;
}

export type ContactMethods = "WhatsApp" | "Email" | "Phone" | "Social";
