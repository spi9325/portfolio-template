import { z } from "zod";

export const ContactDetailsFormSchema = z.object({
  Bio: z
    .string()
    .min(10, { message: "Bio must be at least 10 characters." })
    .max(300, { message: "Bio cannot exceed 300 characters." }),

  Socials: z
    .array(z.string().url({ message: "Each social link must be a valid URL." }))
    .optional(),
});
