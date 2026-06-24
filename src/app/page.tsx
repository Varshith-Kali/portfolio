"use client";

import { SectionNavigator } from "@/components/portfolio/hud/SectionNavigator";
import { CommandPalette } from "@/components/portfolio/CommandPalette";
import { HeroSection } from "@/components/portfolio/sections/HeroSection";
import { EvolutionSection } from "@/components/portfolio/sections/EvolutionSection";
import { ExperienceSection } from "@/components/portfolio/sections/ExperienceSection";
import { FeaturedSystemsSection } from "@/components/portfolio/sections/FeaturedSystemsSection";
import { AISecurityLabSection } from "@/components/portfolio/sections/AISecurityLabSection";
import { ToolEvaluationSection } from "@/components/portfolio/sections/ToolEvaluationSection";
import { ArchitectureReviewsSection } from "@/components/portfolio/sections/ArchitectureReviewsSection";
import { RecordSection } from "@/components/portfolio/sections/RecordSection";
import { HowIThinkSection } from "@/components/portfolio/sections/HowIThinkSection";
import { ImpactSection } from "@/components/portfolio/sections/ImpactSection";
import { ExploringSection } from "@/components/portfolio/sections/ExploringSection";
import { ContactSection } from "@/components/portfolio/sections/ContactSection";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-background">
      <SectionNavigator />
      <CommandPalette />

      <HeroSection />
      <EvolutionSection />
      <ExperienceSection />
      <FeaturedSystemsSection />
      <AISecurityLabSection />
      <ToolEvaluationSection />
      <ArchitectureReviewsSection />
      <RecordSection />
      <HowIThinkSection />
      <ImpactSection />
      <ExploringSection />
      <ContactSection />
    </main>
  );
}
