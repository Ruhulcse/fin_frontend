'use client';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import NutritionPlanForm from '../nutrition-plan/NutritionPlanForm';
import UserNutritionPlanForm from './UserNutritionPlanForm';

const UserNutritionTab = ({
	plans,
	existingPlans,
	traineeId,
	nutrition,
}: {
	plans: any;
	existingPlans: any;
	traineeId: string;
	nutrition?: any;
}) => {
	const [activeTab, setActiveTab] = useState(1);
	return (
		<>
			<div className="tab flex items-center justify-end gap-2 mb-4">
				<button
					className={cn(
						'bg-card text-textPrimary rounded-full px-6 py-1 outline-none',
						activeTab === 1 && 'bg-secondary text-white'
					)}
					onClick={() => setActiveTab(1)}
				>
					{nutrition.createAssign}
				</button>
				<button
					className={cn(
						'bg-card text-textPrimary rounded-full px-6 py-1 outline-none',
						activeTab === 2 && 'bg-secondary text-white'
					)}
					onClick={() => setActiveTab(2)}
				>
					{nutrition.assignExisting}
				</button>
			</div>
			{activeTab === 1 ? (
				<NutritionPlanForm
					userId={traineeId}
					nutritionForm={nutrition}
				/>
			) : activeTab === 2 ? (
				<UserNutritionPlanForm
					traineeId={traineeId}
					plans={plans}
					existingPlans={existingPlans}
					nutritionForm={nutrition}
				/>
			) : null}
		</>
	);
};

export default UserNutritionTab;
