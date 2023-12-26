import Footer from './footer';
import Navigator from './navigator';

import styles from '@/styles/pageWrapper.module.scss';

export default function PageWrapper({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<div className={styles.container}>
				<Navigator />
				<div className={styles.spacer}></div>
				<Footer />
			</div>
		</>
	);
}
