import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { TeamSection } from "@/components/team-section";
import { Trophy, Award, Code, Wrench } from "lucide-react";

export default function AboutPage() {
  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 pb-16 royal-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
              About Royal Robotics
            </h1>
            <p
              className="text-xl text-gray-200 max-w-3xl mx-auto animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              Our mission is to design, build and program robots that solve
              real-world challenges while creating a love for STEM in our
              community. We aim to push boundaries of technology and inspire the
              next generation of problem solvers and engineers!
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="pt-16 pb-8 bg-gradient-to-b from-black via-gray-950 to-black" id="mission">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl font-bold text-white mb-6">
                Our Mission
              </h2>
              <p className="text-gray-300 mb-4">
                Bishop Reding Secondary School is excited to participate in the
                FIRST Robotics Competition (FRC) to strengthen students' passion
                for technology and innovation. We offer a dynamic Tech Hub,
                which allows students to explore coding, programming, and
                hands-on projects, enhancing both technical skills and
                creativity.
              </p>
              <p className="text-gray-300 mb-4">
                As a school of opportunity and inclusivity, in addition to
                clubs, we offer specialized classes in computer science and
                engineering, along with Advanced Placement (AP) programs and
                Specialist High School Major (SHSM). These offerings give
                students a strong foundation in technical knowledge.
              </p>
              <p className="text-gray-300">
                By participating in FRC, students can apply their skills in a
                competitive environment, fostering teamwork, and problem-solving
                abilities while dealing with complex challenges.
              </p>
            </div>

            <div className="animate-slide-in-right">
              <img
                src="/images/about_us_page/mission.png"
                alt="Team at Competition"
                className="rounded-lg shadow-xl border border-red-900/20 w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />

      {/* Robot Features */}
      <section className="py-12 bg-gradient-to-b from-black via-gray-950 to-gray-900" id="robot-features">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 animate-fade-in">
              Robot Components
            </h2>
            <p
              className="text-gray-400 max-w-2xl mx-auto animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              Discover the key features of our competition robot
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card
              className="bg-gray-900/30 border-red-900/20 overflow-hidden animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-red-600 rounded-lg">
                    <Wrench className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      Fabrication
                    </h3>
                    <p className="text-gray-300">
                      In our workspace we heavily used our 2 X-carve CNC to cut
                      .090" thick 6061 aluminum, and ⅜" poly carbonate. We also
                      used our sienci long mill mk1 to aid in drilling precise
                      hole in 1"x1", and 2"x1" extrusions. Many of our more
                      geometrically complex parts were sent out to our gracious
                      sponsor "Sable Metal" to be laser cut from 6061 aluminum
                      and we thank them for all the support they have given us!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card
              className="bg-gray-900/30 border-red-900/20 overflow-hidden animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-red-600 rounded-lg">
                    <Code className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      Drive Terrain
                    </h3>
                    <p className="text-gray-300">
                      ChassisMK4i Swerve Modules with L2 gear ratios are driven
                      by 2 NEO V1.1 motors, utilizing Spark Max controllers,
                      achieving a maximum speed of 4.9 m/s. YAGSL is employed
                      for the swerve drive software. The chassis measures 32
                      inches long by 27.5 inches wide. It features 2056 style 3D
                      printed swerve covers. The base plate is made from 0.090"
                      thick laser-cut aluminum parts.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card
              className="bg-gray-900/30 border-red-900/20 overflow-hidden animate-fade-in"
              style={{ animationDelay: "0.6s" }}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-red-600 rounded-lg">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      Intake
                    </h3>
                    <p className="text-gray-300">
                      For our design, we required an under-bumper intake system
                      that would effectively feed the note directly into the
                      shooter. We needed it to be quick, robust, and easy to
                      service, all while being gentle with the note. A NEO V1
                      motor drives the intake with a 14 to 45 gear reduction
                      ratio. The intake is 2 inches wide and is attached to the
                      front chassis rail using "T-Nut" style slots in the ⅜"
                      polycarbonate plates.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-12 bg-gradient-to-b from-gray-900 via-black to-black" id="awards">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 animate-fade-in">
              Our Achievements
            </h2>
            <p
              className="text-gray-400 max-w-2xl mx-auto animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              Our dedicated team members have worked tirelessly to achieve these
              prestigious awards and to create innovative robot designs. Their
              commitment, creativity, and teamwork have been the driving force
              behind our success in competitions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4 animate-slide-in-left">
              <h3 className="text-2xl font-bold text-white">Awards</h3>

              <Card className="bg-gray-900/30 border-red-900/20">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-white font-medium">
                        Provincials 2024
                      </h4>
                      <p className="text-red-500">Rookie Inspiration</p>
                    </div>
                    <Trophy className="h-8 w-8 text-amber-500" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/30 border-red-900/20">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-white font-medium">Waterloo 2024</h4>
                      <p className="text-red-500">Rookie Inspiration</p>
                    </div>
                    <Trophy className="h-8 w-8 text-amber-500" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/30 border-red-900/20">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-white font-medium">
                        Centennial 2024
                      </h4>
                      <p className="text-red-500">Rookie All Star</p>
                    </div>
                    <Trophy className="h-8 w-8 text-amber-500" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/30 border-red-900/20">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-white font-medium">Humber 2025</h4>
                      <p className="text-red-500">Safety All Star</p>
                    </div>
                    <Trophy className="h-8 w-8 text-amber-500" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/30 border-red-900/20">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-white font-medium">Humber 2025</h4>
                      <p className="text-red-500">Industrial Design</p>
                    </div>
                    <Trophy className="h-8 w-8 text-amber-500" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4 animate-slide-in-right">
              <h3 className="text-2xl font-bold text-white">Robot Designs</h3>

              <Card className="bg-gray-900/30 border-red-900/20">
                <CardContent className="p-4">
                  <div className="flex flex-col md:flex-row items-start md:items-stretch gap-4 side-by-side-container">
                    <img
                      src="/images/about_us_page/robot-2024.png"
                      alt="Crescendo Robot Design"
                      className="rounded-lg w-full md:w-24 h-auto md:h-full object-cover side-by-side-image"
                    />
                    <div className="side-by-side-content">
                      <h4 className="text-white font-medium">
                        Crescendo Robot Design 2024
                      </h4>
                      <p className="text-red-500">The Bishop ♝</p>
                      <p className="text-gray-400 text-sm mt-1">
                        Our first competition robot featuring advanced swerve
                        drive system.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/30 border-red-900/20">
                <CardContent className="p-4">
                  <div className="flex flex-col md:flex-row items-start md:items-stretch gap-4 side-by-side-container">
                    <img
                      src="/images/about_us_page/robot-2025.png"
                      alt="Previous Competition Robot"
                      className="rounded-lg w-full md:w-24 h-auto md:h-full object-cover side-by-side-image"
                    />
                    <div className="side-by-side-content">
                      <h4 className="text-white font-medium">
                        Reefscape Robot Design 2025
                      </h4>
                      <p className="text-red-500">The Reef Ripper</p>
                      <p className="text-gray-400 text-sm mt-1">
                        Our practice robot with advanced control systems and
                        custom-built components.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer className="mt-0" />
    </main>
  );
}
