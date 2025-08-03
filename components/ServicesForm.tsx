"use client";

import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ServicesFormSchema } from "@/lib/zod-schema/ServicesFormSchema"; // adjust path if needed
import { z } from "zod";
import axios from "axios";

export const ServicesForm = () => {
  const form = useForm<z.infer<typeof ServicesFormSchema>>({
    resolver: zodResolver(ServicesFormSchema),
    defaultValues: {
      Service: "",
      Description: "",
    },
    mode: "onChange",
  });

  const saveServiceDetails =async (values: z.infer<typeof ServicesFormSchema>) => {
    const store = JSON.parse(localStorage.getItem("Email")!);
    
    const result = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/addtemplate/servicedata`,
      {
        Service:values.Service,
        Description:values.Description,
        Email:store.Email
      }
    );
  };

  return (
    <FormProvider {...form}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(saveServiceDetails)} className="space-y-6">
          <FormField
            control={form.control}
            name="Service"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Service</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="Description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
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
