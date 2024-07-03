export const workoutExerciseInputs = [
	{
		name: 'manipulation',
		label: 'Manipulation',
	},
	{
		name: 'goal_weight',
		label: 'Weight',
	},
	{
		name: 'reps_to_do',
		label: 'Reps',
	},
	{
		name: 'sets_to_do',
		label: 'Sets',
	},
];

export const registrationInputs = [
	{
		name: 'phone',
		label: 'Your Phone Number',
		type: 'number',
	},
	{
		name: 'age',
		label: 'Age',
		type: 'number',
	},
	{
		name: 'height',
		label: 'Height',
		type: 'number',
	},
	{
		name: 'weight',
		label: 'Current Weight (Approximate if unknown)',
		type: 'number',
	},
	{
		name: 'highest_weight',
		label: "Highest weight you've had in your life (Optional to write)",
		type: 'number',
	},
	{
		name: 'training_years',
		label: 'How many years have you been training?',
		type: 'number',
	},
	{
		name: 'training_frequency',
		label:
			'How many times per week would you prefer to train? 1, 2, 3, 4, 5, 6, 7',
		type: 'number',
	},
	{
		name: 'preferred_training_location',
		label: 'Where do you prefer to train? Gym, At home',
		type: 'text',
	},
	{
		name: 'home_equipment',
		label:
			'If you chose home, what equipment do you have? For example, bands, TRX straps, weights, pull-up bar, weight bench, or none at all?',
		type: 'text',
	},
	{
		name: 'desired_equipment',
		label:
			"If you chose home, what equipment would you like to purchase from the list you don't currently have (Recommended: TRX or small weight set)?",
		type: 'text',
	},
	{
		name: 'strength_training_description',
		label: `Describe your current strength training (what exercises you do, repetitions, frequencies, etc.): If not doing, write "not doing."`,
		type: 'text',
	},
	{
		name: 'favorite_cardio',
		label:
			"What are your favorite exercises? If you don't know, write `don't know.`",
		type: 'text',
	},
	{
		name: 'preferred_focus_areas',
		label:
			'Which areas would you prefer to focus on more in your personal training program? Chest, arms, back, legs, glute emphasis, shoulders, abs, etc. You can also write the whole body equally or specify certain preferred areas.',
		type: 'text',
	},
	{
		name: 'injuries',
		label: 'Injuries',
		type: 'text',
	},
	{
		name: 'favorite_foods',
		label: 'What are your favorite foods?',
		type: 'text',
	},
	{
		name: 'disliked_foods',
		label: 'What foods will you not touch?',
		type: 'text',
	},
	{
		name: 'food_tracking_method',
		label:
			'Do you track your food intake? If yes, do you use an app or a written menu?',
		type: 'text',
	},
	{
		name: 'past_diets',
		label: 'Have you done diets in the past? Were they successful?',
		type: 'text',
	},
	{
		name: 'current_cardio_routine',
		label:
			'Describe a full day of your current nutrition, what a regular day looks like, what you eat when you wake up, lunch, dinner, snacks.',
		type: 'text',
	},
	{
		name: 'daily_nutrition',
		label: 'Daily Nutrition',
		type: 'text',
	},
	{
		name: 'weekend_nutrition',
		label:
			"And now, what does your weekend look like? If there's a special meal on Friday and Saturday, what does it usually include?",
		type: 'text',
	},
	{
		name: 'favorite_recipes',
		label:
			'Do you have recipes you like to make frequently, say once a week? If yes, list all the ingredients and quantities and how many units result from each preparation (you can list several recipes).',
		type: 'text',
	},
	{
		name: 'alcohol_consumption',
		label: 'Do you drink alcohol? If yes, in what quantities and frequency?',
		type: 'text',
	},
	{
		name: 'medications',
		label:
			'Medications and prescriptions you are currently and have previously used?',
		type: 'text',
	},
	{
		name: 'sleep_hours',
		label: 'How many hours do you sleep a day?',
		type: 'number',
	},
	{
		name: 'current_job',
		label: 'What is your current job and work hours? (Is it a sedentary job?)',
		type: 'text',
	},
	{
		name: 'activity_level',
		label: 'How active are you on an average day? (Movement-wise?)',
		type: 'text',
	},
	{
		name: 'sports_participation',
		label: 'Are you currently participating in any sport?',
		type: 'text',
	},
	{
		name: 'mirror_reflection',
		label: 'When you look in the mirror, how do you feel?',
		type: 'text',
	},
	{
		name: 'long_term_goals',
		label: 'What are your long-term goals and why?',
		type: 'text',
	},
	{
		name: 'motivation_level',
		label: 'What is your level of motivation to achieve your goal?',
		type: 'text',
	},
	{
		name: 'commitment_declaration',
		label:
			'Do you commit to declaring and being transparent about any use of prohibited substances before starting and during the collaboration? This refers to substances like anabolic steroids, etc.',
		type: 'text',
	},
	{
		name: 'additional_notes',
		label: 'Anything else you would like to add?',
		type: 'text',
	},
	// {
	// 	name: 'mailing_accepted',
	// 	label: 'Mailing Accepted',
	// 	type: 'checkbox',
	// },
];

