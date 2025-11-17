import { TestimonialMarquee } from "@/components/testimonials/testimonial-marquee";
import { PillAvatar, PillAvatarGroup } from "../ui/pill";
import { Pill } from "../ui/pill";

export type Testimonial = {
  name: string;
  date: string;
  title: string;
  content: string;
  avatar?: string;
  rating: number;
};

const testimonials = [
  {
    name: "Giana Herwitz",
    date: "May 4",
    title: "Perfect for Content Creators",
    content: `"This app literally changed my content game. I can create viral-worthy videos in minutes instead of hours!"`,
    rating: 5,
  },
  {
    name: "Hanna Gouse",
    date: "May 8",
    title: "Best Investment Ever",
    content: `"I was skeptical at first, but after my first video hit 2M views, I knew this was the real deal. The AI is insanely good."`,
    rating: 5,
  },
  {
    name: "Kaiya Donin",
    date: "May 15",
    title: "Simple Yet Powerful",
    content: `"No complicated editing software needed. Just tap, create, and watch your content blow up. It's that simple!"`,
    rating: 5,
  },
  {
    name: "Alex Bergwijn",
    date: "May 22",
    title: "Professional Quality",
    content: `"My clients think I have a whole production team. Little do they know it's just me and this amazing app!"`,
    rating: 5,
  },
] satisfies Testimonial[];

const testimonials2 = [
  {
    name: "Sarah Mitchell",
    date: "June 12",
    title: "Amazing Results!",
    content: `"My videos are getting 10x more engagement since I started using this app. Total game changer!"`,
    rating: 5,
  },
  {
    name: "Marcus Thompson",
    date: "June 15",
    title: "So Easy to Use",
    content: `"I went from zero to viral in just two weeks. The AI does all the heavy lifting for me."`,
    rating: 5,
  },
  {
    name: "Emma Rodriguez",
    date: "June 18",
    title: "Worth Every Penny",
    content: `"Finally an app that actually delivers on its promise. My follower count has tripled!"`,
    rating: 5,
  },
  {
    name: "James Carter",
    date: "June 20",
    title: "Incredible Tool",
    content: `"The quality of the generated content is mind-blowing. People think I hired a professional team."`,
    rating: 5,
  },
] satisfies Testimonial[];

export function Testimonials() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-6 py-14 md:py-25">
      {/* <Badge variant="secondary" className="mb-2 uppercase">
        Testimonial
      </Badge> */}
        <Pill>
          <PillAvatarGroup className="flex">
            <PillAvatar src="/avatars/1.jpg" />
            <PillAvatar src="/avatars/2.jpg" />
            <PillAvatar src="/avatars/3.jpg" />
            <PillAvatar src="/avatars/4.jpg" />
          </PillAvatarGroup>
          <p className="text-muted-foreground px-2 text-xs font-medium sm:border-l-1 sm:text-sm">
            Join <span className="text-foreground">5 thousand</span> other users already on board
          </p>
        </Pill>
      <h2 className="text-center text-3xl leading-[1.1] tracking-tight sm:text-5xl" style={{ fontFamily: 'SF Pro Rounded, ui-rounded, system-ui, sans-serif' }}>
        <span className="font-bold" style={{ color: '#FF8D28' }}>Don&apos;t Take</span>
        <div className="text-muted-foreground font-medium">Our Word for It</div>
      </h2>
      <p className="mb-3 max-w-lg text-center leading-6 tracking-tight sm:text-xl lg:mb-8" style={{ fontFamily: 'SF Pro Rounded, ui-rounded, system-ui, sans-serif' }}>
        We&apos;ve built the ultimate video-image generation app so you can go viral easy
      </p>
      <div className="relative w-[calc(100%+3rem)] overflow-x-hidden py-4 lg:w-full">
        <TestimonialMarquee testimonials={testimonials} className="mb-4" />
        <TestimonialMarquee testimonials={testimonials2} reverse />
      </div>
    </div>
  );
}
