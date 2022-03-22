import React from 'react'
import Statistics from './components/Statistics'
import Steps from './components/Steps'
import Sidebar from './components/Sidebar'

function Stats() {
    return (
        <Sidebar>
            <Statistics />
            <Steps />
        </Sidebar>
    )
}

export default Stats