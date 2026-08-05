import type { Metadata, Viewport } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import { CHAT } from "@/config/chat";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

const SITE_URL = "https://newhorizonkjb.com";
const SITE_NAME = "New Horizon Baptist Church";
const SITE_TAGLINE = "A King James Bible Independent Baptist Church in Port Byron, NY";
const SITE_DESCRIPTION =
  "New Horizon Baptist Church is a friendly, King James Bible Independent Baptist church in Port Byron, New York. Join us Sunday for Sunday School at 10:00 AM and Morning Worship at 11:00 AM, with Thursday Bible study at 6:30 PM. Old-fashioned hymns, KJV preaching, and a warm welcome — all are welcome.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — ${SITE_TAGLINE}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "Independent Baptist church",
    "KJV Baptist church",
    "King James Bible church",
    "Bible-believing church near me",
    "Independent Fundamental Baptist",
    "old-fashioned Baptist church",
    "Sunday worship",
    "Thursday Bible study",
    "expository preaching",
    "Baptist church family",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    type: "website",
    locale: "en_US",
    siteName: SITE_NAME,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — exterior of our church building`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  // Icons come from the app/ file conventions: favicon.ico, icon.png, apple-icon.png
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: SITE_NAME,
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  category: "religion",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fffdf9" },
    { media: "(prefers-color-scheme: dark)", color: "#052a4e" },
  ],
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${lato.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        {children}

        {/*
          Live chat bubble (WBC Chat). Messages land in the church's Slack,
          #newhorizonbaptistchurch, and @-mention Pastor Fincham; he replies from
          Slack and it appears live in the visitor's chat. Any button on the site
          can open it with window.WBCChat.open().

          Deliberately a plain <script defer> rather than next/script: the widget
          reads its settings off document.currentScript, so the tag (and every
          data- attribute) needs to be in the served HTML as written.
        */}
        <script
          src={`${CHAT.origin}/widget/wbc-chat.js`}
          data-api={CHAT.origin}
          data-key={CHAT.apiKey}
          data-agent-icon-url={CHAT.agentIcon}
          data-accent-color={CHAT.accentColor}
          data-greeting={CHAT.greeting}
          defer
        />
      </body>
    </html>
  );
}
