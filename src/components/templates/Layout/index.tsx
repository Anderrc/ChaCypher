import { Outlet } from 'react-router-dom';
import github from '../../../assets/icons8-github-48.png';
import linkedin from '../../../assets/icons8-linkedin-48.png';
import logo from '../../../assets/logo.jpg';
import styles from './layout.module.scss';

export const Layout = () => {
	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<nav>
					<div className={styles.logo}>
						<img
							src={logo}
							width={100}
							height={100}
							alt='logo-chaCypher'
						/>
					</div>
				</nav>
			</header>

			<main className={styles.container_principal}>
				<Outlet />
			</main>

			<footer className={styles.footer}>
				<div className={styles.footer_container}>
					<span className=''>
						Develop by <b>Anderson Castaño</b>
					</span>
					<a
						href='https://www.linkedin.com/in/andercc/'
						target='_blank'
						rel='noopener noreferrer'
						className=''>
						<img src={linkedin} alt='Logo linkedin' className='' />
					</a>

					<a
						href='https://github.com/Anderrc'
						target='_blank'
						rel='noopener noreferrer'
						className=''>
						<img src={github} alt='Logo github' className='' />
					</a>
				</div>
			</footer>
		</div>
	);
};
