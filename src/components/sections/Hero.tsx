'use client'

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/SocialIcons";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F0A07] via-background to-background" />
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: "radial-gradient(circle, #888 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-7 animate-fade-up">
            <div className="space-y-2">
              <h1 className="text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-none">
                Aaron
                <br />
                <span className="text-primary">Elkin</span>
              </h1>
            </div>

            <div className="space-y-1">
              <p className="text-muted-foreground text-base font-medium">
                Software Engineer I · Little Caesar's
              </p>
              <p className="text-muted-foreground/70 text-sm">
                MS Computer Science · Johns Hopkins University
              </p>
            </div>

            <p className="text-muted-foreground/80 text-sm leading-relaxed max-w-md">
              I love shipping fast on problems that don't have an answer yet.
              The most satisfying work is the kind where you have to figure out
              the right approach before you write the first line — then move
              quickly once you do. Every day I'm solving something new, and
              that's exactly how I like it.
            </p>

            <TooltipProvider delayDuration={200}>
              <div className="flex flex-wrap gap-3">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      asChild
                      size="sm"
                      className="bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      <a href="mailto:aelkin3@jhu.edu">
                        <Mail size={15} className="mr-2" />
                        aelkin3@jhu.edu
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Send me an email</TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="border-border hover:border-primary/50"
                    >
                      <a
                        href="https://github.com/AaronElk4124"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <GitHubIcon size={15} />
                        <span className="ml-2">GitHub</span>
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>View my GitHub</TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="border-border hover:border-primary/50"
                    >
                      <a
                        href="https://linkedin.com/in/aaronelkin"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LinkedInIcon size={15} />
                        <span className="ml-2">LinkedIn</span>
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Connect on LinkedIn</TooltipContent>
                </Tooltip>
              </div>
            </TooltipProvider>
          </div>

          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-2xl scale-110" />
              <div className="relative w-72 h-80 lg:w-80 lg:h-[360px] rounded-2xl overflow-hidden border border-border shadow-2xl">
                <Image
                  src="/images/AaronElkinFancy.JPG"
                  alt="Aaron Elkin"
                  fill
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-3 -right-3 w-24 h-24 border-b-2 border-r-2 border-primary/30 rounded-br-2xl" />
              <div className="absolute -top-3 -left-3 w-24 h-24 border-t-2 border-l-2 border-primary/30 rounded-tl-2xl" />
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-wrap gap-x-8 gap-y-3 border-t border-border pt-8 text-xs text-muted-foreground/60">
          <span><span className="text-foreground font-medium">4.0</span> GPA · MSU Computer Engineering</span>
          <span><span className="text-foreground font-medium">2+</span> years production engineering</span>
          <span><span className="text-foreground font-medium">MS CS</span> · Johns Hopkins University</span>
          <span><span className="text-foreground font-medium">500k+</span> lines touched in production</span>
        </div>
      </div>
    </section>
  );
}
