"use client";
import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { ContactDetailsFormSchema } from "@/lib/zod-schema/ContactDetailsFormSchema";
import axios from "axios";


export const AboutSectionForm = () => {
  const form = useForm<z.infer<typeof ContactDetailsFormSchema>>({
    resolver: zodResolver(ContactDetailsFormSchema),
    defaultValues: {
      Bio: "",
      Socials: [],
    },
    mode: "onChange",
  });

  const saveAboutSectionDetails =async (values: z.infer<typeof ContactDetailsFormSchema>) => {
      const Email = localStorage.getItem("Email")
    
    await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/addtemplate/aboutdata`,
      {
        Bio:values.Bio,
        Social:values.Socials,
        Email:Email
      }
    );
  };

  return (
    <FormProvider {...form}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(saveAboutSectionDetails)} className="space-y-6 max-w-md mx-auto">
          
          <FormField
            control={form.control}
            name="Bio"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bio</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Write a short bio" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        
          <FormField
            control={form.control}
            name="Socials"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Social Links (comma-separated URLs)</FormLabel>
                <FormControl>
                  <Input
                    placeholder="https://link1.com, https://link2.com"
                    onChange={(e) => {
                      const urls = e.target.value
                        .split(",")
                        .map((url) => url.trim())
                        .filter((url) => url !== "");
                      field.onChange(urls);
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </Form>
    </FormProvider>
  );
};
