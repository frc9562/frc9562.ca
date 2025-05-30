"use client";

import React from "react";
import { Button } from "@/components/ui/button";

interface Sponsor {
  name: string;
  logo: string;
  tier: "platinum" | "gold" | "silver" | "bronze";
  url?: string;
}

// Separate client component for handling image errors
const SponsorCard = ({
  sponsor,
  labelBgColor,
  labelText,
}: {
  sponsor: Sponsor;
  ribbonColor: string;
  ribbonText: string;
  labelBgColor: string;
  labelText: string;
}) => {
  return (
    <a
      href={sponsor.url || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="w-64 h-60 relative mb-6 group"
    >
      <div className="absolute inset-0 bg-[#1a1a1a] rounded-md shadow-lg overflow-hidden border border-gray-700 transition-all duration-300 group-hover:border-red-500 group-hover:shadow-red-900/30">
        {/* Logo container with improved visibility */}
        <div className="flex items-center justify-center h-40 p-4 bg-white/5 backdrop-blur-sm">
          <img
            src={sponsor.logo}
            alt={`${sponsor.name} logo`}
            className="max-w-full max-h-28 object-contain transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "https://via.placeholder.com/150x80?text=Logo";
            }}
          />
        </div>

        {/* Name and tier label */}
        <div className="text-center p-3 bg-gradient-to-b from-transparent to-black/60">
          <h4 className="text-white text-base font-semibold mb-2">
            {sponsor.name}
          </h4>
          <div className="mx-auto">
            <span
              className={`inline-block px-4 py-1 text-xs font-medium text-white ${labelBgColor} rounded-full transition-colors duration-300 shadow-sm`}
            >
              {labelText}
            </span>
          </div>
        </div>
      </div>
    </a>
  );
};

