import React from 'react'
import Sidebar from './components/Sidebar'
import HoursStatistics from './components/HoursStatistics'
import BuyExtraHours from './components/BuyExtraHours'

function Lessons() {
    return (
        <Sidebar>
            <HoursStatistics />
            <BuyExtraHours />
        </Sidebar>
    )
}

export default Lessons