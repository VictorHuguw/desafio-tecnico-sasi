"use client"
import React from "react";
import Carousel from "@/components/Carousel/Carousel";
import useSlidesHook from "@/utils/useSlidesHook";

const Page: React.FC = () => {
  const { slides, loading, error } = useSlidesHook();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div>
      <Carousel slidesData={slides} />
    </div>
  );
};

export default Page;
