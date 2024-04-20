import styles from "@/styles/index.module.scss";

export default function Page() {
	return (
		<>
			<div className={styles.welcomeContainer}>
				<div className={styles.welcomeTextContainer}>
					<h1>Welcome to</h1>
					<div className={styles.logoContainer}>
						<span className={styles.aiIcon} />
						<p className={styles.acmText}>acm.</p>
						<p className={styles.aiText}>ai</p>
						<p className={styles.bangText}>!</p>
					</div>
					<h4>
						Leon puts the L in
						<br />
						Machine Leonrning
						<br />
						:)
					</h4>
				</div>
				<div className={styles.diamondBackground}>
					<div className={styles.diamond}></div>
				</div>
			</div>
		</>
	);
}
