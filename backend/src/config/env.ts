import dotenv from "dotenv";

dotenv.config();

export const env = {
  PORT: process.env.PORT || 5000,
  GEOAPIFY_API_KEY: process.env.GEOAPIFY_API_KEY || "",
};
