import React, { useEffect, useState } from 'react'


function BackToTopButton() {

        const [BackToTopButton, setBackToTopButton] = useState(false);

        useEffect(() => {
          window.addEventListener("scroll", () => {
            if(window.scrollY > 100){
            setBackToTopButton(true)
          } else{
            setBackToTopButton(false)
          }
          })
        }, [])


        const scrollUp = () => {
          window.scrollTo({
            top: 0,
            behavior: "smooth"
          })
        }
  
  return (
    <div>
      {BackToTopButton && (
        <button className='fixed bottom-12 right-12 h-10 w-10 text-sm font-bold rounded-xl bg-gray-200 hover:bg-[#2f55d4] text-gray-600 hover:text-white' onClick={scrollUp}>^</button>
      )}
    </div>
  )
}

export default BackToTopButton