import { Helmet } from "react-helmet-async";
export default function Seo({ title, description, name, type }) {
	return (
		<Helmet>
			{/* Standard metadata tags */}
			<title>{title}</title>
			<meta name="description" content={description} />
			{/* Facebook tags */}
			<meta property="og:type" content={type} />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			{/* <meta content="path|link" property="og:image" /> */}
			{/* Twitter tags */}
			<meta name="twitter:creator" content={name} />
			<meta name="twitter:card" content={type} />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			{/* <meta content="path|link" property="twitter:image" /> */}
		</Helmet>
	);
}
