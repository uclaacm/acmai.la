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
					<div className={styles.pageTwoContainer}>
						<h1 className={styles.bigText}>Learn about AI!</h1>
					</div>
				</div>
			</div>

			{/* page three */}
			<div className={styles.stackContainer}>
				<div className={styles.windowContainer}>
					<div className={styles.pageThreeContainer}>
						<h1 className={styles.bigText}>
							Build your own models from scratch!
						</h1>
					</div>
				</div>
			</div>

			{/* page four */}
			<div className={styles.stackContainer}>
				<div className={styles.windowContainer}>
					<div className={styles.pageFourContainer}>
						<h1 className={styles.bigText}>Join Projects!</h1>
					</div>
				</div>
			</div>

			{/* triangle page */}
			<div className={styles.triangleContainer}>
				<div className={styles.triangleContent}>
					<h1 className={styles.triangleTitle}>Who We Are</h1>
					<p className={styles.triangleText}>
						maxine wu (she/her) — 04/12/2024 1:06 PM @everyone Hope everyone is
						having a wonderful Friday :) Quick reminder that AI Spring 2024
						Officer Apps are due tonight 11:59pm:
						https://tinyurl.com/spr24aiofficerapps :) We strongly encourage you
						to apply if you are passionate about the ACM AI community and want
						to become more involved; feel free to ask any of the ACM AI officers
						if you have any questions. Plug to also apply for AI Spring 2024
						Project Applications if you are at all interested, and feel free to
						ask in ⁠🧠projects-general : https://bit.ly/proj_app :)
					</p>
				</div>
			</div>
		</>
	);
}
