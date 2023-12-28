import Link from "next/link";
import styles from "@/styles/navigator.module.scss";
import { MouseEventHandler } from "react";
import React, { useState } from "react";

export default function Navigator() {
	const [menuIsToggled, setMenuIsToggled] = useState<boolean>(false);

	let toggleAnimation: MouseEventHandler = (event) => {
		let bar1 = document.getElementById("bar1");
		let bar2 = document.getElementById("bar2");
		let bar3 = document.getElementById("bar3");
		let dropDownMenu = document.getElementById("dropDownMenu");

		if (bar1! && bar2! && bar3! && dropDownMenu!) {
			if (menuIsToggled) {
				bar1.className = styles.closeBar1;
				bar2.className = styles.closeBar2;
				bar3.className = styles.closeBar3;
				dropDownMenu.className = styles.dropDownMenuInvisible;
			} else {
				bar1.className = styles.openBar1;
				bar2.className = styles.openBar2;
				bar3.className = styles.openBar3;
				dropDownMenu.className = styles.dropDownMenuVisible;
			}
			setMenuIsToggled(!menuIsToggled);
		}
	};

	let basicLinks = (
		<>
			<Link href="/about" className={styles.linkText} onClick={toggleAnimation}>
				ABOUT
			</Link>
			<Link
				href="/events"
				className={styles.linkText}
				onClick={toggleAnimation}>
				EVENTS
			</Link>
			<Link href="/blog" className={styles.linkText} onClick={toggleAnimation}>
				BLOG
			</Link>
		</>
	);

	return (
		<>
			<div className={styles.navigationContainer}>
				<div className={styles.headerContainer}>
					<Link href="/" className={styles.homeLink}>
						<span className={styles.aiIcon} />
						<p className={styles.acmText}>acm.</p>
						<p className={styles.aiText}>ai</p>
					</Link>

					<div className={styles.dropDownIcon} onClick={toggleAnimation}>
						<div className={styles.bar1} id="bar1" />
						<div className={styles.bar2} id="bar2" />
						<div className={styles.bar3} id="bar3" />
					</div>

					<div className={styles.staticMenu}>
						{basicLinks}
						<Link href="/join" className={styles.linkText}>
							<button className={styles.joinButton}>JOIN US</button>
						</Link>
					</div>
				</div>

				<div className={styles.dropDownMenuInvisible} id="dropDownMenu">
					{basicLinks}
					<Link
						href="/join"
						className={styles.linkText}
						onClick={toggleAnimation}>
						JOIN US
					</Link>
				</div>
			</div>
		</>
	);
}
