"use client";

import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormField, Form, FormItem, FormLabel, FormControl, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { z } from "zod";
import { ClientAndTestimonialFormSchema } from "@/lib/zod-schema/ClientAndTestimonialFormSchema";
import { Textarea } from "./ui/textarea";
import axios from "axios";


export const ClientAndTestimonialForm = () => {
  const form = useForm<z.infer<typeof ClientAndTestimonialFormSchema>>({
    resolver: zodResolver(ClientAndTestimonialFormSchema),
    defaultValues: {
      Client: "",
      Review: ""
    },
    mode: "onChange"
  });

  const saveClientAndTestimonialDetails =async (values: z.infer<typeof ClientAndTestimonialFormSchema>) => {
    const Email = localStorage.getItem("Email")
    
     await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/addtemplate/testimonialdata`,
      {
        Client:values.Client,
        Review:values.Review,
        Email:Email
      }
    );
  };

  return (
    <FormProvider {...form}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(saveClientAndTestimonialDetails)} className="space-y-6">
          <FormField
            control={form.control}
            name="Client"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Client Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter client name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="Review"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Client Review</FormLabel>
                <FormControl>
                  <Textarea placeholder="Enter Description" {...field} rows={4} />
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
