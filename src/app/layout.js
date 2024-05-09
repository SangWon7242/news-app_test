import "./globals.css";

export const metadata = {
  title: "방구석 코딩 뉴스",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
