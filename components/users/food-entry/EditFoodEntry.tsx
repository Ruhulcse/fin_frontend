import { generateDataFromServer } from "@/lib/helper/server-fetch";
import TodoForm from "./FoodEntryForm";
import { getTranslations } from "next-intl/server";

const EditFoodEntry = async ({ id }: { id: string }) => {
  const { data: fooEntry = {} } = await generateDataFromServer(
    `tracking/food-entry/${id}`
  );
  const t = await getTranslations("traineeDetails");
  const todo = t.raw("foodEntries");
  return (
    <section>
      <h3 className="section-title text-right">{todo.editTodo}</h3>
      <TodoForm fooEntry={fooEntry} />
    </section>
  );
};

export default EditFoodEntry;
