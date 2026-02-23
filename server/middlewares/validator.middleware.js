import { z } from 'zod'

export const inputValidationSchema = z.object({
    name: z.
        string().
        min(2, "Name must be atleast 2 characters").
        max(50, "Name must not exceed 50 characters").
        regex(/^[A-Za-z\s]+$/, "Name can only contains letters and spaces"),

    email: z.
        string().
        email("Invalid email format").
        max(100, "Email too long"),

    message: z.
        string().
        min(20, "Message must be atleast 20 characters").
        max(100, "Message must not exceed more than 1000 characters")
})