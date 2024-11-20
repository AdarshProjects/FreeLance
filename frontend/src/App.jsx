import './App.css'
import Signin from './components/Signin'
import Signup from './components/Signup'
import Doctor_panel from './components/Doctor_panel'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Patient_info from './components/Patient_info';
import Home from './components/Home';
import Doctor_info from './components/Doctor_info';
import StateProvider from './components/StateProvider';
import Doctor_intro from './components/Doctor_intro';
import AcceptingAppointment from './components/AcceptingAppointment';
import AppointmentPanel from './components/AppointmentPanel';
import { ToastContainer, toast } from 'react-custom-alert';
import 'react-custom-alert/dist/index.css';
function App() {

  return (
    <>
      <Router>
        <StateProvider>
        <Routes>
          <Route path="signup" element={<Signup/>}/>
          <Route path="signin" element={<Signin/>}/>
          <Route path="doctorpanel" element={<Doctor_panel/>}/>
          <Route path="patientinfo" element={<Patient_info/>}/>
          <Route path="Doctorinfo" element={<Doctor_info/>}></Route>
          <Route path="Doctorintro" element={<Doctor_intro/>}></Route>
          <Route path="/" element={<Home/>}/>
          <Route path="acceptingappointment" element={<AcceptingAppointment/>}/>
          <Route path="appointmentpanel" element={<AppointmentPanel/>}/>
        </Routes>
        </StateProvider>
      </Router>
      <ToastContainer floatingTime={5000} />
    </>
  )
}

export default App
