"use client";
import { useEffect, useState } from "react";

const Progress = () => {
    const [percent, setPercent] = useState(0);
    const baseline=2800;
useEffect(() => {
    const fetchData=()=>{
        const apiValue=1200;
        const calculatedPercent=(apiValue/baseline)*100;
        setPercent(calculatedPercent)
    }
fetchData();
  
}, []);

  return (
    <div className="progressbar">
        <div className="progressbarfill" style={{ width: `${percent}%` }}>
            {percent.toFixed(2)} %
        </div>
    </div>
  )
}

export default Progress