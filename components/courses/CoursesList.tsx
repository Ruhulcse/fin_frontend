
import React from 'react'
import Course from './Course'


const CoursesList = () => {
  return (
    <section className="course-area"> 
    <div className="courses grid grid-col-1 md:grid-cols-2 gap-10">
    {[ {}, {}].map((course: any, index: number) => (
      <Course course={course} key={index} index={index} />
    ))}
   
  </div>
  </section>
   
  )
}

export default CoursesList