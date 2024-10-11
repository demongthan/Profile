import type { Metadata } from "next";
import localFont from "next/font/local";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';

import "./globals.css";
import ThemeProvider from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Header from "@/components/header/header";
import PageTransition from "@/components/transition/page-transition";
import StairTransition from "@/components/transition/stair-transition";
import ParticlesContainer from "@/components/particles-container";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Profile",
    description: "short and sweet",
};

interface RootLayoutProps {
    children: React.ReactNode;
    params: {
      locale: string;
    };
}

export default async  function LocaleLayout({children,params: { locale },}: Readonly<RootLayoutProps>) {
    const messages = await getMessages();

    return (
        <html lang={locale}>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-slate-800`}>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                        disableTransitionOnChange>
                            <ParticlesContainer></ParticlesContainer>
                            <StairTransition></StairTransition>
                            <Header></Header>
                            <Navbar></Navbar>
                            <PageTransition>
                                <NextIntlClientProvider messages={messages}>
                                    <div className="pt-[4rem] pb-[4rem] w-[96%] xl:pt-[8rem] xl:w-[80%] mx-auto z-10">
                                        {children}
                                    </div>
                                </NextIntlClientProvider>
                            </PageTransition>
                    </ThemeProvider>
            </body>
        </html>
    );
}
