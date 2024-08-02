'use client';
import SideNavigationBar from '@/components/SideNavigationBar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en">
      <body >
        <SideNavigationBar/>
        {children}
      </body>
    </html>
  );
}
