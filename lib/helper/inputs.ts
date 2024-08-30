export const workoutExerciseInputs = [
  {
    name: "manipulation",
    label: "Manipulation",
  },
  {
    name: "goal_weight",
    label: "Weight",
  },
  {
    name: "reps_to_do",
    label: "Reps",
  },
  {
    name: "sets_to_do",
    label: "Sets",
  },
];

export const registrationInputs = [
  {
    name: "email",
    label: "Email",
    label_he: "אימייל",
    type: "text",
  },
  {
    name: "phone",
    label: "Your Phone Number",
    label_he: "מספר הטלפון שלך",
    type: "number",
  },
  {
    name: "age",
    label: "Age",
    label_he: "גיל",
    type: "number",
  },
  {
    name: "height",
    label: "Height",
    label_he: "גובה",
    type: "number",
  },
  {
    name: "weight",
    label: "Current Weight (Approximate if unknown)",
    label_he: "משקל נוכחי (משוער אם לא ידוע)",
    type: "number",
  },
  {
    name: "highest_weight",
    label: "Highest weight you've had in your life (Optional to write)",
    label_he: "המשקל הגבוה ביותר שהיה לך בחיים (אופציונלי לכתוב)",
    type: "number",
  },
  {
    name: "training_years",
    label: "How many years have you been training?",
    label_he: "כמה שנים אתה מתאמן?",
    type: "number",
  },
  {
    name: "training_frequency",
    label:
      "How many times per week would you prefer to train? 1, 2, 3, 4, 5, 6, 7",
    label_he: "כמה פעמים בשבוע אתה מעדיף להתאמן? 1, 2, 3, 4, 5, 6, 7",
    type: "select",
    options: [
      { value: "1", label: "1" },
      { value: "2", label: "2" },
      { value: "3", label: "3" },
      { value: "4", label: "4" },
      { value: "5", label: "5" },
      { value: "6", label: "6" },
      { value: "7", label: "7" },
    ],
  },
  {
    name: "preferred_training_location",
    label: "Where do you prefer to train? Gym, At home",
    label_he: "איפה אתה מעדיף להתאמן? חדר כושר, בבית",
    type: "text",
  },
  {
    name: "home_equipment",
    label:
      "If you chose home, what equipment do you have? For example, bands, TRX straps, weights, pull-up bar, weight bench, or none at all?",
    label_he:
      "אם בחרת בבית, איזה ציוד יש לך? למשל, רצועות, רצועות TRX, משקולות, מוט משוך, ספסל משקולות, או בכלל?",
    type: "text",
  },
  {
    name: "desired_equipment",
    label:
      "If you chose home, what equipment would you like to purchase from the list you don't currently have (Recommended: TRX or small weight set)?",
    label_he:
      "אם בחרתם בבית, איזה ציוד תרצו לרכוש מהרשימה שאין לכם כרגע (מומלץ: TRX או סט משקל קטן)?",
    type: "text",
  },
  {
    name: "strength_training_description",
    label: `Describe your current strength training (what exercises you do, repetitions, frequencies, etc.): If not doing, write "not doing."`,
    label_he: `תאר את אימוני הכוח הנוכחיים שלך (אילו תרגילים אתה עושה, חזרות, תדרים וכו'): אם לא עושה, כתוב "לא עושה.`,
    type: "textarea",
  },
  {
    name: "favorite_cardio",
    label:
      "What are your favorite exercises? If you don't know, write `don't know.`",
    label_he: "מהם התרגילים האהובים עליך? אם אתה לא יודע, כתוב `לא יודע.`",
    type: "text",
  },
  {
    name: "preferred_focus_areas",
    label:
      "Which areas would you prefer to focus on more in your personal training program? Chest, arms, back, legs, glute emphasis, shoulders, abs, etc. You can also write the whole body equally or specify certain preferred areas.",
    label_he:
      "באילו תחומים תעדיף להתמקד יותר בתוכנית האימונים האישית שלך? חזה, ידיים, גב, רגליים, הדגשת גלוטה, כתפיים, שרירי בטן וכו'. ניתן גם לכתוב את כל הגוף באופן שווה או לציין אזורים מועדפים מסוימים.",
    type: "text",
  },
  {
    name: "injuries",
    label: "Injuries",
    label_he: "פציעות",
    type: "text",
  },
  {
    name: "favorite_foods",
    label: "What are your favorite foods?",
    label_he: "מהם המאכלים האהובים עליך?",
    type: "text",
  },
  {
    name: "disliked_foods",
    label: "What foods will you not touch?",
    label_he: "באילו מאכלים לא תיגע?",
    type: "text",
  },
  {
    name: "food_tracking_method",
    label:
      "Do you track your food intake? If yes, do you use an app or a written menu?",
    label_he:
      "האם אתה עוקב אחר צריכת המזון שלך? אם כן, האם אתה משתמש באפליקציה או בתפריט כתוב?",
    type: "text",
  },
  {
    name: "past_diets",
    label: "Have you done diets in the past? Were they successful?",
    label_he: "האם עשית דיאטות בעבר? האם הם הצליחו?",
    type: "text",
  },
  {
    name: "current_cardio_routine",
    label:
      "Describe a full day of your current nutrition, what a regular day looks like, what you eat when you wake up, lunch, dinner, snacks.",
    label_he:
      "תאר יום שלם של התזונה הנוכחית שלך, איך נראה יום רגיל, מה אתה אוכל כשאתה מתעורר, צהריים, ערב, חטיפים.",
    type: "text",
  },
  {
    name: "daily_nutrition",
    label: "Daily Nutrition",
    label_he: "תזונה יומית",
    type: "text",
  },
  {
    name: "weekend_nutrition",
    label:
      "And now, what does your weekend look like? If there's a special meal on Friday and Saturday, what does it usually include?",
    label_he:
      "ועכשיו, איך נראה סוף השבוע שלך? אם יש ארוחה מיוחדת בשישי ושבת, מה היא כוללת בדרך כלל?",
    type: "text",
  },
  {
    name: "favorite_recipes",
    label:
      "Do you have recipes you like to make frequently, say once a week? If yes, list all the ingredients and quantities and how many units result from each preparation (you can list several recipes).",
    label_he:
      "יש לך מתכונים שאתה אוהב להכין לעתים קרובות, נגיד פעם בשבוע? אם כן, רשום את כל המרכיבים והכמויות וכמה יחידות נובעות מכל הכנה (ניתן לרשום מספר מתכונים).",
    type: "textarea",
  },
  {
    name: "alcohol_consumption",
    label: "Do you drink alcohol? If yes, in what quantities and frequency?",
    label_he: "האם אתה שותה אלכוהול? אם כן, באיזה כמויות ותדירות?",
    type: "text",
  },
  {
    name: "medications",
    label:
      "Medications and prescriptions you are currently and have previously used?",
    label_he: "תרופות ומרשמים שאתה נמצא כעת והשתמשת בעבר?",
    type: "text",
  },
  {
    name: "sleep_hours",
    label: "How many hours do you sleep a day?",
    label_he: "כמה שעות אתה ישן ביום?",
    type: "number",
  },
  {
    name: "current_job",
    label: "What is your current job and work hours? (Is it a sedentary job?)",
    label_he: "מה העבודה הנוכחית ושעות העבודה שלך? (האם זו עבודה בישיבה?)",
    type: "text",
  },
  {
    name: "activity_level",
    label: "How active are you on an average day? (Movement-wise?)",
    label_he: "עד כמה אתה פעיל ביום ממוצע? (מבחינה תנועתית?)",
    type: "text",
  },
  {
    name: "sports_participation",
    label: "Are you currently participating in any sport?",
    label_he: "האם אתה עוסק כרגע בספורט כלשהו?",
    type: "text",
  },
  {
    name: "mirror_reflection",
    label: "When you look in the mirror, how do you feel?",
    type: "text",
    label_he: "כשאתה מסתכל במראה, איך אתה מרגיש?",
  },
  {
    name: "long_term_goals",
    label: "What are your long-term goals and why?",
    label_he: "מהן המטרות שלך לטווח ארוך ולמה?",
    type: "text",
  },
  {
    name: "motivation_level",
    label: "What is your level of motivation to achieve your goal?",
    label_he: "מהי רמת המוטיבציה שלך להשיג את המטרה שלך?",
    type: "text",
  },
  {
    name: "commitment_declaration",
    label:
      "Do you commit to declaring and being transparent about any use of prohibited substances before starting and during the collaboration? This refers to substances like anabolic steroids, etc.",
    label_he:
      "האם אתה מתחייב להצהיר ולשקוף לגבי כל שימוש בחומרים אסורים לפני תחילת שיתוף הפעולה ובמהלכו? זה מתייחס לחומרים כמו סטרואידים אנבוליים וכו'.",
    type: "text",
  },
  {
    name: "additional_notes",
    label: "Anything else you would like to add?",
    label_he: "עוד משהו שתרצה להוסיף?",
    type: "text",
  },
  {
    name: "mailing_accepted",
    label: "Mailing Accepted",
    label_he: "דיוור מתקבל",
    type: "checkbox",
  },
  {
    name: "terms_accepted",
    label: "Terms & Conditions Accepted",
    label_he: "התנאים וההגבלות מקובלים",
    type: "checkbox",
    linkURL: "Assets/Terms_and_conditions.pdf",
  },
];

