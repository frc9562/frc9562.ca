import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Metadata } from "next";
import { Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Donate - Royal Robotics",
  description:
    "Support Royal Robotics FIRST Robotics Competition Team 9562 by making a donation.",
};

export default function DonatePage() {
  return (
    <main className="royal-gradient min-h-screen">
      <Navbar />

      {/* Hero Section - Style matches reference image 2 */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-red-900 to-black">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-8">Donations</h1>
          <p className="text-lg max-w-2xl mx-auto mb-6 text-white/90">
            Our project is quite large, and with all works of art we need funds
            to make it. Sponsors will get different plaques and benefits
            depending on the amount of money they donate.
          </p>
          <div className="mt-6">
            <a
              href="#donation-tiers"
              className="text-white/80 hover:text-white transition-all"
            >
              Scroll down to learn more.
            </a>
          </div>
        </div>
      </section>

      {/* Donation Tiers - Reduced spacing for better layout */}
      <section className="pt-6 pb-8 bg-black" id="donation-tiers">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h2 className="inline-block text-3xl font-bold text-white">
              Types of Donations
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Bronze Card */}
            <div className="bg-[#755146] rounded-md p-8 text-center shadow-lg transform hover:scale-105 transition-transform border border-[#8a6459]/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
                <svg viewBox="0 0 24 24" fill="white" className="w-full h-full">
                  <path
                    d="M12 1v3M12 20v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M1 12h3M20 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex items-center justify-center mb-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <Award className="h-7 w-7 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">Bronze</h3>
              <p className="text-base text-white mb-5">
                This plaque is for sponsors who donate $100+
              </p>
              <div className="flex justify-center bg-white/10 py-2 px-4 rounded-full mx-auto w-16 border border-white/20">
                <span className="text-2xl font-bold text-white">$</span>
              </div>
            </div>

            {/* Silver Card */}
            <div className="bg-[#9a9a9a] rounded-md p-8 text-center shadow-lg transform hover:scale-105 transition-transform border border-[#b3b3b3]/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
                <svg viewBox="0 0 24 24" fill="white" className="w-full h-full">
                  <path
                    d="M12 1v3M12 20v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M1 12h3M20 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex items-center justify-center mb-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <Award className="h-7 w-7 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">Silver</h3>
              <p className="text-base text-white mb-5">
                This plaque is for sponsors who donate $1000+
              </p>
              <div className="flex justify-center gap-3 bg-white/10 py-2 px-4 rounded-full mx-auto w-24 border border-white/20">
                <span className="text-2xl font-bold text-white">$</span>
                <span className="text-2xl font-bold text-white">$</span>
              </div>
            </div>

            {/* Gold Card */}
            <div className="bg-[#cd9d39] rounded-md p-8 text-center shadow-lg transform hover:scale-105 transition-transform border border-[#e5b54d]/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
                <svg viewBox="0 0 24 24" fill="white" className="w-full h-full">
                  <path
                    d="M12 1v3M12 20v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M1 12h3M20 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex items-center justify-center mb-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <Award className="h-7 w-7 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">Gold</h3>
              <p className="text-base text-white mb-5">
                This plaque is for sponsors who donate $2500+
              </p>
              <div className="flex justify-center gap-3 bg-white/10 py-2 px-4 rounded-full mx-auto w-32 border border-white/20">
                <span className="text-2xl font-bold text-white">$</span>
                <span className="text-2xl font-bold text-white">$</span>
                <span className="text-2xl font-bold text-white">$</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Diamond Card */}
            <div className="bg-[#166dae] rounded-md p-8 text-center shadow-lg transform hover:scale-105 transition-transform border border-[#2385cf]/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
                <svg viewBox="0 0 24 24" fill="white" className="w-full h-full">
                  <path
                    d="M12 1v3M12 20v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M1 12h3M20 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex items-center justify-center mb-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <Award className="h-7 w-7 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">Diamond</h3>
              <p className="text-base text-white mb-5">
                This plaque is for sponsors who donate $4500+
              </p>
              <div className="flex justify-center gap-3 bg-white/10 py-2 px-4 rounded-full mx-auto w-40 border border-white/20">
                <span className="text-2xl font-bold text-white">$</span>
                <span className="text-2xl font-bold text-white">$</span>
                <span className="text-2xl font-bold text-white">$</span>
                <span className="text-2xl font-bold text-white">$</span>
              </div>
            </div>

            {/* Ruby Card */}
            <div className="bg-[#b22727] rounded-md p-8 text-center shadow-lg transform hover:scale-105 transition-transform border border-[#d33b3b]/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
                <svg viewBox="0 0 24 24" fill="white" className="w-full h-full">
                  <path
                    d="M12 1v3M12 20v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M1 12h3M20 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex items-center justify-center mb-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <Award className="h-7 w-7 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">Ruby</h3>
              <p className="text-base text-white mb-5">
                This plaque is for sponsors who donate $7500+
              </p>
              <div className="flex justify-center gap-3 bg-white/10 py-2 px-4 rounded-full mx-auto w-48 border border-white/20">
                <span className="text-2xl font-bold text-white">$</span>
                <span className="text-2xl font-bold text-white">$</span>
                <span className="text-2xl font-bold text-white">$</span>
                <span className="text-2xl font-bold text-white">$</span>
                <span className="text-2xl font-bold text-white">$</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Process - Matches the first reference image */}
      <section className="bg-black py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Left content */}
            <div className="lg:w-1/2 text-white">
              <h2 className="text-2xl font-bold mb-4">
                Donate to Royal Robotics!
              </h2>
              <p className="text-gray-300 mb-4">
                Support Bishop Reding&apos;s FIRST Robotics Team 9562 and help
                students bring their passion for robotics to life! Your generous
                donation will go directly toward essential expenses such as
                competition fees, materials, tools, and technology that allow
                our team to develop skills and compete.
              </p>
              <p className="text-gray-300 mb-4">
                With your support, students will have the opportunity to develop
                critical STEM skills, collaborate in a competitive environment,
                and gain real-world experience in engineering and
                problem-solving.
              </p>

              <div className="bg-black p-4 rounded-md mb-6 border border-red-900/30">
                <p className="text-white font-medium mb-4">
                  Making a donation is quick and easy!
                </p>
                <ol className="list-decimal list-inside text-white space-y-3 ml-1">
                  <li>Visit the link by clicking the button below</li>
                  <li>
                    Select{" "}
                    <span className="text-white font-medium">
                      &quot;Make a Donation&quot;
                    </span>
                  </li>
                  <li>
                    Choose{" "}
                    <span className="text-white font-medium">
                      &quot;Bishop Reding Secondary School&quot;
                    </span>{" "}
                    from the list
                  </li>
                  <li>Enter your desired donation amount</li>
                  <li>
                    Include the message:{" "}
                    <span className="text-white font-medium">
                      &quot;DONATION FOR BR FIRST ROBOTICS TEAM 9562 - YOUR
                      COMPANY NAME&quot;
                    </span>
                  </li>
                </ol>
                <p className="text-gray-300 mt-3">
                  This ensures your contribution directly benefits our team.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                <a
                  href="https://hcdsb.schoolcashonline.com/Fee/Index"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 hover:bg-red-700 text-white font-medium rounded-sm px-4 py-2"
                >
                  Visit Donation Site
                </a>
                <a
                  href="/donation-guide.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-accent text-black font-medium rounded-sm px-4 py-2"
                >
                  Download Form
                </a>
              </div>
            </div>

            {/* Right content - only the donation example image */}
            <div className="lg:w-1/2 h-full flex items-center">
              <div className="bg-black border border-red-900/20 p-4 rounded-md h-full w-full flex flex-col justify-between">
                <img
                  src="/images/donate_page/donate_example.png"
                  alt="Donation Example"
                  className="w-full h-auto rounded-md border border-gray-800"
                />
                {/* Additional content to fill empty space */}
                <div className="mt-6 space-y-4">
                  <div className="bg-black/50 border border-red-900/30 rounded-md p-4">
                    <h4 className="text-white text-lg font-medium mb-2">
                      Important Note
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Please follow these instructions carefully to ensure your
                      donation is properly credited to our team.
                    </p>
                  </div>
                  <div className="bg-black/50 border border-red-900/30 rounded-md p-4">
                    <h4 className="text-white text-lg font-medium mb-2">
                      Tax Receipts
                    </h4>
                    <p className="text-gray-300 text-sm">
                      All donations are eligible for tax receipts. You will
                      receive your receipt via email after completing your
                      donation.
                    </p>
                  </div>
                  <div className="flex items-center justify-center gap-3 mt-4 text-gray-300">
                    <span>Questions about donating?</span>
                    <a
                      href="/contact"
                      className="text-red-400 hover:text-red-300 transition-colors"
                    >
                      Contact us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
