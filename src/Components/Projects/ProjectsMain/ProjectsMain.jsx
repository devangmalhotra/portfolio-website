import React from 'react'
import './ProjectsMain.css'
import ProjectCard from '../ProjectCard/ProjectCard'
import ProjectsNavigator from '../ProjectsNavigator/ProjectsNavigator'
import { useState } from 'react'
import ticTacToeScreenshot from '../../../assets/ProjectScreenshots/tic-tac-toe-screenshot.png'
import housingDashboardScreenshot from '../../../assets/ProjectScreenshots/housing-dashboard-screenshot.png'
import calculatorScreenshot from '../../../assets/ProjectScreenshots/calculator-screenshot.png'
import musicubeScreenshot from '../../../assets/ProjectScreenshots/musicube-screenshot.png'

function ProjectsMain() {
  const projectCards = [ { content: (<ProjectCard name='A.I. Tic-Tac-Toe' description='Exploring the minimax, alpha-beta-pruning, and expectiminimax algorithms with a 3x3 board.' stack={["React", "Express", "PostgreSQL"]} githubLink='https://github.com/devangmalhotra/ai-tic-tac-toe' demoLink='https://devangmalhotra-tic-tac-toe.netlify.app/' image={ticTacToeScreenshot}/>) }, { content: (<ProjectCard name='Student Housing Dashboard' description='Understanding the student housing industry in some of the major areas in Ontario.' stack={["React", "Express", "MySQL", "Puppeteer"]} githubLink='https://github.com/devangmalhotra/student-housing-industry-analysis' demoLink='https://student-housing-industry-analysis.netlify.app/' image={housingDashboardScreenshot}/>) }, { content: (<ProjectCard name='Calculator' description='Full-stack calculator application.' stack={["HTML", "Tailwind CSS", "JavaScript"]} githubLink='https://github.com/devangmalhotra/Calculator' demoLink='https://calculator-devangmalhotra.netlify.app/' image={calculatorScreenshot}/>) }, { content: (<ProjectCard name='Musicube' description='YouTube to .mp3 converter (currently only runs locally).' stack={["HTML", "CSS", "JavaScript"]} githubLink='https://github.com/devangmalhotra/musicube' image={musicubeScreenshot}/>) }]

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