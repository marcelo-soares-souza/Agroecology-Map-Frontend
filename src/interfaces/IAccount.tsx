export interface IAccount {
  email?: string;
  password?: string;
  accountName?: string;
  fullName?: string;
  displayName?: string;
  pronouns?: string;
  location?: {
    country?: string;
    state?: string;
    city?: string;
  };
  contact?: {
    contactMethod?: string;
    contactInfo?: string;
  };
  professionalDetails?: {
    profession?: string;
    services?: string;
  };
}
