'use client'

import React from 'react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import {
  Card,
  CardContent
} from "@/components/ui/card"

interface Project {
  name: string
  detail: string
  location: string
}

const ProjectDetails: Project[] = [
  {
    name: "Gecko Robot",
    detail: "Develop software",
    location: "Rayong, Thailand"
  },
  {
    name: "Line Chatbot",
    detail: "Develop software",
    location: "Nakhon Pathom, Thailand"
  },
]

const ProjectsSection = () => {
  return (
    <section className="w-full">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-6 md:mt-12">
        Projects
      </h1>
      <Carousel className="mt-6 md:mt-12">
        <CarouselContent>
          {ProjectDetails.map((item) => (
            <CarouselItem key={item.name}>
              <Card>
                <CardContent className="flex items-center justify-center aspect-video">
                  <span className="text-4xl font-semibold">{item.name}</span>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default ProjectsSection;