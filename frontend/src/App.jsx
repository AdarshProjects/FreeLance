import './App.css'
import Signin from './components/Signin'
import Signup from './components/Signup'
import Doctor_panel from './components/Doctor_panel'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Userpanel from './components/User_panel';
import Patient_panel from './components/patient_panel';
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="signup" element={<Signup/>}/>
          <Route path="signin" element={<Signin/>}/>
          <Route path="doctorpanel" element={<Doctor_panel/>}/>
          <Route path="userpanel" element={<Userpanel/>}/>
          <Route path="patientpanel" element={<Patient_panel/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
