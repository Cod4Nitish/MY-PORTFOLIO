import React, { useState } from "react";
import { Switch } from "@/components/ui/switch";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Heart } from "lucide-react";

interface HeroSectionProps {
  title?: string;
  subtitle?: string[];
  toggleLabel?: string;
  imageCard?: {
    title: string;
    subtitle: string;
    imageSrc: string;
  };
}

const HeroSection = ({
  title = "portfolio.",
  subtitle = [
    "Check out some of my latest graphic and web design case studies.",
    "I've worked on creative digital projects from logos and websites to full UI systems and real-world applications.",
  ],
  toggleLabel = "Make it pop",
  imageCard = {
    title: "Beaches",
    subtitle: "Favourites",
    imageSrc:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
  },
}: HeroSectionProps) => {
  const [isPop, setIsPop] = useState(false);

  return (
    <section className="w-full bg-background py-24 px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-start justify-between gap-12">
      <div className="flex-1 space-y-8">
        <h1
          className={`text-6xl md:text-7xl lg:text-8xl font-bold ${isPop ? "text-primary animate-pulse" : "text-foreground"}`}
        >
          {title}
        </h1>

        <div className="space-y-4 max-w-2xl">
          {subtitle.map((text, index) => (
            <p key={index} className="text-lg text-muted-foreground">
              {text}
            </p>
          ))}
        </div>

        <div className="flex items-center space-x-2">
          <Switch
            checked={isPop}
            onCheckedChange={setIsPop}
            className={isPop ? "bg-primary" : ""}
          />
          <span className="text-sm font-medium">
            {toggleLabel} {isPop ? "✅" : ""}
          </span>
        </div>
      </div>

      <div className="w-full md:w-1/3 lg:w-1/4">
        <Card
          className={`overflow-hidden border ${isPop ? "shadow-lg shadow-primary/20 transform hover:scale-105 transition-all" : "shadow"}`}
        >
          <div className="relative">
            <img
              src={imageCard.imageSrc}
              alt={imageCard.title}
              className="w-full h-64 object-cover"
            />
            <button
              className="absolute top-4 right-4 p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
              aria-label="Like"
            >
              <Heart
                className={`h-5 w-5 ${isPop ? "text-red-500 fill-red-500" : "text-gray-700"}`}
              />
            </button>
          </div>
          <CardHeader className="pb-2">
            <h3 className="text-xl font-semibold">{imageCard.title}</h3>
          </CardHeader>
          <CardFooter className="pt-0">
            <p className="text-sm text-muted-foreground">
              {imageCard.subtitle}
            </p>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default HeroSection;
