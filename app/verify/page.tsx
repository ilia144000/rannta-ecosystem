export const metadata = {
  title: "Verify — RANNTA Ecosystem Hub",
  description:
    "Canonical references for verification, indexing, and citation of the RANNTA ecosystem on TON."
};

const HUB_URL = "https://ranntaverse.app/";
const VERIFY_URL = "https://ranntaverse.app/verify/";

const DOI_LATEST_URL = "https://doi.org/10.5281/zenodo.17988923";
const DOI_PREV_URL = "https://doi.org/10.5281/zenodo.17988348";

const OFFICIAL_SITE = "https://rannta.com/";
const MEDIUM = "https://medium.com/@ranntaofficial";
const GITHUB_REPO = "https://github.com/ilia144000/rannta-ecosystem";
const GITHUB_PROFILE = "https://github.com/ilia144000";

const STON_SWAP = "https://app.ston.fi/swap?chartVisible=true&chartInterval=1w&ft=TON&tt=EQBCY5Yj9G6VAQibTe6hz53j8vBNO234n0fzHUP3lUBBYbeR";
const TONVIEWER_MASTER = "https://tonviewer.com/EQBCY5Yj9G6VAQibTe6hz53j8vBNO234n0fzHUP3lUBBYbeR";

export default function VerifyPage() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Verify — RANNTA Ecosystem Hub",
    "url": VERIFY_URL,
    "isPartOf": {
      "@type": "WebSite",
      "name": "RANNTA Ecosystem Hub",
      "url": HUB_URL
    },
    "about": [
      {
        "@type": "CreativeWork",
        "name": "RANNTAverse Marketplace — Latest Release (Zenodo)",
        "identifier": {
          "@type": "PropertyValue",
          "propertyID": "DOI",
          "value": "10.5281/zenodo.17988923",
          "url": DOI_LATEST_URL
        },
        "sameAs": [DOI_LATEST_URL]
      },
      {
        "@type": "CreativeWork",
        "name": "RANNTAverse Marketplace — Previous Archive (Zenodo)",
        "identifier": {
          "@type": "PropertyValue",
          "propertyID": "DOI",
          "value": "10.5281/zenodo.17988348",
          "url": DOI_PREV_URL
        },
        "sameAs": [DOI_PREV_URL]
      }
    ],
    "sameAs": [
      OFFICIAL_SITE,
      MEDIUM,
      GITHUB_REPO,
      STON_SWAP,
      TONVIEWER_MASTER,
      DOI_LATEST_URL,
      DOI_PREV_URL
    ]
  };

  return (
    <>
      <section>
        <h1>Verify</h1>
        <p>
          Canonical references for verification, indexing, and citation of the RANNTA ecosystem.
        </p>
      </section>

      <section>
        <h2>Zenodo (DOI)</h2>
        <ul>
          <li>
            <a href={DOI_LATEST_URL} target="_blank" rel="noreferrer">
              Latest Marketplace Release (DOI)
            </a>
          </li>
          <li>
            <a href={DOI_PREV_URL} target="_blank" rel="noreferrer">
              Previous Archive (DOI)
            </a>
          </li>
        </ul>
      </section>

      <section>
        <h2>Official References</h2>
        <ul>
          <li>
            <a href={OFFICIAL_SITE} target="_blank" rel="noreferrer">
              Official Website (rannta.com)
            </a>
          </li>
          <li>
            <a href={MEDIUM} target="_blank" rel="noreferrer">
              Official Publications (Medium)
            </a>
          </li>
          <li>
            <a href={GITHUB_REPO} target="_blank" rel="noreferrer">
              Source Repository (rannta-ecosystem)
            </a>
          </li>
          <li>
            <a href={GITHUB_PROFILE} target="_blank" rel="noreferrer">
              Builder Profile (GitHub)
            </a>
          </li>
        </ul>
      </section>

      <section>
        <h2>TON References</h2>
        <ul>
          <li>
            <a href={STON_SWAP} target="_blank" rel="noreferrer">
              STON.fi Swap (TON → RANNTA)
            </a>
          </li>
          <li>
            <a href={TONVIEWER_MASTER} target="_blank" rel="noreferrer">
              Tonviewer (Jetton Master)
            </a>
          </li>
        </ul>
      </section>

      <section>
        <h2>Machine-Readable</h2>
        <p>
          This page includes a JSON-LD knowledge block for deterministic indexing.
        </p>
        <div className="card">
          <code style={{ whiteSpace: "pre-wrap" }}>{JSON.stringify(ld, null, 2)}</code>
        </div>
      </section>

      <section>
        <p>© RANNTA Ecosystem — Built on The Open Network</p>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
      />
    </>
  );
}