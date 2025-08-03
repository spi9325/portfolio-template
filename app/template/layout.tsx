import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Portfolio-Template",
  description: "build by sanket",
};

export default function TemplateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
      <div> 
        {children}
      </div>
   
  );
}