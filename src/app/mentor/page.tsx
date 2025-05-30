"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Send, CheckCircle, XCircle, FileText, Briefcase, GraduationCap } from "lucide-react";
import { toast } from "sonner";

export default function MentorPage() {
  // Form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    occupation: "",
    experience: "",
    availability: "",
    interests: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<null | "success" | "error">(
    null
  );

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus(null);

    // Validate form
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.occupation ||
      !formData.experience ||
      !formData.availability
    ) {
      toast.error("Please fill in all required fields");
      setIsSubmitting(false);
      return;
    }

    try {
      // Submit to API endpoint (can use the same contact endpoint with different subject)
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          subject: "Mentor Application",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      // Show success
      setFormStatus("success");
      toast.success(
        "Your mentor application has been submitted successfully! We'll contact you soon."
      );

      // Reset form after successful submission
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        occupation: "",
        experience: "",
        availability: "",
        interests: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormStatus("error");
      toast.error(
        "There was a problem sending your application. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="royal-gradient min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
              Become a Mentor
            </h1>
            <p
              className="text-xl text-gray-200 max-w-3xl mx-auto animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              Share your expertise and inspire the next generation of STEM leaders
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mentor Application Form */}
            <div className="animate-slide-in-left">
              <Card className="bg-black/30 backdrop-blur-sm border-red-900/20">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-white mb-6">
                    Mentor Application
                  </h2>

                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="firstName" className="text-white">
                          First Name <span className="text-red-500">*</span>
                        </label>
                        <Input
                          id="firstName"
                          placeholder="Enter your first name"
                          className="bg-white/10 border-red-900/20 text-white placeholder:text-white/70"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="lastName" className="text-white">
                          Last Name <span className="text-red-500">*</span>
                        </label>
                        <Input
                          id="lastName"
                          placeholder="Enter your last name"
                          className="bg-white/10 border-red-900/20 text-white placeholder:text-white/70"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-white">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email address"
                          className="bg-white/10 border-red-900/20 text-white placeholder:text-white/70"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-white">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="(XXX) XXX-XXXX"
                          className="bg-white/10 border-red-900/20 text-white placeholder:text-white/70"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="occupation" className="text-white">
                        Current Occupation <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="occupation"
                        placeholder="What is your current job/profession?"
                        className="bg-white/10 border-red-900/20 text-white placeholder:text-white/70"
                        value={formData.occupation}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="experience" className="text-white">
                        Relevant Experience <span className="text-red-500">*</span>
                      </label>
                      <Textarea
                        id="experience"
                        placeholder="Describe your relevant skills or experience in STEM fields, robotics, or working with students..."
                        className="bg-white/10 border-red-900/20 text-white placeholder:text-white/70 min-h-[100px]"
                        value={formData.experience}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="availability" className="text-white">
                        Availability <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="availability"
                        placeholder="How many hours per week can you commit? Which days?"
                        className="bg-white/10 border-red-900/20 text-white placeholder:text-white/70"
                        value={formData.availability}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="interests" className="text-white">
                        Areas of Interest
                      </label>
                      <Input
                        id="interests"
                        placeholder="Programming, mechanical, electrical, business, etc."
                        className="bg-white/10 border-red-900/20 text-white placeholder:text-white/70"
                        value={formData.interests}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-white">
                        Additional Information
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Any other information you'd like to share..."
                        className="bg-white/10 border-red-900/20 text-white placeholder:text-white/70 min-h-[100px]"
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>

                    {formStatus === "success" && (
                      <div className="bg-green-900/30 border border-green-600/30 p-3 rounded-md flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span className="text-green-100">
                          Application submitted successfully!
                        </span>
                      </div>
                    )}

                    {formStatus === "error" && (
                      <div className="bg-red-900/30 border border-red-600/30 p-3 rounded-md flex items-center gap-2">
                        <XCircle className="h-5 w-5 text-red-500" />
                        <span className="text-red-100">
                          Failed to submit application. Please try again.
                        </span>
                      </div>
                    )}

                    <Button
                      type="submit"
                      className="bg-red-600 hover:bg-red-700 w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="animate-pulse">Submitting...</span>
                          <div className="ml-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                        </>
                      ) : (
                        <>
                          Submit Application
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Right Column Information */}
            <div className="space-y-6 animate-slide-in-right">
              <div className="text-white">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Why Become a Mentor?
                </h2>
                <p className="text-gray-200 mb-6">
                  As a mentor for FRC Team 9562, you'll have the opportunity to inspire and guide students in STEM fields while helping build award-winning robots and developing leadership skills.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-red-600 rounded-full mt-1">
                      <GraduationCap className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Share Your Knowledge</h3>
                      <p className="text-gray-300 text-sm">
                        Help students develop technical skills in programming, mechanical design, electrical systems, or project management.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-red-600 rounded-full mt-1">
                      <Briefcase className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Build Professional Networks</h3>
                      <p className="text-gray-300 text-sm">
                        Connect with other industry professionals, educators, and students interested in STEM and robotics.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-red-600 rounded-full mt-1">
                      <FileText className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Commitment Flexibility</h3>
                      <p className="text-gray-300 text-sm">
                        We welcome mentors with various time commitments - from weekly visits to occasional specialized guidance during competition season.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-black/30 backdrop-blur-sm border-red-900/20 p-6 rounded-lg">
                  <h3 className="font-bold text-xl mb-2">Mentor Requirements:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>18 years or older</li>
                    <li>Knowledge or experience in STEM fields, business, or education</li>
                    <li>Willingness to work with and guide high school students</li>
                    <li>Enthusiasm for robotics and FIRST Robotics Competition</li>
                    <li>Ability to pass a background check (will be required if accepted)</li>
                  </ul>
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
