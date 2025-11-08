import React, { use } from 'react'
import '../BackgroundSquares/BackgroundSquares.css'
import { useState } from 'react'
import { useEffect } from 'react';
import MainContentContainer from '../MainContentContainer/MainContentContainer';

function BackgroundSquares() {
    const [squareSize, setSquareSize] = useState(0);
    const [totalColumns, setTotalColumns] = useState(16);

    const getTotalColumns = () => {
        const windowWidth = window.innerWidth;

        if (windowWidth <= 1100 && windowWidth > 650) {
            setTotalColumns(12);
        } else if (windowWidth <= 650) {
            setTotalColumns(4);
        } else {
            setTotalColumns(16);
        }

        const size = windowWidth / totalColumns;
        setSquareSize(size);
    }

    useEffect(() => {
        getTotalColumns();
        window.addEventListener("resize", getTotalColumns);

        return () => window.removeEventListener("resize", getTotalColumns);
        

    }, [squareSize])

  return (
    <div id='background-squares-container'>
        {Array.from({ length: 250 }).map((item, index) => {
            return (<div key={index} className='background-square' style={{ width: squareSize, height: squareSize }}></div>)
        })}
        <MainContentContainer />
    </div>
  )
}

export default BackgroundSquares