import "./globals.css";

import Header from "./components/Header/Header";

export const metadata = {
  title: "Audrey | Développeuse Frontend",
  description: " ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body id="modal">
        <Header />
        {children}
      </body>
    </html>
  );
}
