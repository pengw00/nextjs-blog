import Head from 'next/head';
import Header from './header';
import Footer from './footer';

const Layout = ({ home, _title, children }) => {
	return (
		<div>
			<Header />
			<Head>
				<title>{_title}</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div>
				<main>
					<div id="content">
						{children}
					</div>
				</main>
			</div>
			<Footer />
		</div>
	)
}