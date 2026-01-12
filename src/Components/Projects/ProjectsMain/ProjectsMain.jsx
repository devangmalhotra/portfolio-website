import React from 'react'
import './ProjectsMain.css'
import ProjectCard from '../ProjectCard/ProjectCard'
import ProjectsNavigator from '../ProjectsNavigator/ProjectsNavigator'
import { useState } from 'react'
import ticTacToeScreenshot from '../../../assets/ProjectScreenshots/tic-tac-toe-screenshot.png'
import housingDashboardScreenshot from '../../../assets/ProjectScreenshots/housing-dashboard-screenshot.png'
import calculatorScreenshot from '../../../assets/ProjectScreenshots/calculator-screenshot.png'
import musicubeScreenshot from '../../../assets/ProjectScreenshots/musicube-screenshot.png'
import studentMarkingApplicationScreenshot from '../../../assets/ProjectScreenshots/student-marking-application-screenshot.png'

function ProjectsMain() {
  const projectCards = [{ content: (<ProjectCard name='A.I. Tic-Tac-Toe' description='Exploring the minimax, alpha-beta-pruning, and expectiminimax algorithms with a 3x3 board.' stack={["React", "Express", "PostgreSQL"]} githubLink='https://github.com/devangmalhotra/ai-tic-tac-toe' demoLink='https://devangmalhotra-tic-tac-toe.netlify.app/' image={ticTacToeScreenshot} index={0}/>) }, { content: (<ProjectCard name='Student Housing Dashboard' description='Understanding the student housing industry in some of the major areas in Ontario.' stack={["React", "Express", "MySQL", "Puppeteer"]} githubLink='https://github.com/devangmalhotra/student-housing-industry-analysis' demoLink='https://student-housing-industry-analysis.netlify.app/' image={housingDashboardScreenshot} index={1}/>) }, { content: (<ProjectCard name='Musicube' description='YouTube to .mp3 converter (currently only runs locally).' stack={["HTML", "CSS", "JavaScript"]} githubLink='https://github.com/devangmalhotra/musicube' image={musicubeScreenshot} index={3}/>) }, { content: (<ProjectCard name='Student Marking Application' description='Visualizes the grades in a class (data provided beforehand).' stack={["VBA"]} githubLink='https://github.com/devangmalhotra/student-marking-application' image={studentMarkingApplicationScreenshot} index={4}/>) }]

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