export const healthDeclarationInputs = [
  {
    name: "place_of_residence",
    label: "Place of Residence",
    label_he: "מקום מגורים",
    type: "text",
  },
  {
    name: "id_number",
    label: "ID Number",
    label_he: "מספר תעודת זהות",
    type: "number",
  },
  {
    name: "full_name",
    label: "Full Name",
    label_he: "שם מלא",
    type: "text",
  },
  {
    name: "phone",
    label: "Phone",
    label_he: "טלפון",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    label_he: "אימייל",
    type: "text",
  },
  {
    name: "dob",
    label: "Year of Birth",
    label_he: "שנת לידה",
    type: "date",
  },
  {
    name: "height",
    label: "Height",
    label_he: "גובה",
    type: "number",
  },
  {
    name: "weight",
    label: "Weight",
    label_he: "משקל",
    type: "number",
  },
  {
    name: "date",
    label: "Date",
    label_he: "תאריך",
    type: "date",
  },
  {
    name: "regular_medications",
    label: "Do you take medications on a regular basis?",
    label_he: "אם אתה נוטל תרופות על בסיס קבוע?",
    type: "text",
  },
  {
    name: "physical_activity",
    label: "Do you engage in physical activity?",
    label_he: "האם אתה עוסק בפעילות גופנית?",
    type: "text",
  },
  {
    name: "suffered_from",
    label: "Do you suffer or have you ever suffered from the following",
    label_he: "האם אתה סובל או סבלת בעבר מאחד מהבאים",
    type: "text",
  },
  {
    name: "avoid_physical_activity",
    label:
      "Is there a recommendation from a doctor to avoid physical activity?",
    label_he: "האם יש המלצה מרופא להימנע מפעילות גופנית?",
    type: "text",
  },
  {
    name: "home_equipment",
    label: "Do you have any home Equipment",
    label_he: "האם יש לך ציוד לבית",
    type: "text",
  },
  {
    name: "surgery_past_year",
    label: "Have you had surgery in the past year?",
    label_he: "האם עברת ניתוח בשנה האחרונה?",
    type: "text",
  },
  {
    name: "pregnancy_status",
    label:
      "Are you currently pregnant, recently pregnant, or planning to become pregnant soon? (Please specify below)",
    label_he:
      "האם את בהריון, לאחרונה בהריון או מתכננת להיכנס להריון בקרוב? (נא לציין למטה",
    type: "text",
  },
  {
    name: "lung_diseases",
    label: "Do you have lung diseases or breathing difficulties?",
    label_he: "האם יש לך מחלות ריאה או קשיי נשימה?",
    type: "text",
  },
  {
    name: "neck_problems",
    label: "Do you have lower back and/or neck problems?",
    label_he: "האם יש לך בעיות בגב התחתון ו/או בצוואר?",
    type: "text",
  },
  {
    name: "muscle _problems",
    label: "Do you experience muscle pain or joint problems?",
    label_he: "האם אתה חווה כאבי שרירים או בעיות במפרקים?",
    type: "text",
  },
  {
    name: "thyroid_problems",
    label: "Do you have diabetes or thyroid problems?",
    label_he: "האם יש לך סוכרת או בעיות בבלוטת התריס?",
    type: "text",
  },
  {
    name: "smoke_cigarettes",
    label: "Do you smoke cigarettes?",
    label_he: "האם אתה מעשן סיגריות?",
    type: "text",
  },
  {
    name: "cholesterol_level",
    label: "Do you have high cholesterol or high blood lipid levels?",
    label_he: "האם יש לך כולסטרול גבוה או רמות שומנים גבוהות בדם?",
    type: "text",
  },
  {
    name: "obesity",
    label: "Do you have obesity?",
    label_he: "האם אתה סובל מהשמנה?",
    type: "text",
  },
  {
    name: "family_heart_problems_history",
    label: "Is there a family history of heart problems (father under 55)?",
    label_he: "האם יש היסטוריה משפחתית של בעיות לב (אבא מתחת לגיל 55)?",
    type: "text",
  },
  {
    name: "worsen_lifting_weights",
    label:
      "Do you have a hernia or other condition that may worsen from lifting weights?",
    label_he: "האם יש לך בקע או מצב אחר שעלול להחמיר מהרמת משקולות?",
    type: "text",
  },
  {
    name: "diet",
    label: "Are you on a strict diet (below 1200 calories a day)?",
    label_he: "האם אתה בדיאטה קפדנית (מתחת ל-1200 קלוריות ביום)?",
    type: "text",
  },
  {
    name: "epilepsy",
    label: "Do you have epilepsy?",
    label_he: "האם יש לך אפילפסיה?",
    type: "text",
  },
  {
    name: "additional_comments",
    label:
      "Additional comments or details you would like to mention (Please specify below)",
    label_he: "הערות או פרטים נוספים שתרצה לציין (אנא ציין למטה)",
    type: "textarea",
  },
  {
    name: "fat_burners",
    label:
      "Have you used or are you using steroids, fat burners, etc.? (Please specify below) (Confidential)",
    label_he:
      "האם השתמשת או אתה משתמש בסטרואידים, שורפי שומן וכו'? (נא לציין למטה) (סודי)",
    type: "text",
  },
];
