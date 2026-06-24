import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Varshith Puli — AI Security Engineer",
  description:
    "Varshith Puli builds secure intelligence — AI red teaming, secure agent systems, GenAI platform security, and security architecture for AI initiatives. Currently securing AI at scale.",
  keywords: [
    "Varshith Puli",
    "AI Security Engineer",
    "AI Red Teaming",
    "Secure AI Agents",
    "GenAI Security",
    "AI Governance",
    "Security Architecture",
    "Prompt Injection",
    "AI Threat Modeling",
    "NeuroRAG",
    "ThreatModelerX",
  ],
  authors: [{ name: "Varshith Puli" }],
  creator: "Varshith Puli",
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
  openGraph: {
    title: "Varshith Puli — AI Security Engineer",
    description:
      "Building secure intelligence. AI red teaming, secure agent systems, and GenAI platform security.",
    url: "https://chat.z.ai",
    siteName: "Varshith Puli",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Varshith Puli — AI Security Engineer",
    description:
      "Building secure intelligence. AI red teaming, secure agent systems, and GenAI platform security.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#08090c",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={`${geist.variable} ${inter.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
        {/* Hide Next.js dev tools "N" badge in bottom-left */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function hideDevTools() {
                  var portal = document.querySelector('nextjs-portal');
                  if (portal && portal.shadowRoot) {
                    var style = document.createElement('style');
                    style.textContent = '[data-nextjs-toast], .nextjs-toast, #devtools-indicator { display: none !important; opacity: 0 !important; visibility: hidden !important; }';
                    if (!portal.shadowRoot.querySelector('style[data-hide-devtools]')) {
                      style.setAttribute('data-hide-devtools', 'true');
                      portal.shadowRoot.appendChild(style);
                    }
                  }
                }
                if (document.readyState === 'loading') {
                  document.addEventListener('DOMContentLoaded', hideDevTools);
                } else {
                  hideDevTools();
                }
                setTimeout(hideDevTools, 500);
                setTimeout(hideDevTools, 1500);
                setTimeout(hideDevTools, 3000);
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
