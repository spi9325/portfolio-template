import { z } from "zod";

export const ServicesFormSchema = z.object({
  Service: z
    .string()
    .min(3, { message: "Title must be at least 3 characters." })
    .max(100, { message: "Title must be under 100 characters." }),

  Description: z
    .string()
    .min(10, { message: "Description must be at least 10 characters." })
    .max(500, { message: "Description must be under 500 characters." }),
});
