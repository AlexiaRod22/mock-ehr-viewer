import {useState} from 'react';
import PatientCard from './components/PatientCard';
import Dashboard from './components/Dashboard';
import {getPatientByHcn} from './services/patientService';

import './App.css';


function App(){
  //my use states (always being rendered)
  const [healthCardNumber,setHealthCardNumber] = useState('');
  const [patient, setPatient] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

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
    setIsAuthenticated(true);
  }

  function logout(){
    setIsAuthenticated(false);

    setPatient(null);
    setError('');
  }

  if(!isAuthenticated){
    return(
      <div>
        <h1>Ontario Health EHR Viewer</h1>

        <p>Please sign in to continue</p>

        <button 
        onClick = {login}>
          Sign in
        </button>
      </div>
    );
  }

  //main
  return(
    <div>
      <h1>Ontario Health EHR Viewer</h1>
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
          <Dashboard patient = {patient}/>
        </>
        
      )}

    </div>
  );
}

export default App;