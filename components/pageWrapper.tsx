import Footer from "./footer";
import Navigator from "./navigator";

import styles from "@/styles/pageWrapper.module.scss";

export default function PageWrapper({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<Navigator />
			<div className={styles.bodyContainer}>{children}</div>
			<Footer />
		</>
	);
}
