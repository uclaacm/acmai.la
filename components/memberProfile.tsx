import styles from "@/styles/memberProfile.module.scss";

export default function MemeberProfile({
	name,
	pronouns,
	role,
	major,
	picture = "logos/ai-logo-dark.svg",
}: {
	name: string;
	pronouns: string;
	role: string;
	major: string;
	picture?: string;
}) {
	return (
		<div className={styles.memberContainer}>
			<img src={picture} className={styles.picture} alt="member picture" />
			<h1 className={styles.name}>{name}</h1>
			<p className={styles.text}>{pronouns}</p>
			<p className={styles.text}>
				<em>{role}</em>
			</p>
			<p className={styles.text}>{major}</p>
		</div>
	);
}
