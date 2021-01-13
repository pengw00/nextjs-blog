import Link from 'next/link';
import styles from './header.module.css';

const Header = ({ home }) => {
	return (
			<div className={styles.header}>
				<div className={styles.container}>
					<div className={styles.navItem}>
						Home
					</div>
					<div className="nav-item">
						Posts
					</div>
					<div className="nav-item">
						Profile
					</div>
					<div className="nav-item">
						Setting
					</div>
				</div>
			</div>
	);
}

export default Header;