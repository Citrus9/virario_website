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
# Privacy Policy for Virario

**Effective Date: November 16, 2024**

## Introduction

Welcome to Virario. We value your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and share your information when you use our AI-powered video and image generation application ("Virario").

## Information We Collect

### 1. Personal Information

- **Account Information**: When you create an account, we may collect your email address and authentication credentials.
- **Profile Information**: You may provide additional information such as a profile picture and preferences.

### 2. Content

- **User-Generated Content**: Any content you create using Virario, including generated videos, images, and creative projects.
- **Media**: Photos, videos, and other media files you upload or generate within the platform.
- **Prompts and Instructions**: Text prompts and creative instructions you provide to generate AI content.

### 3. Usage Data

- **Activity Information**: We collect data about your interactions with the app, including features used, content generated, and preferences.
- **Device Information**: Information about your device, including device type, operating system, and app version.

## How We Use Your Information

### 1. To Provide and Improve Our Services

- Process your requests to generate AI-powered videos and images.
- Personalize your experience and provide tailored content recommendations.
- Improve the functionality, quality, and user interface of Virario.

### 2. Communication

- Send you important updates, notifications, and service announcements.
- Respond to your inquiries and provide customer support.
- Send promotional materials (which you can opt out of at any time).

### 3. Safety and Security

- Monitor for and prevent fraudulent activities and security breaches.
- Enforce our terms of service and community guidelines.
- Ensure the appropriate and safe use of AI-generated content.

## Face Data and Privacy

Virario uses AI technologies that may analyze facial features and other visual elements to generate personalized videos and images as requested by you. We care deeply about your privacy and fully comply with Apple's App Store Review Guidelines (5.1.1).

### 1. Use of Face Data

- Face data is used **only** to process and create your requested video or image content.
- It is **never** used for identification, verification, biometric authentication, or tracking purposes.
- The processing occurs automatically and is limited strictly to the scope of your creative request.

### 2. Face Data Retention

- Virario **does not store any face data** on its servers.
- All face-related data is processed temporarily and **deleted immediately** after your content is generated.
- No facial information is kept, saved, or backed up after your result is delivered.
- **We do not store user photos, videos, or generated content on our servers** - all content is processed temporarily and delivered directly to your device.

### 3. Purpose of Face Data Usage

- The **only purpose** of face data use is to provide AI-generated videos or images you specifically request.
- It is **not used** for advertising, third-party analytics, profiling, or any secondary purpose.

### 4. Third-Party AI Processors

- AI processing is performed by third-party AI providers, specifically **OpenAI** and **Google**, whose AI models we use for inference.
- **Virario does not store your uploaded photos, videos, or generated content on our servers** - all content is delivered directly to your device.
- These third-party AI processors (OpenAI and Google) have their own data handling practices and privacy policies.
- We recommend reviewing OpenAI's Privacy Policy and Google's Privacy Policy for specific information about how they process data.
- While we select these providers based on their reputation and available privacy commitments, we cannot guarantee their specific data handling practices.

### 5. Data Security

- All face data and media are transmitted securely over **encrypted (HTTPS/TLS) connections**.
- No unencrypted or identifiable face data is ever stored or transferred insecurely.
- We implement industry-standard security measures to protect your data during processing.

### 6. User Rights

- Since no facial data is retained after processing, there is nothing to delete once the generation process completes.
- You remain in **full control** of any generated content and can delete your creations and account at any time.
- You may request information about how your data is processed by contacting us.

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

## How We Share Your Information

### 1. Service Providers

- Third-party service providers who assist us with operations, such as cloud hosting, AI processing, data analysis, payment processing, and customer support.
- These providers are bound by contractual obligations to protect your information and use it only for the purposes we specify.

### 2. Legal and Compliance

- When required by law or legal process, we may share information with legal authorities.
- To protect our rights, property, or safety, or the rights, property, or safety of our users or others.

### 3. Business Transfers

- In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction. We will notify you of any such change in ownership or control.

