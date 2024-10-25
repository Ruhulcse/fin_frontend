// "use client";
// import { useEffect, useState } from "react";

// const Progress = ({dailyStep}) => {
//     const [percent, setPercent] = useState(0);
//     const baseline=2800;
// // useEffect(() => {
// //     const fetchData=()=>{
// //         // const apiValue=1200;
// //         // const calculatedPercent=(apiValue/baseline)*100;
// //         setPercent(dailySte)
// //     }
// // fetchData();
  
// // }, []

//   return (
//     <div className="progressbar">
//         <div className="progressbarfill" style={{ width: "20px "}}>
//             {/* {percent.toFixed(2)} % */}
//             {dailyStep?.step_average}
//         </div>
//     </div>
//   )
// }

// export default Progress
"use client";
import { useEffect, useState } from "react";

const Progress = ({ dailyStep }) => {
  const [percent, setPercent] = useState(0);
  useEffect(() => {
      if (dailyStep && dailyStep.step_target > 0) {
          const calculatedPercent = (dailyStep.step_average / dailyStep.step_target) * 100;
          setPercent(calculatedPercent);
      }
  }, [dailyStep]);

    return (
        <div className="progressbar">
            <div
                className="progressbarfill"
                style={{
                    width: `${percent}%`, 
                }}
            >
                {Math.round(percent)}% 
            </div>
        </div>
    );
};

export default Progress;
