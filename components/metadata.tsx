import { NextSeo } from "next-seo";
import { OpenGraphMedia } from "next-seo/lib/types";

export default function Metadata({
	title,
	description,
	images,
}: {
	title: string;
	description?: string;
	images?: OpenGraphMedia[];
}) {
	return (
		<NextSeo
			title={title + " | ACM AI at UCLA"}
			description={
				description ??
				"We are a club at UCLA dedicated to making engineering and research in AI easy, accessiable, and fun for all!"
			}
			openGraph={{
				type: "website",
				images: images ?? [
					{
						url: "https://uclaacm.github.io/acmai.la/logos/ai_motif_applied_2.png",
						width: 990,
						height: 555,
						alt: "ACM AI motif",
					},
				],
				site_name: "ACM AI at UCLA",
			}}
			twitter={{
				cardType: "summary_large_image",
			}}
		/>
	);
}
