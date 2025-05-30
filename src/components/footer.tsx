import Link from "next/link";
import { Github, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface FooterProps {
  className?: string;
}

export function Footer({ className = "" }: FooterProps) {
  return (
    <footer className={`bg-black text-white pt-12 pb-6 ${className}`}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Royal Robotics</h3>
            <p className="text-sm text-gray-400">
              Team 9562 - Bishop Reding Secondary School's FIRST Robotics team
              dedicated to fostering innovation, teamwork, and STEM education.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/frc9562_hcdsb"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://www.youtube.com/@frc9562_hcdsb"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                <Youtube size={20} />
                <span className="sr-only">YouTube</span>
              </a>
              <a
                href="https://github.com/frc9562"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <Mail className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:royalrobotics9562@hotmail.com"
                  className="text-sm hover:underline"
                >
                  royalrobotics9562@hotmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+19058750124"
                  className="text-sm hover:underline"
                >
                  (905) 875-0124
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm">
                  1120 Main St E, Milton, ON L9T 6H7
                </span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-gray-400 hover:text-red-500 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-gray-400 hover:text-red-500 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/donate"
                  className="text-sm text-gray-400 hover:text-red-500 transition-colors"
                >
                  Donate
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-400 hover:text-red-500 transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/mentor"
                  className="text-sm text-gray-400 hover:text-red-500 transition-colors"
                >
                  Become a Mentor
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-6 bg-gray-800" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} by BR Robotics Team. All rights
            reserved.
          </p>
          <p className="text-sm text-gray-500">
            {process.env.NEXT_PUBLIC_APP_VERSION}
          </p>
          <p className="text-xs text-gray-500 mt-2 md:mt-0">
            FIRST Robotics Competition Team 9562
          </p>
        </div>
      </div>
    </footer>
  );
}
