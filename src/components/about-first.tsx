"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Wrench, Trophy, Brain } from "lucide-react";

export function AboutFirst() {
  const [activeTab, setActiveTab] = useState("what");

  return (
    <section className="py-24 bg-black" id="about-first">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4 animate-fade-in">FIRST Robotics Competition</h2>
          <p className="text-gray-400 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Inspiring young people to be science and technology leaders and innovators
          </p>
        </div>

        <Tabs
          defaultValue="what"
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <div className="flex justify-center mb-8">
            <TabsList className="bg-gray-900/50 border border-red-900/20">
              <TabsTrigger
                value="what"
                className="data-[state=active]:bg-red-900 data-[state=active]:text-white"
              >
                What is FIRST?
              </TabsTrigger>
              <TabsTrigger
                value="goals"
                className="data-[state=active]:bg-red-900 data-[state=active]:text-white"
              >
                Our Goals
              </TabsTrigger>
              <TabsTrigger
                value="impact"
                className="data-[state=active]:bg-red-900 data-[state=active]:text-white"
              >
                Community Impact
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="what" className="mt-0 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <Card className="bg-gray-900/50 border-red-900/20 h-full">
                  <CardContent className="p-6 flex flex-col justify-center h-full">
                    <h3 className="text-xl font-bold text-white mb-4">What is FIRST?</h3>
                    <p className="text-gray-300 mb-4">
                      FIRST (For Inspiration and Recognition of Science and Technology) is an international youth organization that operates the FIRST Robotics Competition, FIRST LEGO League, and other programs designed to inspire young people to pursue education and career opportunities in STEM fields.
                    </p>
                    <p className="text-gray-300">
                      Founded in 1989 by inventor Dean Kamen, FIRST has grown into a global movement impacting millions of students, with programs that combine the excitement of sport with the rigors of science and technology.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="order-1 md:order-2 animate-slide-in-right">
                <img
                  src="/images/home_page/about_first/what.png"
                  alt="FIRST Robotics Competition"
                  className="rounded-lg shadow-xl w-full h-auto object-cover aspect-video border border-red-900/20"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://via.placeholder.com/600x400?text=FIRST+Robotics";
                  }}
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="goals" className="mt-0 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <img
                  src="/images/home_page/about_first/foster_ino.png"
                  alt="FIRST Robotics Goals"
                  className="rounded-lg shadow-xl w-full h-auto object-cover aspect-video border border-red-900/20"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://via.placeholder.com/600x400?text=FIRST+Goals";
                  }}
                />
              </div>
              <div>
                <Card className="bg-gray-900/50 border-red-900/20">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-red-600 text-white p-3 rounded-lg mt-1 flex-shrink-0">
                        <Brain className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">Foster Innovation</h3>
                        <p className="text-gray-300">
                          FIRST aims to create an environment where innovation can flourish by challenging teams to solve complex engineering problems under time and resource constraints.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="impact" className="mt-0 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <Card className="bg-gray-900/50 border-red-900/20">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-red-600 text-white p-3 rounded-lg mt-1">
                        <Trophy className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-4">Community Impact</h3>
                        <p className="text-gray-300 leading-relaxed">
                          These competitions not only teach valuable technical skills,
                          such as programming, mechanical design, and problem-solving,
                          but also foster teamwork and collaboration, as each team must
                          coordinate efforts to design, build, and program a functioning
                          robot.
                        </p>
                        <p className="text-gray-300 leading-relaxed mt-4">
                          Beyond the technical aspects, students develop crucial
                          soft skills like leadership, communication, and time
                          management while working under tight deadlines. FIRST
                          Robotics, in particular, provides an incredible learning
                          experience that blends fun and competition, allowing
                          participants to apply STEM concepts in a real-world setting,
                          engage with industry professionals, and build lasting
                          connections with peers who share their passion for innovation.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="order-1 md:order-2 animate-slide-in-right">
                <img
                  src="/images/home_page/about_first/community.png"
                  alt="Community Impact"
                  className="rounded-lg shadow-xl w-full h-auto object-cover aspect-video border border-red-900/20"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://via.placeholder.com/600x400?text=Community+Impact";
                  }}
                />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
