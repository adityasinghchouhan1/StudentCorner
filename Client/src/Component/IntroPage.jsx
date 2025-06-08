import React from 'react'

const IntroPage = () => {
  return (
    <>
      <div className="flex flex-col justify-center p-4">
        <h1 className=" font-CormorantGaramond text-5xl font-semibold text-center my-3">
          The Introduction
        </h1>
        <div className="flex sm:flex-row flex-col sm:justify-around justify-center items-center">
          <div className="w-[400px] h-[400px] rounded-full border-yellow-500 border-[12px]  bg-radial-gradient bg-size-300 animate-radial-move text-center flex items-center justify-center">
            <h1></h1>
          </div>
          <div className="flex flex-col items-center justify-center text-center sm:my-0 my-6">
            <h2 className="text-5xl font-Playfair font-bold mb-2">
              The Second Headline
            </h2>
            <p className="font-Yellowtail">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
              facere, exercitationem atque minus a inventore voluptas voluptatem
              maiores, necessitatibus mollitia hic? Aperiam deserunt nobis
              recusandae mollitia corrupti, voluptatum sit quod.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default IntroPage