export const healthDeclarationInputs = [
	{
		name: 'place_of_residence',
		label: 'Place of Residence',
		type: 'text',
	},
	{
		name: 'id_number',
		label: 'ID Number',
		type: 'text',
	},
	{
		name: 'full_name',
		label: 'Full Name',
		type: 'text',
	},
	{
		name: 'phone',
		label: 'Phone',
		type: 'text',
	},
	{
		name: 'email',
		label: 'Email',
		type: 'text',
	},
	{
		name: 'dob',
		label: 'Year of Birth',
		type: 'date',
	},
	{
		name: 'height',
		label: 'Height',
		type: 'number',
	},
	{
		name: 'weight',
		label: 'Weight',
		type: 'number',
	},
	{
		name: 'date',
		label: 'Date',
		type: 'date',
	},
	{
		name: 'regular_medications',
		label: 'Do you take medications on a regular basis?',
		type: 'text',
	},
	{
		name: 'physical_activity',
		label: 'Do you engage in physical activity?',
		type: 'text',
	},
	{
		name: 'suffered_from',
		label: 'Do you suffer or have you ever suffered from the following',
		type: 'text',
	},
	{
		name: 'avoid_physical_activity',
		label:
			'Is there a recommendation from a doctor to avoid physical activity?',
		type: 'text',
	},
	{
		name: 'home_equipment',
		label: 'Do you have any home Equipment',
		type: 'text',
	},
	{
		name: 'surgery_past_year',
		label: 'Have you had surgery in the past year?',
		type: 'text',
	},
	{
		name: 'pregnancy_status',
		label:
			'Are you currently pregnant, recently pregnant, or planning to become pregnant soon? (Please specify below)',
		type: 'text',
	},
	{
		name: 'lung_diseases',
		label: 'Do you have lung diseases or breathing difficulties?',
		type: 'text',
	},
	{
		name: 'neck_problems',
		label: 'Do you have lower back and/or neck problems?',
		type: 'text',
	},
	{
		name: 'muscle _problems',
		label: 'Do you experience muscle pain or joint problems?',
		type: 'text',
	},
	{
		name: 'thyroid_problems',
		label: 'Do you have diabetes or thyroid problems?',
		type: 'text',
	},
	{
		name: 'smoke_cigarettes',
		label: 'Do you smoke cigarettes?',
		type: 'text',
	},
	{
		name: 'cholesterol_level',
		label: 'Do you have high cholesterol or high blood lipid levels?',
		type: 'text',
	},
	{
		name: 'obesity',
		label: 'Do you have obesity?',
		type: 'text',
	},
	{
		name: 'family_heart_problems_history',
		label: 'Is there a family history of heart problems (father under 55)?',
		type: 'text',
	},
	{
		name: 'worsen_lifting_weights',
		label:
			'Do you have a hernia or other condition that may worsen from lifting weights?',
		type: 'text',
	},
	{
		name: 'diet',
		label: 'Are you on a strict diet (below 1200 calories a day)?',
		type: 'text',
	},
	{
		name: 'epilepsy',
		label: 'Do you have epilepsy?',
		type: 'text',
	},
	{
		name: 'additional_comments',
		label:
			'Additional comments or details you would like to mention (Please specify below)',
		type: 'text',
	},
	{
		name: 'fat_burners',
		label:
			'Have you used or are you using steroids, fat burners, etc.? (Please specify below) (Confidential)',
		type: 'text',
	},
	{
		name: 'terms_accepted',
		label: 'Terms Accepted',
		type: 'checkbox',
	},
];
