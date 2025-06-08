import React from 'react'

const IntroPage = () => {
  return (
    <>
      <div className="flex flex-col justify-center p-4">
        <h1 className=" font-CormorantGaramond text-5xl font-semibold text-center my-3">
          The Introduction
        </h1>
        <div className="flex sm:flex-row flex-col sm:justify-around justify-center items-center">
          <div>
            <div className="flex items-center">
              <div className="w-[150px] h-[150px] rounded-full border-yellow-500 border-2 relative  bg-radial-gradient bg-size-300 animate-radial-move text-center flex items-center justify-center">
                <h5 className="bg-gradient-to-r from-cyan-500 text-white font-Yellowtail p-1 rounded-l-lg ">
                  Your data
                </h5>
              </div>
              <div className="mt-20 w-[90px] h-[90px] rounded-full border-yellow-500 border-2 relative  bg-radial-gradient bg-size-300 animate-radial-move text-center flex items-center justify-center">
                <h5 className="bg-gradient-to-r from-cyan-500 text-white font-Yellowtail p-1 rounded-l-lg ">
                  Your data
                </h5>
              </div>
            </div>
            <div className="flex ">
              <div className="w-[200px] h-[200px] rounded-full border-yellow-500 border-2 relative  bg-radial-gradient bg-size-300 animate-radial-move flex items-center justify-start">
                <h5 className="bg-gradient-to-r from-cyan-500 text-white font-serif p-1">
                  Your data datafg gfaty
                </h5>
              </div>
              <div className="mt-32 w-[80px] h-[80px] rounded-full border-yellow-500 border-2 relative  bg-radial-gradient bg-size-300 animate-radial-move text-start flex items-center justify-start">
                <h5 className="bg-gradient-to-r text-xs from-cyan-500 text-white font-Yellowtail p-1 rounded-l-md ">
                  Your data
                </h5>
              </div>
            </div>
            <div className="w-[100px] h-[100px] rounded-full border-yellow-500 border-2 relative  bg-radial-gradient bg-size-300 animate-radial-move text-center flex items-center justify-center">
              <h5 className="bg-gradient-to-r from-cyan-500 text-white font-Yellowtail p-1 rounded-l-lg ">
                Your data
              </h5>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center text-center sm:my-0 my-6 sm:w-2/4">
            <h2 className="text-5xl font-Playfair font-bold mb-2">
              The Second Headline
            </h2>
            <p className="font-Yellowtail">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
              facere, exercitationem atque minus a inventore voluptas
            </p>
            <p className="mt-2 font-CormorantGaramond">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae culpa dolor, eaque blanditiis illo laborum optio
              voluptate eveniet porro fuga rem earum temporibus velit distinctio
              sint itaque inventore perferendis aliquam. fuga rem earum
              temporibus velit distinctio sint itaque inventore perferendis
              aliquam.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default IntroPage
