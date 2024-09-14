"use client";
import { toQueryString } from "@/lib/helper/common";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import SearchInput from "../common/input/SearchInput";
import SelectInput from "../common/input/SelectInput";

const ExerciseFilter = ({ searchParams }: { searchParams: any }) => {
  const [inputs, setInputs] = useState<any>({});
  const router = useRouter();
  const t = useTranslations("exerciseLibrary");
  const exercise = t.raw("exercise");
  const exerciseSelect = t.raw("exerciseSelect");
  let timeout: any;
  const stateChangeHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      const { name, value } = e.target;
      setInputs((prev: any) => ({ ...prev, [name]: value }));
      router.push(
        `/exercise-library${toQueryString({ ...inputs, [name]: value })}`
      );
    }, 500);
  };

  const findAll = () => {
    setInputs({ search: searchParams?.search ?? "" });
    router.push(
      `/exercise-library${toQueryString({
        search: searchParams?.search ?? "",
      })}`
    );
  };
  const equipmentOptions = [
    { value: "No equipment", label: exerciseSelect.noEquipment },
    { value: "TRX", label: exerciseSelect.trx },
    { value: "Bands", label: exerciseSelect.bands },
    { value: "Weights", label: exerciseSelect.weights },
    { value: "Machines", label: exerciseSelect.machines },
    { value: "Bars", label: exerciseSelect.bars },
  ];
  const areaOptions = [
    { value: "armr", label: exerciseSelect.armRight },
    { value: "arml", label: exerciseSelect.armLeft },
    { value: "thighr", label: exerciseSelect.thighR },
    { value: "thighl", label: exerciseSelect.thighL },
    { value: "waist", label: exerciseSelect.waist },
    { value: "chest", label: exerciseSelect.chest },
  ];

  return (
    <section className="grid gap-2 xl:gap-4 place-items-end mb-4 xl:mb-6">
      <h3 className="section-title text-right mb-4 xl:mb-8">
        {exercise.exerciseList}
      </h3>
      <SearchInput
        changeHandler={stateChangeHandler}
        name="search"
        defaultValue={searchParams?.search}
      />
      <div className="w-full select-exercise grid grid-cols-[repeat(3,1fr)] xl:grid-cols-[repeat(3,max-content)] place-content-end gap-2 xl:gap-4">
        <button
          className={cn(
            "bg-card text-textPrimary rounded-full px-6 py-1 outline-none"
          )}
          onClick={findAll}
        >
          {exercise.all}
        </button>
        <SelectInput
          changeHandler={stateChangeHandler}
          name="equipment"
          options={equipmentOptions}
          placeholder={exercise.selectEquipment}
          defaultValue={searchParams?.equipment ?? ""}
        />
        <SelectInput
          changeHandler={stateChangeHandler}
          name="area"
          options={areaOptions}
          placeholder={exercise.selectArea}
          defaultValue={searchParams?.area ?? ""}
        />
      </div>
    </section>
  );
};

export default ExerciseFilter;
