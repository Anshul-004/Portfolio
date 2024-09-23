import React from 'react'
import { useEffect, useState } from 'react'

const GoTop = () => {
    const [backToTopButton, setBackToTopButton] = useState(false);

    useEffect(()=>{
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100)
                setBackToTopButton(true)
            else
            setBackToTopButton(false)
        })
    }, [])

    const scrollup =() =>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

  return (
    <div>
      {backToTopButton && (
        <button onClick={scrollup} className='fixed bottom-20 right-10 p-2 bg-white rounded-lg bg-purple-500 text-slate-100'>^</button>
      )}
    </div>
  )
}

export default GoTop
