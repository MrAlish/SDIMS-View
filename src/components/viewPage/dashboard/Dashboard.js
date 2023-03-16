import React from 'react'
import Admin from '../../../layouts/Admin'
import BarChart from './barChart/BarChart'
import HeaderStats from './headerStats/HeaderStats'
import LineChart from './lineChart/LineChart'
import CardPageVisits from './pageVisit/PageVisit'
import SocialTraffic from './socialTraffic/SocialTraffic'


const Dashboard = () => {
 
  return (
    <>
    <div className='bg-gray-700' >
    <HeaderStats/>
    </div>
   <div className="flex flex-wrap pt-10">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <LineChart/>
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <BarChart/>
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardPageVisits/>
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <SocialTraffic/>
        </div>
      </div>
    </>
  )
}

export default Dashboard

Dashboard.layout = Admin