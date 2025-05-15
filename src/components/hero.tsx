import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Wrench, Users, Trophy } from "lucide-react";

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden royal-gradient">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-24 h-24 rounded-full bg-red-600/20 blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-red-600/20 blur-xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-red-900/10 blur-3xl"></div>
      {/* Content */}
      <div className="container mx-auto px-4 relative z-20 py-20 md:py-0">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 space-y-6 animate-fade-in">
            <h5 className="text-red-500 font-medium tracking-wider animate-slide-in-left">
              FIRST ROBOTICS COMPETITION TEAM 9562
            </h5>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight animate-slide-in-left"
              style={{ animationDelay: "0.1s" }}
            >
              Royal Robotics
            </h1>
            <p
              className="text-gray-300 text-lg md:text-xl max-w-lg animate-slide-in-left"
              style={{ animationDelay: "0.2s" }}
            >
              We are a dedicated group of innovators, engineers, and
              problem-solvers competing in FIRST Robotics. Our mission is to
              design, build, and compete with cutting-edge robots.
            </p>

            <div
              className="flex flex-wrap gap-4 pt-4 animate-slide-in-left"
              style={{ animationDelay: "0.3s" }}
            >
              <Link href="/about">
                <Button className="text-white bg-red-600 hover:bg-red-700">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/donate">
                <Button variant="outline" className="hover:bg-accent">
                  Support Our Team
                </Button>
              </Link>
            </div>
          </div>

          <div
            className="w-full md:w-1/2 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="relative">
              <div className="aspect-video rounded-lg overflow-hidden shadow-2xl border border-red-900/20">
                <img
                  src="/images/home_page/hero_img.png"
                  alt="FIRST Robotics Competition"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Feature Cards */}
              <div
                className="absolute -bottom-8 -left-8 bg-black/80 backdrop-blur-sm p-4 rounded-lg border border-red-900/30 shadow-lg animate-slide-in-up"
                style={{ animationDelay: "0.6s" }}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-red-600 rounded-full">
                    <Wrench className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">
                      Engineering Excellence
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Building innovative robots
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="absolute -top-8 -right-8 bg-black/80 backdrop-blur-sm p-4 rounded-lg border border-red-900/30 shadow-lg animate-slide-in-up"
                style={{ animationDelay: "0.7s" }}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-red-600 rounded-full">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">
                      Team Collaboration
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Working together to succeed
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 bg-black/80 backdrop-blur-sm p-4 rounded-lg border border-red-900/30 shadow-lg hidden lg:block animate-slide-in-up"
                style={{ animationDelay: "0.8s" }}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-red-600 rounded-full">
                    <Trophy className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Award-Winning</h3>
                    <p className="text-gray-400 text-sm">
                      Recognized achievements
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
