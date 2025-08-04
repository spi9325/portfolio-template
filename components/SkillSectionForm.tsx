"use client";

import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormField, Form, FormItem, FormLabel, FormControl, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { z } from "zod";

import axios from "axios";
import { SkillFormSchema } from "@/lib/zod-schema/SkillDetails_Type";


export const SkillSectionForm = () => {
  const form = useForm<z.infer<typeof SkillFormSchema>>({
    resolver: zodResolver(SkillFormSchema),
    defaultValues: {
        Title:"",
        SkillOne:"",
        RatingOne:"",
        SkillTwo:"",
        RatingTwo:"",
        SkillThird:"",
        RatingThird:"",
    },
    mode: "onChange"
  });

  const saveSkillDetails =async (values: z.infer<typeof SkillFormSchema>) => {
    const Email = localStorage.getItem("Email")
    
     await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/addtemplate/skilldata`,
      {
        Title:values.Title,
        SkillOne:values.SkillOne,
        RatingOne:values.RatingOne,
        SkillTwo:values.SkillTwo,
        RatingTwo:values.RatingTwo,
        SkillThird:values.SkillThird,
        RatingThird:values.RatingThird,
        Email
      }
    );
  };

  return (
    <FormProvider {...form}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(saveSkillDetails)} className="space-y-6">
          <FormField
            control={form.control}
            name="Title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="SkillOne"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Skill</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Skill" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="RatingOne"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Rating</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Rating" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="SkillTwo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>SkillTwo</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Skill" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="RatingTwo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>RatingTwo</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Rating" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="SkillThird"
            render={({ field }) => (
              <FormItem>
                <FormLabel>SkillThird</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Skill" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="RatingThird"
            render={({ field }) => (
              <FormItem>
                <FormLabel>RatingThird</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Rating" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </FormProvider>
  );
};
