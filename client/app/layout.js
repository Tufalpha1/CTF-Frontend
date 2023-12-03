import './globals.css'
import localFont from "next/font/local";


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const powerGrotesk = localFont({
  src: "../public/fonts/PowerGrotesk-Regular.ttf",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={powerGrotesk.className}>{children}</body>
    </html>
  );
}
