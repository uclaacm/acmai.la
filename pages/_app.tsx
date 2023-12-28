import type { AppProps } from "next/app";
import type { Metadata } from "next";
import Head from "next/head";

import PageWrapper from "@/components/pageWrapper";

import "../styles/globals.scss";

export const metadata: Metadata = {
	title: "acm ai website",
};

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>

			<PageWrapper>
				<Component {...pageProps} />
			</PageWrapper>
		</>
	);
}
