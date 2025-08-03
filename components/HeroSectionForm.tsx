"use client";

import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { HeroSectionFormSchema } from "@/lib/zod-schema/HeroSectionFormSchema";
import axios from "axios";

export const HeroSectionForm = () => {
  const form = useForm<z.infer<typeof HeroSectionFormSchema>>({
    resolver: zodResolver(HeroSectionFormSchema),
    mode: "onChange",
    defaultValues: {
      Title: "",
      Tagline: "",
      Profile: "",
      Image: "",
    },
  });

  async function saveHeroSectionDetails(
    values: z.infer<typeof HeroSectionFormSchema>
  ) {
    const Email = localStorage.getItem("Email")
    await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/addtemplate/herodata`,
      {
        Title: values.Title,
        Tagline: values.Tagline,
        Profile: values.Profile,
        Image: values.Image,
        Email:Email
      }
    );
  }

  return (
    <FormProvider {...form}>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(saveHeroSectionDetails)}
          className="space-y-8"
        >
          <FormField
            control={form.control}
            name="Title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="Tagline"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tagline</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your tagline" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="Profile"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Profile URL</FormLabel>
                <FormControl>
                  <Input placeholder="https://example.com/profile" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="Image"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Image URL</FormLabel>
                <FormControl>
                  <Input
                    placeholder="https://example.com/image.jpg"
                    {...field}
                  />
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
