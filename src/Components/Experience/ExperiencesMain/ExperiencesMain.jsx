import React from 'react'
import './ExperiencesMain.css'
import ExperienceCard from './ExperienceCard/ExperienceCard'

function ExperiencesMain() {
  return (
    <div id='experience-cards-container' className='page'>
        <ExperienceCard title='Yamaha Motor Canada' dateRange='Sept 2025 — Dec 2025' location='Toronto, ON' notes={ ['• Test', '• Test', '• Test'] }/>
        <ExperienceCard title='Yamaha Motor Canada' dateRange='Jan 2025 — Apr 2025' location='Toronto, ON' notes={ ['• Automated the retrieval of competitor MSRP data for 800+ products, such as motorcycles, ATVs, and SSVs, by creating a Python web scraper with BeautifulSoup4 and Selenium, reducing manual data collection time by more than 24 hours', '• Designed Power BI dashboards to visualize MSRP data across 20+ categories, reducing sales decision-making time by 20%', '• Assisted with month-end procedures by downloading YTD and MTD reports from SAP ERP, updating the waterfall chart, and preparing a slideshow containing the latest economic data, improving the accuracy and clarity of financial reporting by 10%'] }/>
        <ExperienceCard title='Nissan Motor Corporation' dateRange='May 2024 — Aug 2024' location='Mississauga, ON' notes={ ['• Test', '• Test', '• Test'] }/>
        <ExperienceCard title='Toronto Hydro' dateRange='May 2023 — Aug 2023' location='Toronto, ON' notes={ ['• Test', '• Test', '• Test'] }/>
    </div>
  )
}

export default ExperiencesMain