import {
  generateDataFromServer,
  nextProperties,
} from "@/lib/helper/server-fetch";
import Link from "next/link";
import BasicButton from "../common/BasicButton";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Course from "./Course";

const Courses = async () => {
  const courses = await generateDataFromServer("courses", nextProperties(0));
  const t = await getTranslations("courses");
  const courseHeading = t.raw("coursesHeader");
  
  
  return (
    <section className="course-area">
    <div className="flex flex-col items-end ">
    <h3 className="section-title text-right">{courseHeading.label}</h3>
      <h4 className="semi-section-title text-right">
        {t("coursesHeader.heading")}
      </h4>
      <p className="course-info">{courseHeading.content}</p>
      <BasicButton>
        <Link href="/courses/list">{courseHeading.joinBtn}</Link>
      </BasicButton>
    </div>
    
    </section>
  );
};

export default Courses;
