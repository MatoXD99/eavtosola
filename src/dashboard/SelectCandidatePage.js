import React from 'react'
import SidebarWidget from '../components/SidebarWidget'
import CandidatePickerWidget from '../components/CandidatePickerWidget'
import HeadingWidget from '../components/HeadingWidget'

function SelectCandidatePage() {
    return (
        <SidebarWidget>
            <HeadingWidget title="Izberite kandidata za urejanje" description="Ob izboru kandidata lahko urejate ure vožnje, spreminjae podatke in si ogledate status." />
            <CandidatePickerWidget />
        </SidebarWidget>
    )
}

export default SelectCandidatePage