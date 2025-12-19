import type { Metadata } from "next";

const HUB_URL = "https://ranntaverse.app/";
const SITE_URL = "https://rannta.com/";
const MEDIUM_URL = "https://medium.com/@ranntaofficial";
const GITHUB_PROFILE_URL = "https://github.com/ilia144000";
const GITHUB_REPO_URL = "https://github.com/ilia144000/rannta-ecosystem";

const DOI_PROTOCOL = "10.5281/zenodo.17989368";
const DOI_PROTOCOL_URL = "https://doi.org/10.5281/zenodo.17989368";

const DOI_RANNTAVERSE_LATEST = "10.5281/zenodo.17988923";
const DOI_RANNTAVERSE_LATEST_URL = "https://doi.org/10.5281/zenodo.17988923";

const DOI_ARCWALLET = "10.5281/zenodo.17989262";
const DOI_ARCWALLET_URL = "https://doi.org/10.5281/zenodo.17989262";

const DOI_RANNTAVERSE_PREV = "10.5281/zenodo.17988348";
const DOI_RANNTAVERSE_PREV_URL = "https://doi.org/10.5281/zenodo.17988348";

const STON_SWAP_URL = "https://app.ston.fi/swap?chartVisible=true&chartInterval=1w&ft=TON&tt=EQBCY5Yj9G6VAQibTe6hz53j8vBNO234n0fzHUP3lUBBYbeR";
const TONVIEWER_MASTER_URL = "https://tonviewer.com/EQBCY5Yj9G6VAQibTe6hz53j8vBNO234n0fzHUP3lUBBYbeR";

export const metadata: Metadata = {
  metadataBase: new URL(HUB_URL),
  title: "RANNTA Ecosystem Hub — Token, NFTs, Marketplace on TON",
  description:
    "Official ecosystem hub for RANNTA on TON. Canonical DOI graph (Zenodo) for protocol, marketplace releases, and ArcWallet.",
  keywords: [
    "RANNTA",
    "TON",
    "The Open Network",
    "Jetton",
    "NFT",
    "NFT marketplace",
    "RANNTAverse",
    "ArcWallet",
    "Zenodo",
    "DOI",
    "knowledge graph",
    "Schema.org",
    "protocol-entity",
    "STON.fi"
  ],
  alternates: { canonical: HUB_URL },
  openGraph: {
    type: "website",
    url: HUB_URL,
    title: "RANNTA Ecosystem Hub",
    description:
      "Canonical references for RANNTA on TON: protocol DOI, marketplace DOI releases, ArcWallet DOI, and verification links.",
    siteName: "RANNTA Ecosystem Hub",
    images: [HUB_URL + "og.svg"]
  },
  twitter: {
    card: "summary_large_image",
    title: "RANNTA Ecosystem Hub",
    description:
      "Canonical references for RANNTA on TON: protocol DOI, marketplace DOI releases, ArcWallet DOI.",
    images: [HUB_URL + "og.svg"]
  }
};

const DOI_GRAPH_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CreativeWork",
      "name": "RANNTA Protocol (Parent)",
      "url": SITE_URL,
      "identifier": {
        "@type": "PropertyValue",
        "propertyID": "DOI",
        "value": DOI_PROTOCOL,
        "url": DOI_PROTOCOL_URL
      },
      "sameAs": [DOI_PROTOCOL_URL, SITE_URL, MEDIUM_URL, GITHUB_PROFILE_URL],
      "hasPart": [
        DOI_RANNTAVERSE_LATEST_URL,
        DOI_ARCWALLET_URL,
        HUB_URL,
        DOI_RANNTAVERSE_PREV_URL
      ]
    },
    {
      "@type": "WebSite",
      "name": "RANNTA Ecosystem Hub (ranntaverse.app)",
      "url": HUB_URL,
      "isPartOf": {
        "@type": "CreativeWork",
        "name": "RANNTA Protocol (Parent)",
        "sameAs": [DOI_PROTOCOL_URL]
      },
      "sameAs": [
        DOI_PROTOCOL_URL,
        DOI_RANNTAVERSE_LATEST_URL,
        DOI_ARCWALLET_URL,
        DOI_RANNTAVERSE_PREV_URL,
        GITHUB_REPO_URL,
        STON_SWAP_URL,
        TONVIEWER_MASTER_URL
      ]
    }
  ]
} as const;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(DOI_GRAPH_LD) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
