"use client";
import { useTranslations } from 'next-intl'
import React from 'react'

const CourseB = () => {
    const t = useTranslations('courses'); 
    const courseData = t.raw("singleCourse"); 
  return (
    <div className='flex flex-col gap-6  text-gray-800 items-end'>
        <h1 className='text-4xl font-bold'>{courseData.title}</h1>
        <p className='text-end'>{courseData.description}</p>
        <h4 className='text-semibold text-xl text-end'>{courseData.subtitle}</h4>
    </div>
  )
}

export default CourseB