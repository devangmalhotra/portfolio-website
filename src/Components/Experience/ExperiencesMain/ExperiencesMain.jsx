import React from 'react'
import './ExperiencesMain.css'
import ExperienceCard from './ExperienceCard/ExperienceCard'

function ExperiencesMain() {
  return (
    <div id='experience-cards-container' className='page'>
        <ExperienceCard title='Yamaha Motor Canada' dateRange='Sept 2025 — Dec 2025' location='Toronto, ON' notes={ ['• Test', '• Test', '• Test'] } current='current'/>
        <ExperienceCard title='Yamaha Motor Canada' dateRange='Jan 2025 — Apr 2025' location='Toronto, ON' notes={ ['• Automated the retrieval of competitor MSRP data for 800+ products, such as motorcycles, ATVs, and SSVs, by creating a Python web scraper with BeautifulSoup4 and Selenium, reducing manual data collection time by more than 24 hours', '• Designed Power BI dashboards to visualize MSRP data across 20+ categories, reducing sales decision-making time by 20%', '• Assisted with month-end procedures by downloading YTD and MTD reports from SAP ERP, updating the waterfall chart, and preparing a slideshow containing the latest economic data, improving the accuracy and clarity of financial reporting by 10%'] }/>
        <ExperienceCard title='Nissan Motor Corporation' dateRange='May 2024 — Aug 2024' location='Mississauga, ON' notes={ ['• Utilized Tableau to update the Dealer Group KPI Scorecard for 260 dealers by managing data feeds and template precision', '• Oversaw all EV Tracker updates by maintaining records of EV sales and dealer training status, improving data accuracy by 20%', '• Updated the Profitability Report using Excel functions such as VLOOKUP and SUMIFS, reducing generation time by 15%'] }/>
        <ExperienceCard title='Toronto Hydro' dateRange='May 2023 — Aug 2023' location='Toronto, ON' notes={ ['• Built a Tableau dashboard to visualize 58,000+ lines of data and trend US$20M+ of annual expenses by quantity of removals by asset type, useful life of each asset, age of asset removed, etc. to identify the key drivers of derecognition from 2020 – 2023', '• Prepared journal entries using SAP ERP to handle variances and transfer expenditures, improving financial reporting accuracy', '• Created macros using VBA to analyze the ISA Actual report and the CWIP report daily, increasing efficiency by 25%'] }/>
    </div>
  )
}

export default ExperiencesMain