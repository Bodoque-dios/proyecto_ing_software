import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SessionProvider } from "next-auth/react";

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
	title: "Horario UAIN'T",
	description: "La mejor app para ver tu horario de clases",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<meta name="apple-mobile-web-app-capable" content="yes" />
			<meta name="mobile-web-app-capable" content="yes" />
			<meta name="application-name" content="UAIN'T" />
			<meta
				name="apple-mobile-web-app-status-bar-style"
				media="(prefers-color-scheme: dark)"
				content="black-translucent"
			/>
			<meta
				name="apple-mobile-web-app-status-bar-style"
				media="(prefers-color-scheme: light)"
				content="white"
			/>
			<meta
				name="theme-color"
				media="(prefers-color-scheme: light)"
				content="white"
			/>
			<meta
				name="theme-color"
				media="(prefers-color-scheme: dark)"
				content="black"
			/>

			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<SessionProvider>{children}</SessionProvider>
			</body>
		</html>
	);
}
