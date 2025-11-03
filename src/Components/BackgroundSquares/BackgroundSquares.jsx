import React, { use } from 'react'
import '../BackgroundSquares/BackgroundSquares.css'
import { useState } from 'react'
import { useEffect } from 'react';

function BackgroundSquares() {
    const [squareSize, setSquareSize] = useState(0);
    const [totalColumns, setTotalColumns] = useState(16);

    const getSquareSize = () => {
        const windowWidth = window.innerWidth;
        const size = windowWidth / totalColumns;
        setSquareSize(size);
    }

    const getTotalColumns = () => {
        const windowWidth = window.innerWidth;

        if (windowWidth < 920 && windowWidth > 520) {
            setTotalColumns(12);
        } else if (windowWidth < 520) {
            setTotalColumns(4);
        } else {
            setTotalColumns(16);
        }
    }

    useEffect(() => {
        getTotalColumns();
        getSquareSize();
        window.addEventListener("resize", getSquareSize);

        return () => window.removeEventListener("resize", getSquareSize);
        

    }, [squareSize])

  return (
    <div id='background-squares-container'>
        {Array.from({ length: 250 }).map((item, index) => {
            return (<div key={index} className='background-square' style={{ width: squareSize, height: squareSize }}></div>)
        })}
    </div>
  )
}

export default BackgroundSquares