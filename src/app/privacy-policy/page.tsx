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

const placeholderMarkdown = `
# Privacy Policy

## Analytics

We use analytics services to help us understand how the app is used, so we can improve features, fix problems, and make better product decisions.

### What is collected

Our analytics providers may collect:

- **Usage information**: general information about how you interact with the app (for example, which screens are viewed and how often the app is used).
- **Device and app information**: such as device type, operating system, and app version.
- **Purchase and subscription information**: limited details about in‑app purchases and subscription status (for example, which product was purchased and whether it renewed), as reported by the App Store and our billing provider.

We do **not** use analytics to collect your name, email address, or other direct contact details for advertising, and we do **not** use advertising identifiers (like the IDFA) to track you across other apps or websites.

### How we use analytics

We use this information only to:

- monitor app performance and reliability,
- understand general usage patterns,
- improve and optimize features, onboarding, and subscription flows.

### Analytics providers

We currently use trusted third‑party services (such as Mixpanel, Firebase Analytics, and RevenueCat) to process this data on our behalf. These providers act as our data processors and are bound by contractual obligations to protect your information.

If you have any questions about our use of analytics, please contact us using the details in the “Contact” section of this policy.
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