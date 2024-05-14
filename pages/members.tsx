import styles from "@/styles/members.module.scss";
import MemberProfile from "@/components/memberProfile";
import MemberData from "@/public/members/image_meta_data.json";
import Metadata from "@/components/metadata";

export default function Members() {
	return (
		<>
			<Metadata title="Members" description="Check out our members!" />

			<div className={styles.content}>
				<h1 className={styles.title}>Members</h1>
				<div className={styles.profilesContainer}>
					{MemberData.map((member, index) => (
						<MemberProfile
							key={index}
							picture={"members/" + member.file_name + ".webp"}
							name={member.name}
							role={member.role}
							pronouns={member.pronouns}
							major={member.major}
						/>
					))}
				</div>
			</div>
		</>
	);
}
