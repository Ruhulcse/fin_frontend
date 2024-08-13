import workoutProgramImg from "@/assets/images/workout.png";
import { authOptions } from "@/lib/auth-options";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import BasicButton from "../common/BasicButton";
import { useTranslations } from "next-intl";
const WorkingProgram = async ({ workoutProgram, userRole }: any) => {
  const t = useTranslations("workoutProgramm");
  const details = t.raw("workoutDetails");
  return (
    <div className="workout-program">
      {/* <Image
				src={workoutProgramImg}
				alt="workout program"
			/> */}
      <div className="workout-info">
        <h4 className="workout-program-title">
          {workoutProgram.workout_name ?? details.totalAttack}
        </h4>
        <div className="actions">
          <Link
            className="w-full"
            href={`/workout-program/view/${workoutProgram.workout_id}`}
          >
            <BasicButton extraClasses="!w-full border-[#FAEAEB] text-[#FAEAEB] bg-[#ffffff00]">
              {details.viewWorkout}
            </BasicButton>
          </Link>
          {userRole === "admin" ? null : (
            <Link
              className="w-full"
              href={`/workout-program/start/${workoutProgram.workout_id}`}
            >
              <BasicButton extraClasses="!w-full backdrop-blur-sm text-[#FAEAEB] bg-white/20">
                {details.startWorkout}
              </BasicButton>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkingProgram;
