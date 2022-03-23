import React from 'react'
import Statistics from './components/Statistics'
import Steps from './components/Steps'
import Sidebar from './components/Sidebar'
import Button from './components/Button'

function Stats() {
    return (
        <Sidebar>
            <Button />
            <Statistics />
            <Steps />
        </Sidebar>
    )
}

export default Stats