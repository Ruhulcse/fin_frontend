import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa6';

const Footer = () => {
	return (
		<footer className="bg-secondary text-white">
			<div className="container flex items-center justify-between flex-col xl:flex-row  py-[20px] gap-2 text-[12px] sm:text-[14px] xl:text-[16px]">
				<ul className="quick-links flex items-center gap-2">
					<li>
						<a href="/">Privacy Policy</a>
					</li>
					<li className="border-r border-white h-[16px] xl:h-[20px]"></li>
					<li>
						<a href="/">Terms of Service</a>
					</li>
				</ul>
				<div className="social-link items-center flex gap-2">
					<strong>Follow Us</strong>
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
				<p>© 2024 FITAL by Tal Mualem. All rights reserved.</p>
			</div>
		</footer>
	);
};

export default Footer;
