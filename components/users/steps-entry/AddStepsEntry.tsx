import React from "react";
import StepsEntryForm from "./StepsEntryForm";

const AddStepsEntry = ({ taskId }: { taskId: string }) => {
  return (
    <div>
      <h3 className="section-title text-right mb-4">Number Of Steps</h3>
      <StepsEntryForm taskId={taskId} />
    </div>
  );
};

export default AddStepsEntry;
