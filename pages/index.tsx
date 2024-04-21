import styles from "@/styles/index.module.scss";

export default function Page() {
	return (
		<>
			{/* page one */}
			<div className={styles.stackContainer}>
				<div className={styles.windowContainer}>
					<div className={styles.welcomeContainer}>
						<div className={styles.diamondBackground}>
							<div className={styles.diamond}></div>
						</div>
						<div className={styles.welcomeTextContainer}>
							<h1>Welcome to</h1>
							<div className={styles.logoContainer}>
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
					</div>
				</div>
			</div>

			{/* page two */}
			<div className={styles.stackContainer}>
				<div className={styles.windowContainer}>
					<div className={styles.whatDoWeDo}>
						<p>hasdfjiasjfdiajsiofdjioi</p>
					</div>
				</div>
			</div>

			<div className={styles.stackContainer}>
				<div className={styles.windowContainer}>
					<div className={styles.next}>
						<p>hasdfjiasjfioi </p>
					</div>
				</div>
			</div>
		</>
	);
}
