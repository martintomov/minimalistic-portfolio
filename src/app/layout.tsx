import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                <title>Minimalistic Portfolio @martintmv</title>
                <meta name="description" content="@martintmv" />
                <meta name="author" content="Martin Tomov" />

                {/* OG */}
                <meta property="og:title" content="Martin Tomov" />
                <meta property="og:description" content="@martintmv" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://martintomov.com" />
                <meta property="og:image" content="/favicon.ico" />
            </head>
            <body className='max-w-screen-sm mx-auto selection:bg-primary selection:text-white font-sfmono'>
                <div>
                    {children}
                </div>
            </body>
        </html>
    )
}
