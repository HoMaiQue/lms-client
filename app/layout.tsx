import Providers from "@/components/providers";
import "./globals.css";

import ThemeProvider from "@/components/theme-provider";
import { Josefin_Sans, Poppins } from "next/font/google";
import { Toaster } from "react-hot-toast";
const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-Poppins",
});
const josefin = Josefin_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-Josefin",
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={`${poppins.variable} ${josefin.variable} 
                 bg-gradient-to-r dark:from-purple dark:via-blue-100  dark:to-pink-200
                 from-orange-200 via-orange-100 to-pink-100
            `}
            >
                <Providers>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                    >
                        {children}
                        <Toaster position="top-center" reverseOrder={false} />
                    </ThemeProvider>
                </Providers>
            </body>
        </html>
    );
}
