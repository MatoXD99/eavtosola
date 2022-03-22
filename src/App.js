import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Lessons from './lessons'
import Instructor from './instructor'
import Calendar from './calendar'
import Profile from './profile'
import Stats from './stats'
import Login from './login'
import Error404 from './error404'
import Forgot from './forgot'



function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Error404 />} />

        <Route path="/lessons" element={<Lessons />} />
        <Route path="/instructor" element={<Instructor />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/" element={<Stats />} />
      </Routes>
    </Router>
  );
}

export default App;
