"use client";

import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

// Define the structure of a testimonial
interface Testimonial {
  id: number;
  quote: string;
  author: string;
  position: string;
  avatar: string;
}

// Sample testimonials data
const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Working on the electrical team has given me hands-on experience with wiring, sensors, and troubleshooting. I love how our team comes together to solve problems and make the best robot possible!",
    author: "Elias Macero Gutierrez",
    position: "Electrical Team Member",
    avatar: "/images/testimonials/electrical.jpg",
  },
  {
    id: 2,
    quote: "This team has pushed me to improve my coding skills and think creatively. Writing autonomous routines and optimizing our robot's performance has been a rewarding challenge. FIRST Robotics truly prepares you for the real world!",
    author: "Lucas D'Souza",
    position: "Programming Team Member",
    avatar: "/images/testimonials/programming.jpg",
  },
  {
    id: 3,
    quote: "FIRST Robotics isn't just about building robots—it's about building a brand. From designing team merchandise to managing social media, I've discovered my passion for digital design and storytelling.",
    author: "Merwyn Lobo",
    position: "Imagery & Media Team Member",
    avatar: "/images/testimonials/media.jpg",
  },
  {
    id: 4,
    quote: "Being part of Royal Robotics has been an incredible experience. I've gained hands-on engineering skills, learned how to collaborate under pressure, and built lifelong friendships. The excitement of competition season is unmatched!",
    author: "Nathan Vargeese",
    position: "Mechanical Team Member",
    avatar: "/images/testimonials/mechanical.jpg",
  },
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextTestimonial = useCallback(() => {
    if (isAnimating) return;

    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setIsAnimating(false);
    }, 500);
  }, [isAnimating]);

  const prevTestimonial = useCallback(() => {
    if (isAnimating) return;

    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
      setIsAnimating(false);
    }, 500);
  }, [isAnimating]);

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);

    return () => clearInterval(interval);
  }, [nextTestimonial]);

  const currentTestimonial = testimonials[activeIndex];

  return (
    <section className="py-20 royal-gradient" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4 animate-fade-in">Testimonials</h2>
          <p className="text-gray-300 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Hear from some of our students that have been through this program for more than a year!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Navigation buttons */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 -ml-6">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-black/30 backdrop-blur-sm border-red-900/20 text-white hover:bg-black/50"
                onClick={prevTestimonial}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
            </div>

            <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 -mr-6">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-black/30 backdrop-blur-sm border-red-900/20 text-white hover:bg-black/50"
                onClick={nextTestimonial}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>

            {/* Testimonial Card */}
            <Card
              className={`bg-black/40 backdrop-blur-sm border-red-900/20 overflow-hidden relative transition-opacity duration-500 ${isAnimating ? "opacity-0" : "opacity-100"
                }`}
            >
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col items-center">
                  <Quote className="h-12 w-12 text-red-500 mb-6" />

                  <blockquote className="text-white text-xl md:text-2xl text-center italic mb-8">
                    "{currentTestimonial.quote}"
                  </blockquote>

                  <div className="flex items-center">
                    <Avatar className="h-16 w-16 border-2 border-red-600">
                      <AvatarImage src={currentTestimonial.avatar} alt={currentTestimonial.author} />
                      <AvatarFallback className="bg-red-900 text-white">
                        {currentTestimonial.author.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>

                    <div className="ml-4 text-left">
                      <div className="font-bold text-white">{currentTestimonial.author}</div>
                      <div className="text-red-400 text-sm">{currentTestimonial.position}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all ${index === activeIndex ? "bg-red-600 w-6" : "bg-gray-600"
                    }`}
                  onClick={() => {
                    if (!isAnimating) {
                      setIsAnimating(true);
                      setTimeout(() => {
                        setActiveIndex(index);
                        setIsAnimating(false);
                      }, 500);
                    }
                  }}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Add display name
Testimonials.displayName = "Testimonials";
