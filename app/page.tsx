const POOL_URL = "https://app.ston.fi/swap?chartVisible=true&chartInterval=1w&ft=TON&tt=EQBCY5Yj9G6VAQibTe6hz53j8vBNO234n0fzHUP3lUBBYbeR";
export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section>
        <h1>RANNTA is a living protocol on The Open Network</h1>
        <p>
          A creator-first ecosystem combining token utility, NFT infrastructure,
          and symbolic on-chain design — powered by TON.
        </p>

        <div style={{ marginTop: 32, display: "flex", gap: 16, flexWrap: "wrap" }}>
          <a href="#ecosystem">Explore Ecosystem</a>
          <a href="#token">View RANNTA Token</a>
        </div>
      </section>

      {/* WHAT IS */}
      <section>
        <h2>What is RANNTA?</h2>
        <p>
          RANNTA is a TON-native protocol-entity designed to support digital
          creators, collectors, and symbolic on-chain assets.
        </p>
        <p>
          It operates through a unified ecosystem that includes a native token,
          an NFT marketplace, and protocol-level tools for ownership and
          exchange.
        </p>
      </section>

      {/* TOKEN */}
      <section id="token">
        <h2>RANNTA Token</h2>
        <p>
          RANNTA is a TON-native utility token used across the RANNTA ecosystem
          for transactions, access, and protocol-level interactions.
        </p>

        <ul>
          <li>TON Jetton standard</li>
          <li>Marketplace utility</li>
          <li>Ecosystem integration</li>
        </ul>

        <p>
          <a href="https://tonviewer.com/" target="_blank" rel="noreferrer">
            View on TON Explorer
          </a>
        </p>
      </section>

      {/* MARKETPLACE */}
      <section>
        <h2>RANNTAverse Marketplace</h2>
        <p>
          A TON-native marketplace for symbolic and creator-driven NFTs.
          Designed for artists who value meaning, ownership, and on-chain
          permanence.
        </p>

        <ul>
          <li>Mint and trade NFTs on TON</li>
          <li>Creator-first design</li>
          <li>Low fees and transparent ownership</li>
        </ul>
      </section>

      {/* ACCESS */}
      <section>
        <h2>Access the Ecosystem</h2>
        <p>
          RANNTA works seamlessly with TON wallets such as Tonkeeper and
          integrates with web and Telegram-based interfaces.
        </p>
      </section>

      {/* ECOSYSTEM MAP */}
      <section id="ecosystem">
        <h2>Ecosystem Overview</h2>
        <ul>
          <li>RANNTA Token</li>
          <li>NFT Collections</li>
          <li>Marketplace Infrastructure</li>
          <li>Liquidity Pools</li>
          <li>Community Channels</li>
        </ul>
      </section>

      {/* VISION */}
      <section>
        <h2>Beyond a Token</h2>
        <p>
          RANNTA is not designed as a speculative instrument, but as a long-lived
          protocol shaped by creators, symbolism, and on-chain identity.
        </p>
      </section>

      {/* FOOTER */}
      <section>
        <p>© RANNTAverse — Built on The Open Network</p>
      </section>
    </>
  );
}