import type { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown";
import { Nav } from "@/components/hero/nav";
import { BackgroundBlur } from "@/components/ui/background-blur";
import { FooterSimple } from "@/components/footer/footer-simple";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Review the terms that govern your use of Virario.",
};

const placeholderMarkdown = `# Terms and Conditions

Last updated: October 29, 2025

Welcome to Virario! These Terms and Conditions ("Terms") govern your access to and use of our services and website. By using Virario, you agree to these Terms.

## Use of Service

- You must comply with all applicable laws.
- You will not misuse the service or attempt to disrupt it.

## Accounts

- You are responsible for maintaining the confidentiality of your account.
- You are responsible for all activity under your account.

## Intellectual Property

All content, trademarks, and service marks are the property of Virario or its licensors.

## Subscription and Billing

If applicable, subscriptions renew automatically unless canceled in accordance with the platform's policies.

## Termination

We may suspend or terminate access for violations of these Terms or to protect our service and users.

## Disclaimer

The service is provided "as is" without warranties of any kind to the extent permitted by law.

## Limitation of Liability

To the extent permitted by law, Virario shall not be liable for indirect, incidental, special, or consequential damages.

## Changes to Terms

We may update these Terms from time to time. Continued use constitutes acceptance of the updated Terms.

## Contact

Questions? Contact [support@virario.app](mailto:support@virario.app).
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

export default function TermsAndConditions() {
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