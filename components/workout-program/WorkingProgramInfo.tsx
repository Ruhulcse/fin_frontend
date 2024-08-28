import { useTranslations } from "next-intl";
import Player from "../common/Player";

const WorkingProgramInfo = ({ workProgramDetails, currentExercise }: any) => {
  const t = useTranslations("workoutProgramm");
  const details = t.raw("workoutDetails");
  return (
    <section className="workout-program-info">
      <h3 className="section-title text-center">
        {currentExercise?.Exercise?.name}
      </h3>
      <Player
        autoplay={false}
        src={currentExercise?.Exercise?.video_url ?? null}
      />
      <div className="workout-description">
        {workProgramDetails?.workout_description ?? ""}
      </div>
      <h3 className="section-title text-right">{details?.instruction}</h3>
      <div>
        <h4 className="semi-section-title text-right">
          {details?.startingPosition}
        </h4>
        <div className="workout-description">
          <p>{details?.sit}</p>
          <p>{details?.hold}</p>
        </div>
      </div>
      <div>
        <h4 className="semi-section-title text-right">{details?.move}</h4>
        <div className="workout-description">
          <p>{details?.slowly}</p>
          <p>{details?.doReps}</p>
        </div>
      </div>
    </section>
  );
};

export default WorkingProgramInfo;
