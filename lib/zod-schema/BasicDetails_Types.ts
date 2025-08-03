import z from "zod";

export const BasicDetailsFormSchema = z.object({
  Name: z.string().min(2, {
    message: "YourName must be at least 2 characters.",
  }),
  Email: z.email({message:"provide valid email"}),
  Phone: z.string(),
  Age: z.number(),
  Projects: z.number(),
  Experience: z.number(),
  Location:z.string().min(3,{message:"min 3 char location"}),
  Role:z.string().min(3,{message:"min 3 char role"})
})