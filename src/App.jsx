import {useState} from 'react';
import PatientCard from './components/PatientCard';
import Dashboard from './components/Dashboard';
import {getPatientByHcn} from './services/patientService';
import Login from './components/Login';
import {authenticate} from './services/authService';

import './App.css';


function App(){
  //my use states (always being rendered)
  const [healthCardNumber,setHealthCardNumber] = useState('');
  const [patient, setPatient] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [selectedRole, setSelectedRole] = useState('Clinician');

  //once hcn is inputted and the retrieve patient is clicked then run
  function retrievePatient(){
    setLoading(true);
    setPatient(null);
    setError('');


    setTimeout(()=>{
      const foundPatient = getPatientByHcn(healthCardNumber);

      if(foundPatient){
        setPatient(foundPatient);
        setError('');
      }else{
        setPatient(null);
        setError('Patient not found');
      }

      setLoading(false);
    }, 1000);
  }
  
  function login(){
    const authenticatedUser = authenticate(selectedRole);
    setUser(authenticatedUser);
    setIsAuthenticated(true);
  }

  function logout(){
    setIsAuthenticated(false);
    setUser(null);
    setPatient(null);
    setError('');
    setHealthCardNumber('');
  }

  if(!isAuthenticated){
    return(
      <Login
      selectedRole = {selectedRole}
      setSelectedRole = {setSelectedRole}
      login = {login}
      />
    );
  }

  //main
  return(
    <div>
      <h1>Ontario Health EHR Viewer</h1>

      <p>Signed in as: {user?.username} ({user?.role})</p>
      
      <button 
      onClick = {logout}>
        Sign out
      </button>

      <div className = "search-section">
        <input
        type = "text"
        placeholder = "Enter Health Card Number"
        value = {healthCardNumber}
        onChange = {(event) => setHealthCardNumber(event.target.value)}
        />

        <button
          onClick = {retrievePatient}
          disabled = {loading}>
          Retrieve Patient
        </button>
      </div>

      {loading &&(
        <p>Loading patient information...</p>
      )}
      
      {error && (
        <p>{error}</p>
      )}

      {patient && (
        <>
          <PatientCard patient = {patient}/>
          <Dashboard 
          patient = {patient}
          user = {user}/>
        </>
        
      )}

    </div>
  );
}

export default App;