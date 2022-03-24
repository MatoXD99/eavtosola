import React from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"

/* Dashboard pages */
import StatisticsPage from './dashboard/StatisticsPage'
import DrivingRecordCardPage from './dashboard/DrivingRecordCardPage'
import CalendarPage from "./dashboard/CalendarPage"
import EditCandidatesPage from "./dashboard/EditCandidatesPage"
import Administrator from "./dashboard/Administrator"
import Error404Page from './dashboard/Error404Page'

/* Landing page */
import LoginPage from './landing/LoginPage'
import ForgotPasswordPage from './landing/ForgotPasswordPage'
import LandingPage from './landing/LandingPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Error404Page />} />

        <Route path="/dashboard/" element={<DrivingRecordCardPage />} />
        <Route path="/dashboard/statistics" element={<StatisticsPage />} />
        <Route path="/dashboard/calendar" element={<CalendarPage />} />
        <Route path="/dashboard/editcandidates" element={<EditCandidatesPage />} />
        <Route path="/dashboard/administrator" element={<Administrator />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot" element={<ForgotPasswordPage />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
