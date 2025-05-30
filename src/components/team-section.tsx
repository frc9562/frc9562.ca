"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Define the structure of a team member
interface TeamMember {
  id: number;
  name: string;
  role: string;
  description: string;
  image: string;
}

// Sample team members data
const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Zuhayr Khan",
    role: "Mentor",
    description: "Providing technical expertise and strategic guidance to help the team develop problem-solving skills, improve their designs, and help to develop and further refine competition strategies.",
    image: "images/leads/Zuhayr.png",
  },
  {
    id: 2,
    name: "Sahejpreet Singh",
    role: "Design Lead",
    description: "Responsible for creating and refining CAD models of the robot. He collaborates with the mechanical and electrical team to develop designs that meet game challenges and help score the most.",
    image: "images/leads/Sahejpreet.png",
  },
  {
    id: 4,
    name: "Sebastian Merino",
    role: "Programming Lead",
    description: "Leading the development of the robot's software. He ensures efficient autonomous routines, driver control responsiveness, and smooth integration of vision systems.",
    image: "images/leads/Seb.jpg",
  },
  {
    id: 5,
    name: "Ishaan Mittal",
    role: "Programming Lead",
    description: "Specializing in software development for the robot's control system. He works on automation, sensor feedback loops, and drive functionality to enhance overall performance.",
    image: "images/leads/Ishaan.jpg",
  },
  {
    id: 6,
    name: "Kishan Joshi",
    role: "Imagery/Media Lead",
    description: "He oversees the team's branding, digital content, and promotional materials while managing the graphics, videos, and social media to enhance its public and social presence.",
    image: "images/leads/Kishan.png",
  },
  {
    id: 7,
    name: "Sophia Arfan",
    role: "Award & Outreach/Business Lead",
    description: "Spearheading award submissions and community engagement efforts. She works to highlight the team's impact, manage partnerships, and financial operations.",
    image: "images/leads/Sophia.png",
  },
  {
    id: 8,
    name: "Soumyaa Kansal",
    role: "Safety Captain/ Strategy Lead",
    description: "Ensures that all team members follow safety protocols while contributing to competition strategy. She works to create a safe workspace while assisting in analyzing gameplay tactics.",
    image: "images/leads/Somaya.png",
  },
  {
    id: 9,
    name: "Muzammil Raza",
    role: "Strategy Lead",
    description: "Analyzing competition data, scouting opponents, and formulating match strategies. He works closely with drive team members to ensure effective decision-making during competitions.",
    image: "images/leads/Muzammil.png",
  }
];

export function TeamSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  // Calculate total slides needed for the carousel
  const totalSlides = teamMembers.length;
  
  // Handle responsiveness
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Ensure current index is valid when slidesToShow changes
  useEffect(() => {
    if (currentIndex > totalSlides - slidesToShow) {
      setCurrentIndex(Math.max(0, totalSlides - slidesToShow));
    }
  }, [slidesToShow, currentIndex, totalSlides]);
  
  // Handle navigation
  const goToSlide = (index: number) => {
    // Ensure the index is within bounds
    const boundedIndex = Math.min(Math.max(0, index), totalSlides - slidesToShow);
    setCurrentIndex(boundedIndex);
  };
  
  const nextSlide = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex > totalSlides - slidesToShow) {
      // Loop back to start with smooth animation
      setCurrentIndex(0);
    } else {
      setCurrentIndex(nextIndex);
    }
  };
  
  const prevSlide = () => {
    const prevIndex = currentIndex - 1;
    if (prevIndex < 0) {
      // Loop to end with smooth animation
      setCurrentIndex(Math.max(0, totalSlides - slidesToShow));
    } else {
      setCurrentIndex(prevIndex);
    }
  };
  
  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // Swipe left, go next
      nextSlide();
    }
    
    if (touchStart - touchEnd < -75) {
      // Swipe right, go previous
      prevSlide();
    }
  };

  // Calculate the number of slides to create
  const carouselSlides = [];
  for (let i = 0; i < teamMembers.length; i++) {
    carouselSlides.push(teamMembers[i]);
  }

  // Calculate transform value for current position
  const calculateTransform = () => {
    const slideWidth = 100 / slidesToShow; // Equal width for all slides
    return `translateX(-${currentIndex * slideWidth}%)`;
  };

  return (
    <section className="py-10 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-3">Meet Our Team</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our dedicated team members work tirelessly to design, build, and program our competition
            robots while promoting STEM education and teamwork.
          </p>
        </div>

        <div className="relative carousel-wrapper">
          {/* Navigation Buttons */}
          <div className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 z-10">
            <Button
              variant="outline"
              size="icon"
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/40 border-red-900/30 text-white hover:bg-black/60 hover:text-red-500"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
            </Button>
          </div>

          <div className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 z-10">
            <Button
              variant="outline"
              size="icon"
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/40 border-red-900/30 text-white hover:bg-black/60 hover:text-red-500"
              onClick={nextSlide}
            >
              <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
            </Button>
          </div>

          {/* Carousel Track */}
          <div 
            className="carousel-container overflow-hidden py-4 px-8"
            ref={carouselRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="carousel-track flex transition-transform duration-500 ease-out"
              style={{ transform: calculateTransform() }}
            >
              {carouselSlides.map((member) => (
                <div
                  key={member.id}
                  className="carousel-slide flex-shrink-0 px-3" 
                  style={{ 
                    width: `${100 / slidesToShow}%`
                  }}
                >
                  <Card className="h-full bg-gray-900 border-red-900/20 overflow-hidden flex flex-col hover:scale-[1.02] transition-transform duration-300 mx-auto">
                    <div className="relative h-44 sm:h-48 md:h-52 lg:h-56 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-center"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "https://via.placeholder.com/400x300?text=Team+Member";
                        }}
                        loading="lazy"
                      />
                      <div className="absolute bottom-0 left-0 p-3 sm:p-4 z-20">
                        <h3 className="text-lg sm:text-xl font-bold text-white line-clamp-1">{member.name}</h3>
                        <p className="text-red-500 text-sm sm:text-base font-medium">{member.role}</p>
                      </div>
                    </div>
                    <CardContent className="flex-grow p-4 sm:p-5 bg-gradient-to-b from-gray-900 to-black">
                      <p className="text-gray-300 text-sm sm:text-base line-clamp-3 sm:line-clamp-4">{member.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 gap-2">
            {Array.from({ length: totalSlides - slidesToShow + 1 }).map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? "bg-red-600 w-6" : "bg-gray-600"}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-white mb-4">We're Recruiting New Members!</h3>
          <p className="text-gray-400 max-w-2xl mx-auto mb-6">
            Want to be part of the Royal Robotics Team? If yes, you are in the right place!
            Join us and develop skills in engineering, programming, design, and teamwork.
          </p>
          <Button className="bg-red-600 hover:bg-red-700 text-white">
            Join Our Team
          </Button>
        </div>
      </div>
    </section>
  );
}
