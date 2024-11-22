import './App.css'
import Signin from './components/patientpov/Signin'
import Signup from './components/patientpov/Signup'
import Doctor_panel from './components/patientpov/Doctor_panel'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Patient_info from './components/patientpov/Patient_info';
import Home from './components/patientpov/Home';
import Doctor_info from './components/patientpov/Doctor_info';
import StateProvider from './components/StateProvider';
import Doctor_intro from './components/patientpov/Doctor_intro';
import AcceptingAppointment from './components/patientpov/AcceptingAppointment';
import AppointmentPanel from './components/patientpov/AppointmentPanel';
import { ToastContainer, toast } from 'react-custom-alert';
import 'react-custom-alert/dist/index.css';
import AppointmentList from './components/Doctor pov/AppointmentList';
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
          <Route path="appointmentlist" element={<AppointmentList/>}/>
        </Routes>
        </StateProvider>
      </Router>
      <ToastContainer floatingTime={5000} />
    </>
  )
}

export default App
