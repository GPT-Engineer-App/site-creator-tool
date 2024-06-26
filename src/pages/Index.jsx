import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-white">
      <Card className="w-3/4 bg-white shadow-lg">
        <CardHeader>
          <CardTitle className="text-4xl text-center text-black">
            Welcome to Riley ABA's Online Library
          </CardTitle>
        </CardHeader>
        <CardContent className="text-lg text-black p-6">
          <p>
            Welcome to Riley ABA's online library for Programs and Materials! We are delighted to have you here. At Riley ABA, we are dedicated to providing high-quality resources and support for Applied Behavior Analysis (ABA) professionals, students, and their families. Our online library is a comprehensive repository designed to assist you in accessing a wide range of programs, materials, and tools to enhance your treatment plans.
          </p>
          <Separator className="my-4" />
          <p>
            Explore our extensive collection of resources, meticulously curated to ensure they meet the highest standards of efficiency and reliability. Whether you are seeking intervention programs, educational materials, or toys, our library is here to support your journey here at Riley ABA.
          </p>
          <Separator className="my-4" />
          <p>
            We are committed to yours, RBT's, and clients' success and are here to support you every step of the way.
          </p>
        </CardContent>
      </Card>
      <div className="mt-8">
        <img src="/images/riley-aba-building.png" alt="Riley ABA Building" className="rounded-lg shadow-lg" />
      </div>
    </div>
  );
};

export default Index;