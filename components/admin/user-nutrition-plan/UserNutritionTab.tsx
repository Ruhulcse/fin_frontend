'use client';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import NutritionPlanForm from '../nutrition-plan/NutritionPlanForm';
import UserNutritionPlanForm from './UserNutritionPlanForm';

const UserNutritionTab = ({
	plans,
	existingPlans,
	traineeId,
}: {
	plans: any;
	existingPlans: any;
	traineeId: string;
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
					Create And Assign
				</button>
				<button
					className={cn(
						'bg-card text-textPrimary rounded-full px-6 py-1 outline-none',
						activeTab === 2 && 'bg-secondary text-white'
					)}
					onClick={() => setActiveTab(2)}
				>
					Assign from Existing
				</button>
			</div>
			{activeTab === 1 ? (
				<NutritionPlanForm userId={traineeId} />
			) : activeTab === 2 ? (
				<UserNutritionPlanForm
					traineeId={traineeId}
					plans={plans}
					existingPlans={existingPlans}
				/>
			) : null}
		</>
	);
};

export default UserNutritionTab;
