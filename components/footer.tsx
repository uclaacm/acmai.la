import styles from "@/styles/footer.module.scss";

export default function Footer() {
	return (
		<>
			<div className={styles.footerContainer}>
				<div className={styles.socialContainer}>
					<p className={styles.socialText}> FIND US ON SOCIAL MEDIA </p>
					<div className={styles.socialIconContainer}>
						<a
							href="https://discord.com/invite/QcU9AVW9hm"
							target="_blank"
							className={styles.discordLink}>
							<svg className={styles.discordIcon}>
								<use href="sprites.svg#discordIcon" />
							</svg>
						</a>

						<a
							href="https://www.instagram.com/acm.ai.ucla/"
							target="_blank"
							className={styles.socialLinks}>
							<svg className={styles.socialIcons}>
								<use href="sprites.svg#instagramIcon" />
							</svg>
						</a>

						<a
							href="https://open.spotify.com/show/13gJahs83FHFBnRpexBWrW"
							target="_blank"
							className={styles.socialLinks}>
							<svg className={styles.socialIcons}>
								<use href="sprites.svg#spotifyIcon" />
							</svg>
						</a>

						<a
							href="https://www.facebook.com/groups/uclaacmai/"
							target="_blank"
							className={styles.socialLinks}>
							<svg className={styles.socialIcons}>
								<use href="sprites.svg#facebookIcon" />
							</svg>
						</a>

						<a
							href="mailto:ucla.acm.ai@gmail.com"
							target="_blank"
							className={styles.socialLinks}>
							<svg className={styles.gmailIcon}>
								<use href="sprites.svg#gmailIcon" />
							</svg>
						</a>
					</div>
				</div>
			</div>
		</>
	);
}
