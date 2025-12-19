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
      <body>{children}</body>
    </html>
  );
}