import React from 'react'
import './ProjectsMain.css'
import ProjectCard from '../ProjectCard/ProjectCard'
import ProjectsNavigator from '../ProjectsNavigator/ProjectsNavigator'
import { useState } from 'react'
import ticTacToeScreenshot from '../../../assets/ProjectScreenshots/tic-tac-toe-screenshot.png'

function ProjectsMain() {
  const projectCards = [ { content: (<ProjectCard name='A.I. Tic-Tac-Toe' description='Exploring the minimax, alpha-beta-pruning, and expectiminimax algorithms with a 3x3 board.' stack={["React", "Express", "PostgreSQL"]} githubLink='https://github.com/devangmalhotra/ai-tic-tac-toe' demoLink='https://devangmalhotra-tic-tac-toe.netlify.app/'/>) }, { content: (<ProjectCard name='Student Housing' description='Test.' stack={["React", "Express", "MySQL", "Puppeteer"]} githubLink='https://github.com/devangmalhotra/student-housing-industry-analysis' demoLink='https://student-housing-industry-analysis.netlify.app/'/>) }]

  let [projectIndexToDisplay, setProjectIndexToDisplay] = useState(0);

  const renderSelectedProjectCard = () => {
    return projectCards[projectIndexToDisplay].content
  };

  const projectIndexForward = () => {
    const maxProjIndex = projectCards.length - 1;

    if (projectIndexToDisplay === maxProjIndex) {
      const newIndex = 0;
      setProjectIndexToDisplay(newIndex)
    } else {
      const newIndex = projectIndexToDisplay + 1;
      setProjectIndexToDisplay(newIndex);
    };
  };

  const projectIndexBackward = () => {
    const maxProjIndex = projectCards.length - 1;
    
    if (projectIndexToDisplay === 0) {
      const newIndex = maxProjIndex;
      setProjectIndexToDisplay(newIndex);
    } else {
      const newIndex = projectIndexToDisplay - 1;
      setProjectIndexToDisplay(newIndex);
    };
  };


  return (
    <div className='page'>
        {renderSelectedProjectCard()}
        <ProjectsNavigator moveForward={projectIndexForward} moveBackward={projectIndexBackward}/>
    </div>
  )
}

export default ProjectsMain