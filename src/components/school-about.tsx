"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Book, Award, Users } from "lucide-react";

export function SchoolAbout() {
  return (
    <section className="py-24 bg-black" id="about-school">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <div className="relative overflow-hidden rounded-lg border border-red-900/30 shadow-xl transform hover:scale-[1.01] transition-transform duration-700 surfing-container">
              <img
                src="images/home_page/industrial_design_award.jpg"
                alt="Bishop Reding Catholic Secondary School"
                className="w-full h-auto"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://via.placeholder.com/800x600?text=School+Building";
                }}
              />
            </div>
          </div>

          <div className="space-y-6 animate-slide-in-right">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Bishop Reding Secondary School</h2>
              <p className="text-gray-300 mt-4">
                Our school has a strong reputation for its academic programs and supportive learning environment,
                while offering a variety of advanced placement (AP) courses. The school offers many extracurriculars,
                including athletics, clubs, and community service opportunities that encourage teamwork and leadership skills.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                <Card className="bg-gray-900/30 border-red-900/20">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-red-600 rounded-md text-white">
                        <GraduationCap className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-white font-medium">Academic Excellence</h3>
                        <p className="text-gray-400 text-sm">Top-tier education with advanced programs</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900/30 border-red-900/20">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-red-600 rounded-md text-white">
                        <Book className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-white font-medium">Tech Programs</h3>
                        <p className="text-gray-400 text-sm">Specialized STEM and coding courses</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900/30 border-red-900/20">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-red-600 rounded-md text-white">
                        <Award className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-white font-medium">Achievements</h3>
                        <p className="text-gray-400 text-sm">Award-winning programs and competitions</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900/30 border-red-900/20">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-red-600 rounded-md text-white">
                        <Users className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-white font-medium">Community</h3>
                        <p className="text-gray-400 text-sm">Supportive and inclusive environment</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8">
                <Link href="/about">
                  <Button className="bg-red-600 hover:bg-red-700">
                    About Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
