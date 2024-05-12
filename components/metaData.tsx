import React from "react";
import { Helmet } from "react-helmet";

export default function MetaData({
	title,
	description,
}: {
	title: string;
	description: string;
}) {
	return (
		<Helmet>
			{/* Standard metadata tags */}
			<title>{title}</title>
			<meta name="description" content={description} />
			{/* End standard metadata tags */}
			{/* Facebook tags */}
			<meta property="og:type" content="Page" />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta
				property="og:image"
				content="https://uclaacm.github.io/ai.uclaacm.com/logos/ai_motif_applied_2.png"
			/>
			{/* End Facebook tags */}
			{/* Twitter tags */}
			<meta name="twitter:creator" content="ACM AI" />
			<meta name="twitter:card" content="Page" />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			<meta
				name="twitter:image"
				content="https://uclaacm.github.io/ai.uclaacm.com/logos/ai_motif_applied_2.png"
			/>
			{/* End Twitter tags */}
		</Helmet>
	);
}
