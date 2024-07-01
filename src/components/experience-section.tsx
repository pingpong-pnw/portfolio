'use client'

import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ExperienceSection = () => {
  return (
    <section className="w-full">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-6 md:mt-12">
        Experiences
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-5 mt-4">
        <div className="col-span-2 md:row-span-2">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="working">
              <AccordionTrigger>
                <div className="text-base">
                  {"Transtron Thailand"}
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias commodi corporis eum minima necessitatibus
                  odio officiis reiciendis reprehenderit? Accusantium aspernatur ducimus laboriosam laborum libero magni non odit quis sint velit.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias commodi corporis eum minima necessitatibus
                  odio officiis reiciendis reprehenderit? Accusantium aspernatur ducimus laboriosam laborum libero magni non odit quis sint velit.
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="col-span-2">
          <Accordion type="single" collapsible>
            <AccordionItem value="working">
              <AccordionTrigger>
                <div className="text-base">
                  {"Transtron Thailand"}
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias commodi corporis eum minima necessitatibus
                  odio officiis reiciendis reprehenderit? Accusantium aspernatur ducimus laboriosam laborum libero magni non odit quis sint velit.
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="col-span-2">
          <Accordion type="single" collapsible>
            <AccordionItem value="working">
              <AccordionTrigger>
                <div className="text-base">
                  {"Transtron Thailand"}
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias commodi corporis eum minima necessitatibus
                  odio officiis reiciendis reprehenderit? Accusantium aspernatur ducimus laboriosam laborum libero magni non odit quis sint velit.
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;