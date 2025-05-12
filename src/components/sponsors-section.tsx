"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Sponsor {
  name: string;
  logo: string;
  tier: "platinum" | "gold" | "silver" | "bronze";
  url?: string;
}

// Separate client component for handling image errors
const SponsorCard = ({
  sponsor,
  ribbonColor,
  ribbonText,
  labelBgColor,
  labelText
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
      className="w-56 h-64 relative mb-4"
    >
      <div className="absolute inset-0 bg-[#111] rounded-sm shadow-md overflow-hidden">
        {/* Corner ribbon */}
        <div className={`absolute -top-2 -right-12 w-36 transform rotate-45 py-1 text-xs font-bold bg-gradient-to-r ${ribbonColor} text-black z-10`}>
          {ribbonText}
        </div>

        {/* Logo container */}
        <div className="flex items-center justify-center h-44 p-6 py-8">
          <img
            src={sponsor.logo}
            alt={`${sponsor.name} logo`}
            className="max-w-full max-h-32 object-contain"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "https://via.placeholder.com/150x80?text=Logo";
            }}
          />
        </div>

        {/* Name and tier label */}
        <div className="text-center">
          <h4 className="text-white text-base font-medium mb-1">{sponsor.name}</h4>
          <div className="mx-auto">
            <span className={`inline-block px-4 py-1 text-sm text-white ${labelBgColor} rounded-sm`}>
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
      name: "Gene Haas Foundation",
      logo: "/images/sponsors/gene_haas_logo.png",
      tier: "gold",
      url: "https://www.haascnc.com/community/gene-haas-foundation.html",
    },
    {
      name: "Altair",
      logo: "/images/sponsors/altair_logo.png",
      tier: "silver",
      url: "https://www.altair.com/",
    },
    {
      name: "Modatek Systems",
      logo: "/images/sponsors/modatek_systems_logo.png",
      tier: "silver",
      url: "#",
    },
    {
      name: "MANGA Machining",
      logo: "/images/sponsors/manga_logo.png",
      tier: "bronze",
      url: "#",
    },
    {
      name: "Sable Systems",
      logo: "/images/sponsors/sable_logo_logo.png",
      tier: "bronze",
      url: "#",
    },
  ];

  // Filter sponsors by tier
  const platinumSponsors = sponsors.filter(s => s.tier === "platinum");
  const goldSponsors = sponsors.filter(s => s.tier === "gold");
  const silverSponsors = sponsors.filter(s => s.tier === "silver");
  const bronzeSponsors = sponsors.filter(s => s.tier === "bronze");
  
  // Helper function to get ribbon text for a tier
  const getRibbonText = (tier: string) => {
    switch(tier) {
      case 'platinum': return 'PLATINUM';
      case 'gold': return 'GOLD';
      case 'silver': return 'SILVER';
      case 'bronze': return 'BRONZE';
      default: return tier.toUpperCase();
    }
  };
  
  // Helper function to get label text for a tier
  const getLabelText = (tier: string) => {
    return `${tier.charAt(0).toUpperCase() + tier.slice(1)} Sponsors`;
  };
  
  // Helper function to get ribbon color based on tier
  const getRibbonColor = (tier: string) => {
    switch(tier) {
      case 'platinum': return 'from-purple-200 to-pink-200';
      case 'gold': return 'from-yellow-500 to-yellow-300';
      case 'silver': return 'from-gray-400 to-gray-200';
      case 'bronze': return 'from-amber-700 to-amber-500';
      default: return 'from-gray-500 to-gray-300';
    }
  };
  
  // Helper function to get label background color based on tier
  const getLabelBgColor = (tier: string) => {
    switch(tier) {
      case 'platinum': return 'bg-red-900';
      case 'gold': return 'bg-yellow-800';
      case 'silver': return 'bg-gray-700';
      case 'bronze': return 'bg-amber-800';
      default: return 'bg-gray-700';
    }
  };

  return (
    <section className="py-20 bg-black" id="sponsors">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-2">Our Sponsors</h2>
          <div className="w-16 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm">
            We&apos;re grateful to our sponsors for their generous support that enables us to build innovative robots
            and participate in competitions. Their contributions make our journey possible.
          </p>
        </div>

        {/* Separate client component for rendering sponsor cards */}
        <div className="flex flex-wrap justify-center gap-8">
          {/* Render all sponsors in order of tier importance */}
          {[...platinumSponsors, ...goldSponsors, ...silverSponsors, ...bronzeSponsors].map((sponsor) => (
            <SponsorCard 
              key={sponsor.name}
              sponsor={sponsor}
              ribbonColor={getRibbonColor(sponsor.tier)}
              ribbonText={getRibbonText(sponsor.tier)}
              labelBgColor={getLabelBgColor(sponsor.tier)}
              labelText={getLabelText(sponsor.tier)}
            />
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-400 text-sm mb-4">
            Interested in becoming a sponsor? Your support helps students develop STEM skills and build
            competition-ready robots.
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
