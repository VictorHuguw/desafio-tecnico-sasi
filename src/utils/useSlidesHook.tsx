"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "@/utils/constants";
import { Slide } from "@/interfaces/Slide";

const useSlidesHook = () => {
  const [slides, setSlides] = useState<Slide[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const response = await axios.get(
          `${API_BASE_URL}/api/hero-section?populate=deep,99`
        );
        const imgs = response.data?.data?.attributes?.hero?.hero_photo || [];

        const fetchedSlides: Slide[] = imgs
          .map((photo: any) => {
            const imgData = photo?.img?.data?.attributes;
            if (imgData) {
              return {
                id: photo.id,
                url_redirect: photo.url_redirect || "",
                img: {
                  data: {
                    attributes: {
                      url: imgData.url,
                      alternativeText: imgData.alternativeText || null,
                    },
                  },
                },
              };
            }
            return null;
          })
          .filter((slide: Slide | null) => slide !== null);

        setSlides(fetchedSlides);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching slides:", error.message);
        setError("Failed to fetch slides");
        setLoading(false);
      }
    };

    fetchSlides();
    
  }, []);

  return { slides, loading, error };
};

export default useSlidesHook;
