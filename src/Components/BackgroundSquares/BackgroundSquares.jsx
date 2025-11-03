import React, { use } from 'react'
import '../BackgroundSquares/BackgroundSquares.css'
import { useState } from 'react'
import { useEffect } from 'react';

function BackgroundSquares() {
    const [totalSquares, setTotalSquares] = useState(0);

    const getTotalSquares = () => {
        const windowHeight = window.innerHeight;
        const windowWidth = window.innerWidth;
        //console.log("Window height:", windowHeight);
        //console.log("Window width:", windowWidth);

        const squaresPerRow = Math.floor(windowWidth / 100); // Since each square is 100px by 100px
        const squaresPerColumn = Math.floor(windowHeight / 100);
        setTotalSquares(squaresPerColumn * squaresPerRow);
        console.log(totalSquares);
        //console.log("Squares per row:", squaresPerRow);
        //console.log("Squares per column:", squaresPerColumn);
    }

    const handleWindowResize = () => {
        getTotalSquares();
    }

    useEffect(() => {
        getTotalSquares();
        window.addEventListener("resize", getTotalSquares);
        return () => window.removeEventListener("resize", getTotalSquares);
    }, [totalSquares])

  return (
    <div id='background-squares-container'>
        <div className='background-square'></div>
        {Array.from({ length: totalSquares }).map((item, index) => {
            return (<div key={index} className='background-square'></div>)
        })}
    </div>
  )
}

export default BackgroundSquares