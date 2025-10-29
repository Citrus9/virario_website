import type { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown";
import { Nav } from "@/components/hero/nav";
import { BackgroundBlur } from "@/components/ui/background-blur";
import { FooterSimple } from "@/components/footer/footer-simple";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read how Virario collects, uses, and protects your data.",
};

const placeholderMarkdown = `# Privacy Policy

Last updated: October 29, 2025

Welcome to Virario! This Privacy Policy explains how we collect, use, and safeguard your information when you use our services and website.

## Information We Collect

- Account information (such as email) if you create an account.
- Usage data related to app features and interactions.
- Device and diagnostic information to improve performance.

## How We Use Your Information

- To provide and maintain our services.
- To improve product functionality and user experience.
- To communicate updates, security alerts, and administrative messages.

## Data Sharing

We do not sell your personal data. We may share limited data with trusted service providers who help us operate our services, under strict confidentiality agreements.

## Data Retention

We retain data only as long as necessary for the purposes described above or as required by law.

## Your Rights

Depending on your location, you may have rights to access, correct, or delete your personal information.

## Contact Us

If you have any questions, contact us at [support@virario.app](mailto:support@virario.app).
`;

const markdownComponents: Components = {
  h1: ({ node: _node, ...props }) => (
    <h1 className="font-sf-rounded text-3xl sm:text-4xl font-bold tracking-tight mb-4" {...props} />
  ),
  h2: ({ node: _node, ...props }) => (
    <h2 className="font-sf-rounded text-2xl sm:text-3xl font-semibold tracking-tight mt-8 mb-3" {...props} />
  ),
  h3: ({ node: _node, ...props }) => (
    <h3 className="text-xl sm:text-2xl font-semibold mt-6 mb-2" {...props} />
  ),
  p: ({ node: _node, ...props }) => (
    <p className="leading-7 text-foreground/90 mb-4" {...props} />
  ),
  ul: ({ node: _node, ...props }) => (
    <ul className="list-disc pl-6 space-y-2 mb-4" {...props} />
  ),
  ol: ({ node: _node, ...props }) => (
    <ol className="list-decimal pl-6 space-y-2 mb-4" {...props} />
  ),
  li: ({ node: _node, ...props }) => <li className="leading-7" {...props} />,
  a: ({ node: _node, ...props }) => (
    <a className="text-accent underline underline-offset-4" target="_blank" rel="noopener noreferrer" {...props} />
  ),
  hr: ({ node: _node, ...props }) => <hr className="my-8 border-border" {...props} />,
  strong: ({ node: _node, ...props }) => <strong className="font-semibold" {...props} />,
  em: ({ node: _node, ...props }) => <em className="italic" {...props} />,
  code: ({ node: _node, ...props }) => (
    <code className="rounded bg-muted px-1 py-0.5 text-sm" {...props} />
  ),
  pre: ({ node: _node, ...props }) => (
    <pre className="rounded-lg bg-muted p-4 overflow-x-auto mb-4" {...props} />
  ),
};

export default function PrivacyPolicy() {
  return (
    <div className="relative min-h-[100dvh] flex flex-col">
      <BackgroundBlur className="-top-40 md:-top-0" />
      <Nav showBackButton backHref="/" />
      <main className="flex-1 w-full">
        <div className="mx-auto w-full max-w-3xl px-6 md:px-8 pt-24 pb-16">
          <ReactMarkdown components={markdownComponents}>
            {placeholderMarkdown}
          </ReactMarkdown>
        </div>
      </main>
      <FooterSimple />
    </div>
  );
}