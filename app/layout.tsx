const POOL_URL = "https://app.ston.fi/swap?chartVisible=true&chartInterval=1w&ft=TON&tt=EQBCY5Yj9G6VAQibTe6hz53j8vBNO234n0fzHUP3lUBBYbeR";
export const metadata = {
  title: "RANNTAverse — Ecosystem Hub",
  description:
    "RANNTAverse is a TON-native ecosystem combining token utility, NFT infrastructure, and symbolic on-chain design."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            "name": "RANNTAverse — TON-Native NFT Marketplace",
            "url": "https://ranntaverse.app/",
            "identifier": {
              "@type": "PropertyValue",
              "propertyID": "DOI",
              "value": "10.5281/zenodo.17988348",
              "url": "https://doi.org/10.5281/zenodo.17988348"
            },
            "sameAs": [
              "https://doi.org/10.5281/zenodo.17988348",
              "https://rannta.com",
              "https://ranntaverse.app",
              "https://ranntaverse.art",
              "https://github.com/ilia144000"
            ]
          })
        }}
      /></head>
<body>{children}</body>
    </html>
  );
}

