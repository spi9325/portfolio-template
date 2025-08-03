import z from "zod";

export const HeroSectionFormSchema = z.object({
  Title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  Tagline: z.string().min(2, {
    message: "Tagline must be at least 2 characters.",
  }),
  Profile: z.string().url({
    message: "Profile must be a valid URL.",
  }),
  Image: z.string().url({
    message: "Image must be a valid URL.",
  }),
});
