import Script from 'next/script';


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
                   {/* Google Analytics Script */}
                   <Script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-H8WQHE6FS4"
            strategy="afterInteractive"
          />
          <Script
            id="google-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-H8WQHE6FS4');
              `,
            }}
          />
        <div>{children}</div>
      </body>
    </html>
  );
}
