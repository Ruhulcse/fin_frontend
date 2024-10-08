import DashboardLayout from '@/components/core/layout/DashboardLayout';

const Layout = ({ children }: { children: React.ReactNode }) => {
	return <DashboardLayout>{children}</DashboardLayout>;
};

export default Layout;
