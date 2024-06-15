import Footer from '../common/Footer';
import Navbar from '../common/Navbar';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<main className="dashboard">
			<Navbar />
			<div className="container text-white py-[20px] xl:py-[40px]">
				{children}
			</div>
			<Footer />
		</main>
	);
};

export default DashboardLayout;