export function SponsorsSection() {
  // Sponsor data
  const sponsors: Sponsor[] = [
    {
      name: "HCDSB",
      logo: "/images/sponsors/hcdsb_logo.png",
      tier: "platinum",
      url: "https://www.hcdsb.org/",
    },
    {
      name: "Bishop Reding",
      logo: "/images/sponsors/bishop_reding_logo_logo.png",
      tier: "platinum",
      url: "https://secondary.hcdsb.org/bishopreding/",
    },
    {
      name: "Modatek Systems",
      logo: "/images/sponsors/modatek_systems_logo.png",
      tier: "platinum",
      url: "#",
    },
    {
      name: "MAGNA Machining",
      logo: "/images/sponsors/manga_logo.png",
      tier: "platinum",
      url: "#",
    },
    {
      name: "Gene Haas Foundation",
      logo: "/images/sponsors/gene_haas_logo.png",
      tier: "gold",
      url: "https://www.haascnc.com/community/gene-haas-foundation.html",
    },
    {
      name: "Samsung",
      logo: "/images/sponsors/samsung_logo.png",
      tier: "gold",
      url: "#",
    },
    {
      name: "Altair",
      logo: "/images/sponsors/altair_logo.png",
      tier: "silver",
      url: "https://www.altair.com/",
    },
    {
      name: "Sable Systems",
      logo: "/images/sponsors/sable_logo_logo.png",
      tier: "bronze",
      url: "#",
    },
  ];

  // Filter sponsors by tier
  const platinumSponsors = sponsors.filter((s) => s.tier === "platinum");
  const goldSponsors = sponsors.filter((s) => s.tier === "gold");
  const silverSponsors = sponsors.filter((s) => s.tier === "silver");
  const bronzeSponsors = sponsors.filter((s) => s.tier === "bronze");

  // No longer needed since we removed ribbons

  // Helper function to get label text for a tier
  const getLabelText = (tier: string) => {
    return `${tier.charAt(0).toUpperCase() + tier.slice(1)} Sponsors`;
  };

  // Helper function to get ribbon color based on tier
  const getRibbonColor = (tier: string) => {
    switch (tier) {
      case "platinum":
        return "from-purple-200 to-pink-200";
      case "gold":
        return "from-yellow-500 to-yellow-300";
      case "silver":
        return "from-gray-400 to-gray-200";
      case "bronze":
        return "from-amber-700 to-amber-500";
      default:
        return "from-gray-500 to-gray-300";
    }
  };

  // Helper function to get label background color based on tier
  const getLabelBgColor = (tier: string) => {
    switch (tier) {
      case "platinum":
        return "bg-red-900";
      case "gold":
        return "bg-yellow-800";
      case "silver":
        return "bg-gray-700";
      case "bronze":
        return "bg-amber-800";
      default:
        return "bg-gray-700";
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-950 to-black" id="sponsors">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-2">Our Sponsors</h2>
          <div className="w-16 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm">
            We&apos;re grateful to our sponsors for their generous support that
            enables us to build innovative robots and participate in
            competitions. Their contributions make our journey possible.
          </p>
        </div>

        {/* Tier descriptions */}
        <div className="flex justify-center mb-10 flex-wrap gap-4 text-xs">
          <div className="bg-red-900/20 border border-red-900/30 px-3 py-1 rounded-full text-white">
            Platinum: $7,500+
          </div>
          <div className="bg-yellow-900/20 border border-yellow-500/30 px-3 py-1 rounded-full text-white">
            Gold: $2,500+
          </div>
          <div className="bg-gray-700/20 border border-gray-500/30 px-3 py-1 rounded-full text-white">
            Silver: $1,000+
          </div>
          <div className="bg-amber-900/20 border border-amber-700/30 px-3 py-1 rounded-full text-white">
            Bronze: $500+
          </div>
          <div className="bg-blue-900/20 border border-blue-300/30 px-3 py-1 rounded-full text-white">
            Diamond: $5,000+
          </div>
        </div>

        {/* Platinum Tier */}
        {platinumSponsors.length > 0 && (
          <div className="mb-14">
            <h3 className="text-2xl font-bold text-white mb-8 text-center relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:transform after:translate-x-[-50%] after:w-40 after:h-1 after:bg-red-600">
              Platinum Sponsors
            </h3>
            <div className="flex flex-wrap justify-center gap-8">
              {platinumSponsors.map((sponsor) => (
                <SponsorCard
                  key={sponsor.name}
                  sponsor={sponsor}
                  ribbonColor="" 
                  ribbonText=""
                  labelBgColor={getLabelBgColor(sponsor.tier)}
                  labelText={getLabelText(sponsor.tier)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Gold Tier */}
        {goldSponsors.length > 0 && (
          <div className="mb-14">
            <h3 className="text-2xl font-bold text-white mb-8 text-center relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:transform after:translate-x-[-50%] after:w-40 after:h-1 after:bg-yellow-600">
              Gold Sponsors
            </h3>
            <div className="flex flex-wrap justify-center gap-8">
              {goldSponsors.map((sponsor) => (
                <SponsorCard
                  key={sponsor.name}
                  sponsor={sponsor}
                  ribbonColor=""
                  ribbonText=""
                  labelBgColor={getLabelBgColor(sponsor.tier)}
                  labelText={getLabelText(sponsor.tier)}
                />
              ))}
            </div>
          </div>
        )}
        
        {/* Silver Tier */}
        {silverSponsors.length > 0 && (
          <div className="mb-14">
            <h3 className="text-2xl font-bold text-white mb-8 text-center relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:transform after:translate-x-[-50%] after:w-40 after:h-1 after:bg-gray-400">
              Silver Sponsors
            </h3>
            <div className="flex flex-wrap justify-center gap-8">
              {silverSponsors.map((sponsor) => (
                <SponsorCard
                  key={sponsor.name}
                  sponsor={sponsor}
                  ribbonColor=""
                  ribbonText=""
                  labelBgColor={getLabelBgColor(sponsor.tier)}
                  labelText={getLabelText(sponsor.tier)}
                />
              ))}
            </div>
          </div>
        )}
        
        {/* Bronze Tier */}
        {bronzeSponsors.length > 0 && (
          <div className="mb-14">
            <h3 className="text-2xl font-bold text-white mb-8 text-center relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:transform after:translate-x-[-50%] after:w-40 after:h-1 after:bg-amber-700">
              Bronze Sponsors
            </h3>
            <div className="flex flex-wrap justify-center gap-8">
              {bronzeSponsors.map((sponsor) => (
                <SponsorCard
                  key={sponsor.name}
                  sponsor={sponsor}
                  ribbonColor=""
                  ribbonText=""
                  labelBgColor={getLabelBgColor(sponsor.tier)}
                  labelText={getLabelText(sponsor.tier)}
                />
              ))}
            </div>
          </div>
        )}

        <div className="text-center mt-16">
          <p className="text-gray-400 text-sm mb-4">
            Interested in becoming a sponsor? Your support helps students
            develop STEM skills and build competition-ready robots.
          </p>
          <a href="/donate">
            <Button className="bg-red-600 hover:bg-red-700 text-white rounded-sm px-5 py-1.5 text-sm">
              Become a Sponsor
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
