import React from 'react'
import Button from '../Reuse/Button'

const CoursesHome = () => {
  const carddata = [
    { coursetype: 'INTERMEDIATE (+2)', coursename: 'BiPC, MPC, MEC & CEC' },
    { coursetype: 'UNDERGRADUATE', coursename: 'B.Sc (Computer Science)' },
    { coursetype: 'UNDERGRADUATE', coursename: 'B.A (Economics, History)' },
    { coursetype: 'UNDERGRADUATE', coursename: 'B.Com (General & Computers)' },
    {
      coursetype: 'UNDERGRADUATE',
      coursename: 'BBA (Bachelor of Business Administration)',
    },
    {
      coursetype: 'UNDERGRADUATE',
      coursename: 'BCA (Bachelor of Computer Applications)',
    },
    { coursetype: 'POSTGRADUATE', coursename: 'M.Sc (Mathematics)' },
    { coursetype: 'POSTGRADUATE', coursename: 'M.A (Political Science)' },
    { coursetype: 'POSTGRADUATE', coursename: 'M.Com (Finance)' },
    { coursetype: 'PROFESSIONAL', coursename: 'CA (Chartered Accountant)' },
    { coursetype: 'PROFESSIONAL', coursename: 'LLB (Bachelor of Law)' },
    { coursetype: 'VOCATIONAL', coursename: 'Diploma in Web Development' },
  ]

  // Split into 2 arrays (6 items each)
  const column1 = carddata.slice(0, 6)
  const column2 = carddata.slice(6, 12)

  return (
    <div className="flex justify-center md:items-start text-center p-5 flex-col md:flex-row">
      {/* Text section */}
      <div className="flex justify-center items-start flex-col gap-3 p-5 sm:w-1/3 sm:mt-24 mt-0">
        <h1 className="text-maintext font-bold text-start text-4xl mb-4">
          WIDE RANGE OF COURSES
        </h1>
        <p className="text-black font-semibold text-lg font-Playfair mb-3">
          Select from comprehensive list of courses
        </p>
        <p className="text-gray-500 text-lg font-semibold text-justify pb-4">
          Each course has unique opportunity for students to pursue their
          passion and interests. Choosing the right course depends on individual
          preferences, career goals, and academic strengths.
        </p>
        <Button title={'KONW ABOUT COURSES >'} />
      </div>

      {/* Cards section */}
      {/* Cards section */}
      <div className="flex flex-col md:flex-row gap-2 p-5 sm:w-full md:w-2/3">
        <div className="flex flex-col gap-2 w-full md:w-1/2">
          {column1.map((item, index) => (
            <div key={index} className="p-5 rounded shadow-lg bg-white">
              <h3 className="font-bold text-xl pb-2">{item.coursetype}</h3>
              <p className="text-gray-400 font-semibold">{item.coursename}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2 w-full md:w-1/2">
          {column2.map((item, index) => (
            <div key={index} className="p-5 rounded shadow-lg bg-white">
              <h3 className="font-bold text-xl pb-2">{item.coursetype}</h3>
              <p className="text-gray-400 font-semibold">{item.coursename}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CoursesHome
