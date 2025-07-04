import React from 'react'

const Button = ({ onclicks, title }) => {
  return (
    <>
      <div
        className="bg-bgmain py-3 px-4 text-white font-semibold rounded-full text-xl hover:pe-8 transition-all duration-300"
        onclick={onclicks}
      >
        {title}
      </div>
    </>
  )
}

export default Button
