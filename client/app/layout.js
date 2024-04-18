import './globals.css'


export const metadata = {
  title: 'CTF 2024',
  description: 'Hack harder',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`font-body inset-0 z-[-2] w-full min-h-screen bg-[linear-gradient(to_right,#ffffff16_1px,transparent_1px),linear-gradient(to_bottom,#ffffff16_1px,transparent_1px)] bg-[size:40px_40px]`}
      >{children}</body>
    </html>
  );
}
