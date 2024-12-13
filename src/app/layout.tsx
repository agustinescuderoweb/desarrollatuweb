import type { Metadata } from "next";
import "./globals.css";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Desarrolla tu landing page desde cero",
  description: "Desarrollo de Landing Page",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Head>
          {/* Facebook Pixel */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s) {
                  if(f.fbq) return; 
                  n=f.fbq=function(){n.callMethod?
                  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                  if(!f._fbq) f._fbq=n;
                  n.push=n; n.loaded=!0; n.version='2.0';
                  n.queue=[];
                  t=b.createElement(e); t.async=!0;
                  t.src=v;
                  s=b.getElementsByTagName(e)[0];
                  s.parentNode.insertBefore(t,s)
                }(window, document,'script', 'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '491809267251900');
                fbq('track', 'PageView');
              `,
            }}
          />
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              src="https://www.facebook.com/tr?id=491809267251900&ev=PageView&noscript=1"
            />
          </noscript>
          {/* Favicon */}
          <link rel="icon" href="/logo.ico" />
        </Head>
        {children}
      </body>
    </html>
  );
}
