"use client";

import { useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Award,
  ChartBar,
  Cog,
  Lightbulb,
  Code,
  Image
} from "lucide-react";

export function Subteams() {
  const cardsRef = useRef<HTMLDivElement>(null);

  // Add scroll animation when component is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const cardElements = cardsRef.current?.querySelectorAll(".team-card");
    if (cardElements) {
      cardElements.forEach((card) => {
        observer.observe(card);
      });
    }

    return () => {
      if (cardElements) {
        cardElements.forEach((card) => {
          observer.unobserve(card);
        });
      }
    };
  }, []);

  return (
    <section className="py-24 bg-black" id="subteams">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="md:col-span-1 animate-slide-in-left">
            <div className="sticky top-32 space-y-6">
              <h2 className="text-3xl font-bold text-white">The Sub-teams at Bishop Reding</h2>
              <p className="text-gray-400">
                Bishop Reding First Robotics Team Leads are dedicated and passionate student leaders.
                Our team consists of various specialized groups working together toward success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/about#team">
                  <Button className="bg-red-600 hover:bg-red-700 text-white w-full sm:w-auto">
                    Join Us
                  </Button>
                </Link>
                <Link href="/about">
                  <Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-950 w-full sm:w-auto">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="md:col-span-2" ref={cardsRef}>
            <div className="space-y-6">
              <Card className="bg-red-900/20 border-red-900/30 overflow-hidden team-card">
                <CardContent className="p-6 relative">
                  <span className="absolute top-4 right-6 text-3xl font-bold text-red-600/40">01</span>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-red-600 rounded-lg">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Awards / Outreach</h3>
                      <p className="text-gray-300">
                        Responsible for securing sponsorships, organizing fundraising initiatives, and managing the team's budget to ensure financial sustainability. This subteam collaborates with industry professionals, applies for grants, and builds relationships with sponsors to support the team's long-term success.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/30 border-red-900/30 overflow-hidden team-card">
                <CardContent className="p-6 relative">
                  <span className="absolute top-4 right-6 text-3xl font-bold text-red-600/40">02</span>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-red-600 rounded-lg">
                      <ChartBar className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Strategy</h3>
                      <p className="text-gray-300">
                        Analyzes game rules, opponent tactics, and match dynamics to develop data-driven gameplay strategies. By leveraging scouting reports, simulations, and predictive modeling, this subteam helps optimize robot performance and decision-making during competitions.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-red-900/20 border-red-900/30 overflow-hidden team-card">
                <CardContent className="p-6 relative">
                  <span className="absolute top-4 right-6 text-3xl font-bold text-red-600/40">03</span>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-red-600 rounded-lg">
                      <Cog className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Engineering</h3>
                      <p className="text-gray-300">
                        Designs, fabricates, and assembles the robot using advanced CAD software and tools like CNC machines, 3D printers, and laser cutters. They collaborate with other subteams to ensure all components are precise, durable, and competition-ready, specializing in pneumatics, drivetrain systems, and mechanical linkages.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/30 border-red-900/30 overflow-hidden team-card">
                <CardContent className="p-6 relative">
                  <span className="absolute top-4 right-6 text-3xl font-bold text-red-600/40">04</span>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-red-600 rounded-lg">
                      <Lightbulb className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Electrical</h3>
                      <p className="text-gray-300">
                        Wires and integrates motors, sensors, controllers, and other electronic components to ensure seamless communication between hardware and software. This subteam troubleshoots electrical issues, optimizes power distribution, and ensures the robot's systems operate safely and efficiently.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-red-900/20 border-red-900/30 overflow-hidden team-card">
                <CardContent className="p-6 relative">
                  <span className="absolute top-4 right-6 text-3xl font-bold text-red-600/40">05</span>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-red-600 rounded-lg">
                      <Code className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Programming</h3>
                      <p className="text-gray-300">
                        Develops, tests, and refines code to control the robot's autonomous and teleoperated functions. This subteam works with machine vision, sensor integration, and AI-driven decision-making to improve responsiveness, accuracy, and adaptability in competitive matches.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/30 border-red-900/30 overflow-hidden team-card">
                <CardContent className="p-6 relative">
                  <span className="absolute top-4 right-6 text-3xl font-bold text-red-600/40">06</span>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-red-600 rounded-lg">
                      <Image className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Media</h3>
                      <p className="text-gray-300">
                        Manages branding, social media, and visual storytelling to showcase the team's achievements and engage the broader community. This subteam produces promotional materials, maintains the team's website, creates video content, and ensures a strong and professional team identity.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
