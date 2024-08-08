import {
  generateDataFromServer,
  nextProperties,
} from "@/lib/helper/server-fetch";
import Link from "next/link";
import BasicButton from "../common/BasicButton";
import Course from "./Course";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

const Courses = async () => {
  const courses = await generateDataFromServer("courses", nextProperties(0));
  const t = await getTranslations("courses");
  const courseHeading = t.raw("coursesHeader");
  return (
    <section className="course-area">
      <h3 className="section-title text-right">{courseHeading.label}</h3>
      <h4 className="semi-section-title text-right">
        {t("coursesHeader.heading")}
      </h4>
      <p className="course-info">{courseHeading.content}</p>
      <BasicButton>
        <Link href="">{courseHeading.joinBtn}</Link>
      </BasicButton>
      <div className="courses">
        {[{}, {}, {}, {}, {}, {}].map((course: any, index: number) => (
          <Course course={course} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Courses;
