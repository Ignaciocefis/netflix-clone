import { object, string } from "zod";

export const signInSchema = object({
  email: string({ required_error: "Email is required" }).min(2, "Email is too short").email("Invalid email"),
  password: string({ required_error: "Password is required" }).min(2, "Password is too short"),
});