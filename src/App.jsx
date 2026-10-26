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

  //once hcn is inputted and the retrieve patient is clicked then run
  function retrievePatient(){
    const foundPatient = getPatientByHcn(healthCardNumber);

    if(foundPatient){
      setPatient(foundPatient);
      setError('');
    }else{
      setPatient(null);
      setError('Patient not found');
    }
    
  }
  
  //main
  return(
    <div>
      <h1>Ontario Health EHR Viewer</h1>
      <div className = "search-section">
        <input
        type = "text"
        placeholder = "Enter Health Card Number"
        value = {healthCardNumber}
        onChange = {(event) => setHealthCardNumber(event.target.value)}
        />

        <button
          onClick = {retrievePatient}>
          Retrieve Patient
        </button>
      </div>
      
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