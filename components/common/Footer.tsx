import { useTranslations } from 'next-intl';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa6';

const Footer = () => {
	const t = useTranslations('footer');
	return (
		<footer className="bg-secondary text-white">
			<div className="container flex items-center justify-between flex-col xl:flex-row  py-[20px] gap-2 text-[12px] sm:text-[14px] xl:text-[16px]">
				<ul className="quick-links flex items-center gap-2">
					<li>
						<a href="/">{t('privacyPolicy')}</a>
					</li>
					<li className="border-r border-white h-[16px] xl:h-[20px]"></li>
					<li>
						<a href="/">{t('termsOfService')}</a>
					</li>
				</ul>
				<div className="social-link items-center flex gap-2">
					<strong>{t('followUs')}</strong>
					<ul className="flex items-center gap-2">
						<li>
							<a
								href="https://facebook.com/"
								target="_blank"
								rel="noreferrer"
							>
								<FaFacebook />
							</a>
						</li>
						<li>
							<a
								href="https://www.instagram.com/"
								target="_blank"
								rel="noreferrer"
							>
								<FaInstagram />
							</a>
						</li>
						<li>
							<a
								href="www.tiktok.com/"
								target="_blank"
								rel="noreferrer"
							>
								<FaTiktok />
							</a>
						</li>
					</ul>
				</div>
				<p>© {t('copyRightMessage')}</p>
			</div>
		</footer>
	);
};

export default Footer;