### 4. With Your Consent

- We may share your information with third parties when you explicitly consent to such sharing.

**We do not sell your personal data to third parties.**

## Your Choices

### 1. Account Settings

- You can update your personal information and adjust your privacy settings within the app.

### 2. Communication Preferences

- Opt out of receiving promotional communications by following the instructions in the messages or adjusting your settings.
- You will continue to receive important service-related communications.

### 3. Data Access and Deletion

- Request access to or deletion of your personal data by contacting us at **support@virario.com**.
- You can delete your account and associated data directly through the app settings.

### 4. Content Control

- You have full control over the content you create and can delete any generated videos or images at any time.

## Data Retention

- We retain your personal information only for as long as necessary to provide our services and fulfill the purposes outlined in this Privacy Policy.
- **We do not store your uploaded photos, videos, or generated content on our servers** - all content is processed temporarily and delivered directly to your device.
- Generated content is automatically saved to your device and may sync to your iCloud account based on your device settings - this is controlled entirely by you and Apple, not by Virario.
- When you delete your account, we will delete your personal data within a reasonable timeframe, except where we are required to retain it by law.

## Security

We implement reasonable and appropriate security measures to protect your information from unauthorized access, disclosure, alteration, or destruction. These measures include:

- Encryption of data in transit and at rest
- Regular security assessments and updates
- Limited access to personal data by employees and contractors

However, no method of transmission over the Internet or electronic storage is completely secure. While we strive to protect your information, we cannot guarantee absolute security.

## Children's Privacy

Virario is not intended for use by children under the age of 13 (or the applicable age of digital consent in your jurisdiction). We do not knowingly collect personal information from children. If we become aware that we have collected personal information from a child, we will take steps to delete such information promptly.

## International Data Transfers

Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws. We ensure that appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.

## Changes to This Privacy Policy

We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. We will notify you of any significant changes by:

- Posting the new Privacy Policy in the app and on our website
- Updating the "Effective Date" at the top of this policy
- Sending you a notification (if required by law)

Your continued use of Virario after the changes become effective constitutes your acceptance of the updated policy. We encourage you to review this Privacy Policy periodically.

## Contact Us

If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us at:

**Email**: support@virario.com

We will respond to your inquiry within a reasonable timeframe.

## Acknowledgment

By using Virario, you acknowledge that you have read and understood this Privacy Policy and agree to the collection, use, and sharing of your information as described herein.
`;

const markdownComponents: Components = {
  h1: ({ ...props }) => (
    <h1 className="font-sf-rounded text-3xl sm:text-4xl font-bold tracking-tight mb-4" {...props} />
  ),
  h2: ({ ...props }) => (
    <h2 className="font-sf-rounded text-2xl sm:text-3xl font-semibold tracking-tight mt-8 mb-3" {...props} />
  ),
  h3: ({ ...props }) => (
    <h3 className="text-xl sm:text-2xl font-semibold mt-6 mb-2" {...props} />
  ),
  p: ({ ...props }) => (
    <p className="leading-7 text-foreground/90 mb-4" {...props} />
  ),
  ul: ({ ...props }) => (
    <ul className="list-disc pl-6 space-y-2 mb-4" {...props} />
  ),
  ol: ({ ...props }) => (
    <ol className="list-decimal pl-6 space-y-2 mb-4" {...props} />
  ),
  li: ({ ...props }) => <li className="leading-7" {...props} />,
  a: ({ ...props }) => (
    <a className="text-accent underline underline-offset-4" target="_blank" rel="noopener noreferrer" {...props} />
  ),
  hr: ({ ...props }) => <hr className="my-8 border-border" {...props} />,
  strong: ({ ...props }) => <strong className="font-semibold" {...props} />,
  em: ({ ...props }) => <em className="italic" {...props} />,
  code: ({ ...props }) => (
    <code className="rounded bg-muted px-1 py-0.5 text-sm" {...props} />
  ),
  pre: ({ ...props }) => (
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