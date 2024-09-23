import React from 'react'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

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
        <button onClick={scrollup} className='fixed bottom-20 right-10 px-3 py-2 rounded-lg bg-purple-500'><FontAwesomeIcon icon={faAngleUp} fade size='lg' /></button>
      )}
    </div>
  )
}

export default GoTop
