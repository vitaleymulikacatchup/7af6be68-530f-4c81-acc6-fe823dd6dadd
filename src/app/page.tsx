"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import MetricCardFour from '@/components/sections/metrics/MetricCardFour';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Award, Bell, Brain, Flame, Gamepad2, MessageCircle, Star, Target, TrendingUp, Twitch, Twitter, Users, Youtube, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="medium"
      background="none"
      cardStyle="solid-bordered"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="solid"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="Baphomet"
          button={{
            text: "Watch Stream",
            href: "#contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Baphomet: CS2 Grind"
          description="From low elo to unstoppable. Watch the journey of climbing ranks, crushing opponents, and proving that skill knows no starting point."
          tag="Competitive Gaming"
          tagIcon={Gamepad2}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764330937926-0nfuri3r.jpg"
          imageAlt="Baphomet CS2 player professional portrait"
          frameStyle="card"
          buttons={[
            {
              text: "View Highlights",
              href: "#features"
            },
            {
              text: "Join Community",
              href: "#contact"
            }
          ]}
        />
      </div>

      <div id="stats" data-section="stats">
        <MetricCardFour
          title="Player Performance"
          description="Real stats. Real grind. Real improvement."
          tag="This Season"
          tagIcon={Zap}
          textboxLayout="default"
          metrics={[
            {
              id: "1",
              icon: TrendingUp,
              title: "Rank Progression",
              value: "Gold 2",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764330939950-ul43gldf.jpg",
              imageAlt: "CS2 ranked progression"
            },
            {
              id: "2",
              icon: Target,
              title: "Headshot Rate",
              value: "42%",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764330941128-4w3csta8.jpg",
              imageAlt: "Headshot accuracy tracking"
            },
            {
              id: "3",
              icon: Flame,
              title: "Kill/Death Ratio",
              value: "1.3",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764330942515-vsx7l2x3.jpg",
              imageAlt: "Team gameplay performance"
            },
            {
              id: "4",
              icon: Award,
              title: "Rounds Won",
              value: "847",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764330943857-wht0rq0k.jpg",
              imageAlt: "Tournament rounds won"
            }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTwo
          title="What Makes Baphomet Different"
          description="Dedicated to the grind with a focus on improvement and consistency"
          tag="Player Profile"
          tagIcon={Star}
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          features={[
            {
              icon: Zap,
              title: "Raw Mechanical Skill",
              description: "Consistent aim and reaction time across all match conditions. Grinding daily to refine muscle memory.",
              button: {
                text: "Watch VODs",
                href: "#"
              }
            },
            {
              icon: Brain,
              title: "Game Sense Development",
              description: "Learning map control, positioning, and team coordination. Every loss teaches valuable lessons.",
              button: {
                text: "Replay Analysis",
                href: "#"
              }
            },
            {
              icon: Target,
              title: "Clutch Performance",
              description: "High-pressure situations bring out peak gameplay. Retakes and 1v4 situations are opportunities to shine.",
              button: {
                text: "Highlight Reels",
                href: "#"
              }
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="Teammates Speak Out"
          description="What teammates and friends say about playing with Baphomet"
          tag="Community Voices"
          tagIcon={Users}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "ShadowPro",
              role: "AWPer",
              company: "Team Echo",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764330945715-dz8jvk2q.jpg",
              imageAlt: "ShadowPro teammate portrait"
            },
            {
              id: "2",
              name: "IceFlow",
              role: "Rifler",
              company: "Rising Stars",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764330946988-p8vpdp2t.jpg",
              imageAlt: "IceFlow teammate portrait"
            },
            {
              id: "3",
              name: "NovaX",
              role: "IGL",
              company: "Ranked Grinders",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764330948146-ss20nkft.jpg",
              imageAlt: "NovaX teammate portrait"
            },
            {
              id: "4",
              name: "CrimsonBlade",
              role: "Support",
              company: "Pro Academy",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764330949686-3dp0d5bx.jpg",
              imageAlt: "CrimsonBlade teammate portrait"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="The Journey"
          description={[
            "Started from the bottom with determination to improve. Every rank earned is a milestone in the competitive CS2 community.",
            "The goal is simple: climb higher, play smarter, and inspire others that dedication beats natural talent. This is more than a rank - it's a commitment to the grind.",
            "Join the stream, watch the gameplay evolve, and be part of the community that celebrates every victory, no matter how small."
          ]}
          showBorder={true}
          buttons={[
            {
              text: "Follow on Twitch",
              href: "#contact"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Stay Updated"
          tagIcon={Bell}
          title="Join the Baphomet Community"
          description="Get notified about streams, tournament updates, and behind-the-scenes content. Be part of the competitive CS2 journey."
          buttonText="Subscribe"
          inputPlaceholder="your@email.com"
          termsText="We respect your privacy. Unsubscribe anytime from community updates."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Baphomet"
          columns={[
            {
              title: "Gaming",
              items: [
                {
                  label: "Twitch Stream",
                  href: "https://twitch.tv"
                },
                {
                  label: "YouTube Channel",
                  href: "https://youtube.com"
                },
                {
                  label: "Discord Server",
                  href: "https://discord.com"
                }
              ]
            },
            {
              title: "Resources",
              items: [
                {
                  label: "VOD Library",
                  href: "#"
                },
                {
                  label: "Config Files",
                  href: "#"
                },
                {
                  label: "Tips & Guides",
                  href: "#"
                }
              ]
            },
            {
              title: "Community",
              items: [
                {
                  label: "Discord",
                  href: "#"
                },
                {
                  label: "Twitter",
                  href: "#"
                },
                {
                  label: "Contact",
                  href: "#contact"
                }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Twitch,
              href: "https://twitch.tv",
              ariaLabel: "Twitch channel"
            },
            {
              icon: Youtube,
              href: "https://youtube.com",
              ariaLabel: "YouTube channel"
            },
            {
              icon: Twitter,
              href: "https://twitter.com",
              ariaLabel: "Twitter profile"
            },
            {
              icon: MessageCircle,
              href: "https://discord.com",
              ariaLabel: "Discord server"
            }
          ]}
          copyrightText="© 2025 Baphomet. Grinding CS2 ranks daily."
        />
      </div>
    </ThemeProvider>
  );
}