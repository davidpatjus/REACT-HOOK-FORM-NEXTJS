import { parse } from "path";
import {z} from "zod";

export const userSchema = z.object({
    name: z.string().min(3, {message: "Name must be at least 3 characters long"}).max(50, {message: "Name must be less than 50 characters long"}),
    email:z.string().email({message: "Please enter a valid email"}),
    password: z.string().min(6, {message: "Password must be at least 6 characters long"}),
    confirmPassword: z.string().min(6, {message: "Password must be at least 6 characters long"}),
    weight: z.string().refine(weight => !isNaN(parseFloat(weight)), {message: "Weight must be a number"}),
    plan: z.enum(["free", "basic", "medium", "premium"])
})