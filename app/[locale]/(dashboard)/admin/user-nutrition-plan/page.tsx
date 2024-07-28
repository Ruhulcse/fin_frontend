import UserNutritionPlan from '@/components/admin/user-nutrition-plan/UserNutritionPlan';

const Page = ({ searchParams }: { searchParams: any }) => {
	return <UserNutritionPlan traineeId={searchParams?.trainee_id} />;
};

export default Page;
