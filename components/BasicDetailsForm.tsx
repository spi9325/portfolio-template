"use client";
import React from "react";
import axios from "axios"
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
import { BasicDetailsFormSchema } from "@/lib/zod-schema/BasicDetails_Types";
import z from "zod";

export const BasicDetailsForm = () => {
  const form = useForm<z.infer<typeof BasicDetailsFormSchema>>({
    resolver: zodResolver(BasicDetailsFormSchema),
    mode: "onChange",
    defaultValues: {
      Name: "",
      Email: "",
      Phone: "1234567891",
      Age: 22,
      Projects: 5,
      Experience: 2,
      Location: "",
      Role: "",
    },
  });
  async function saveBasicDetails(
    values: z.infer<typeof BasicDetailsFormSchema>
  ) {
    const storeEmail = localStorage.setItem("Email",JSON.stringify({Email:values.Email}))
      const result = await axios.post(
  `${process.env.NEXT_PUBLIC_BACKEND_URL}/addtemplate/basicdata`,
  {
    Name: values.Name,
    Email: values.Email,
    Age: values.Age,
    Projects: values.Projects,
    Experience: values.Experience,
    Location: values.Location,
    Role: values.Role,
  }
);

  }
  return (
    <FormProvider {...form}>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(saveBasicDetails)}
          className="space-y-8"
        >
          <FormField
            control={form.control}
            name="Name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Your Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="Email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter Your Email"
                    {...field}
                    type="email"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid grid-cols-3 gap-3">
            <FormField
              control={form.control}
              name="Age"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Age</FormLabel>
                  <FormControl>
                    <Input placeholder="Your Age" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="Projects"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Total Projects</FormLabel>
                  <FormControl>
                    <Input placeholder="Your Total Projects" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="Experience"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Experience</FormLabel>
                  <FormControl>
                    <Input placeholder="Your Experience" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <FormField
              control={form.control}
              name="Location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Your Location" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="Role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Role</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Your Role" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </FormProvider>
  );
};
