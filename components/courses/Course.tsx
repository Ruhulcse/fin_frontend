"use client";
import courseImg from "@/assets/images/course-gym.png";
import Image from "next/image";
import { useState } from "react";
import ModalVideo from "../common/ModalVideo";
import PlayButton from "../common/PlayButton";
import { useTranslations } from "next-intl";
const Course = ({ course }: { course: any }) => {
  const [open, setOpen] = useState(false);
  const t = useTranslations("courses");
  const courseData = t.raw("course");
  const closeModal = () => {
    setOpen(false);
  };
  return (
    <div className="course">
      <h4 className="semi-section-title text-right">
        {course?.title ?? courseData.title}
      </h4>
      <p className="course-info">
        {course?.description ?? courseData.description}
      </p>
      <div className="course-img">
        <div className="abs-center">
          <PlayButton onClick={() => setOpen(true)} />
        </div>
        <Image src={courseImg} alt="course" className="w-full rounded" />
      </div>
      <ModalVideo closeModal={closeModal} open={open} />
    </div>
  );
};

export default Course;
