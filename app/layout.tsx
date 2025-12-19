<!-- RANNTA_ZENODO_DOI_GRAPH -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CreativeWork",
      "name": "RANNTA Protocol (Parent)",
      "url": "https://rannta.com/",
      "identifier": {
        "@type": "PropertyValue",
        "propertyID": "DOI",
        "value": "10.5281/zenodo.17989368",
        "url": "https://doi.org/10.5281/zenodo.17989368"
      },
      "sameAs": [
        "https://doi.org/10.5281/zenodo.17989368",
        "https://rannta.com/",
        "https://medium.com/@ranntaofficial",
        "https://github.com/ilia144000"
      ],
      "hasPart": [
    "https://doi.org/10.5281/zenodo.17988923",
    "https://doi.org/10.5281/zenodo.17988348",
    "https://ranntaverse.app/"
      ]
    },
    {
      "@type": "WebSite",
      "name": "RANNTA Ecosystem Hub (ranntaverse.app)",
      "url": "https://ranntaverse.app/",
      "isPartOf": {
        "@type": "CreativeWork",
        "name": "RANNTA Protocol (Parent)",
        "sameAs": ["https://doi.org/10.5281/zenodo.17989368"]
      },
      "sameAs": [
        "https://doi.org/10.5281/zenodo.17989368",
        "https://doi.org/10.5281/zenodo.17988923",
        "https://doi.org/10.5281/zenodo.17988348",
        "https://github.com/ilia144000/rannta-ecosystem",
        "https://app.ston.fi/swap?chartVisible=true&chartInterval=1w&ft=TON&tt=EQBCY5Yj9G6VAQibTe6hz53j8vBNO234n0fzHUP3lUBBYbeR",
        "https://tonviewer.com/EQBCY5Yj9G6VAQibTe6hz53j8vBNO234n0fzHUP3lUBBYbeR"
      ]
    }
  ]
}
</script>
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
              "value": "10.5281/zenodo.17988923",
              "url": "https://doi.org/10.5281/zenodo.17988923",
    "https://doi.org/10.5281/zenodo.17988348"
            },
            "sameAs": [
              "https://doi.org/10.5281/zenodo.17988923",
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



