export interface User {
  id: string;
  name: string;
  email: string;
  adress: string;
  phone: number;
  city: string;
  provider: "firebase" | "google";
}
