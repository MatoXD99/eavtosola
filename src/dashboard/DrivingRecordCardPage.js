import React from 'react'
import SidebarWidget from '../components/SidebarWidget'
import DrivenHoursWidget from '../components/DrivenHoursWidget'
import StatisticsWidget from '../components/StatisticsWidget'

import StepsWidget from '../components/StepsWidget'
import HeadingWidget from '../components/HeadingWidget'
import CandidateHeadingWidget from '../components/CandidateHeadingWidget'
import CandidatePicker from '../components/CandidatePicker'

function DrivingRecordCardPage() {
    return (
        <SidebarWidget>
            <CandidatePicker />

            <CandidateHeadingWidget />
            <DrivenHoursWidget />

            <HeadingWidget title="Kandidatovi dosežki" description="Pregled kandidatovih dosežkov v statistiki in grafični podobi" />
            <div className='flex lg:md:flex-row sm:flex-column'>
                <div className='flex-1 mr-6'>
                    <StepsWidget />
                </div>
                <div className='flex-2'>

                </div>
            </div>
        </SidebarWidget>
    )
}

export default DrivingRecordCardPage