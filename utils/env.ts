import dotenv from "dotenv";

dotenv.config();

export const env = {
  baseUrl: process.env.BASE_URL!,
  password:process.env.DEMO_PASSWORD!,
  email:process.env.DEMO_EMAIL!,
};