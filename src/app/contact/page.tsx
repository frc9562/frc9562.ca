"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, CheckCircle, XCircle } from "lucide-react";
import { toast } from "sonner";

export default function ContactPage() {
  // Form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
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
      !formData.subject ||
      !formData.message
    ) {
      toast.error("Please fill in all fields");
      setIsSubmitting(false);
      return;
    }

    try {
      // Submit to our API endpoint
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      // Show success
      setFormStatus("success");
      toast.success(
        "Your message has been sent successfully! We'll get back to you soon."
      );

      // Reset form after successful submission
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormStatus("error");
      toast.error(
        "There was a problem sending your message. Please try again."
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
              Contact Us
            </h1>
            <p
              className="text-xl text-gray-200 max-w-3xl mx-auto animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              Reach out to us for any of your inquiries by using any of the 3
              following methods:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slide-in-left">
              <Card className="bg-black/30 backdrop-blur-sm border-red-900/20">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-white mb-6">
                    Send Us a Message
                  </h2>

                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="firstName" className="text-white">
                          First Name
                        </label>
                        <Input
                          id="firstName"
                          placeholder="Enter your first name"
                          className="bg-white/10 border-red-900/20 text-white placeholder:text-gray-400"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="lastName" className="text-white">
                          Last Name
                        </label>
                        <Input
                          id="lastName"
                          placeholder="Enter your last name"
                          className="bg-white/10 border-red-900/20 text-white placeholder:text-gray-400"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-white">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email address"
                        className="bg-white/10 border-red-900/20 text-white placeholder:text-gray-400"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-white">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        placeholder="What is this regarding?"
                        className="bg-white/10 border-red-900/20 text-white placeholder:text-gray-400"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-white">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Enter your message here..."
                        className="bg-white/10 border-red-900/20 text-white placeholder:text-gray-400 min-h-[150px]"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {formStatus === "success" && (
                      <div className="bg-green-900/30 border border-green-600/30 p-3 rounded-md flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span className="text-green-100">
                          Message sent successfully!
                        </span>
                      </div>
                    )}

                    {formStatus === "error" && (
                      <div className="bg-red-900/30 border border-red-600/30 p-3 rounded-md flex items-center gap-2">
                        <XCircle className="h-5 w-5 text-red-500" />
                        <span className="text-red-100">
                          Failed to send message. Please try again.
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
                          <span className="animate-pulse">Sending...</span>
                          <div className="ml-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                        </>
                      ) : (
                        <>
                          Submit
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-8 animate-slide-in-right">
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">
                  Contact Information
                </h2>
                <p className="text-gray-200 mb-8">
                  Have questions or want to get involved? Reach out to us using
                  any of the methods below. We'd love to hear from you!
                </p>
              </div>

              <Card className="bg-black/30 backdrop-blur-sm border-red-900/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-red-600 rounded-full">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white">Email</h3>
                      <p className="text-gray-300 mt-1">
                        Royalrobotics9562@hotmail.com
                      </p>
                      <p className="text-gray-400 text-sm mt-2">
                        Have questions or want to collaborate? Reach out to us
                        via email for inquiries, partnerships, or general
                        information.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black/30 backdrop-blur-sm border-red-900/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-red-600 rounded-full">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white">Phone</h3>
                      <p className="text-gray-300 mt-1">
                        School Number: (905) - 875 - 0124
                      </p>
                      <p className="text-gray-400 text-sm mt-2">
                        Need to speak with a team member? Call us for quick
                        assistance regarding competitions, sponsorships, or
                        events.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black/30 backdrop-blur-sm border-red-900/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-red-600 rounded-full">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white">
                        Location
                      </h3>
                      <p className="text-gray-300 mt-1">
                        1120 Main St E, Milton, ON L9T 6H7
                      </p>
                      <p className="text-gray-400 text-sm mt-2">
                        Visit our robotics lab to see our team in action! We're
                        based at Bishop Reding Secondary School, working on
                        cutting-edge projects.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="bg-black/30 backdrop-blur-sm p-4 rounded-lg border border-red-900/20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1822.2404075311854!2d-79.86464636553133!3d43.530983334466455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b6ee2aa8f8e1b%3A0x5d524230a0b2a9e2!2sBishop%20P.%20F.%20Reding%20Catholic%20Secondary%20School!5e0!3m2!1sen!2sus!4v1747337052844!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bishop Reding Secondary School"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
