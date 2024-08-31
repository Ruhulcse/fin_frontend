"use client";
import workoutImg from "@/assets/images/workout-lg.png";
import Image from "next/image";
import { useState } from "react";
import ModalVideo from "../common/ModalVideo";
import PlayButton from "../common/PlayButton";

const WorkingProgramInfoHeader = ({ img }: { img: string }) => {
  const [open, setOpen] = useState(false);
  const closeModal = () => {
    setOpen(false);
  };
  return (
    <>
      <ModalVideo closeModal={closeModal} open={open} />
      <div className="workout-hero-img">
        <Image
          src={img ?? workoutImg}
          alt="workout program"
          className="w-full rounded-lg"
        />
        <div className="abs-center">
          <PlayButton size="lg" onClick={() => setOpen(true)} />
        </div>
      </div>
    </>
  );
};

export default WorkingProgramInfoHeader;
