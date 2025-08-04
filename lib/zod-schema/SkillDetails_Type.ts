import { z } from "zod";

export const SkillFormSchema = z.object({
  Title: z
    .string(),

  SkillOne: z
    .string(),
   
  RatingOne: z
    .string(),
    
  SkillTwo: z
    .string(),
    
  RatingTwo: z
    .string(),
   
  SkillThird: z
    .string(),
   
  RatingThird: z
    .string(),
   
});