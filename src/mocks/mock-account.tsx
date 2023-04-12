import { IAccount } from "../interfaces/IAccount";

export const mockAccount: IAccount = {
  email: "sisko@ds9.org",
  password: "1701",
  accountName: "sisko",
  fullName: "Benjamin Lafayette Sisko",
  displayName: "Captain Sisko",
  pronouns: "he/him",
  location: {
    country: "Bajoran",
    state: "BA",
    city: "Ashalla",
  },
  contact: {
    contactMethod: "Communicator",
    contactInfo: "N/A",
  },
  professionalDetails: {
    profession: "Captain",
    services: "Fly a Ship",
  },
};
