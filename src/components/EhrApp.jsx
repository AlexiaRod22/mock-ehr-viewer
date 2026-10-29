import {useState} from 'react';
import {useOktaAuth} from '@okta/okta-react';
import PatientCard from './PatientCard';
import Dashboard from './Dashboard';
import {getPatientByHcn} from '../services/patientService';

import {getPatients, mapPatient} from '../services/fhirService';

function EhrApp({oktaAuth}){
    const {authState} = useOktaAuth();
    const userClaims = authState?.idToken?.claims;

    const [healthCardNumber,setHealthCardNumber] = useState('');
    const [patient, setPatient] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);


    async function testFhir(){
        const data = await getPatients();

        const firstPatient = data.entry[0].resource;

        const mappedPatient = mapPatient(firstPatient);

        console.log(mappedPatient);
    }

    //once hcn is inputted and the retrieve patient is clicked then run
    function retrievePatient(){
        setLoading(true);
        setPatient(null);
        setError('');


        setTimeout(()=>{
        const foundPatient = getPatientByHcn(healthCardNumber);

        if(foundPatient){
            setPatient(foundPatient);
        }else{
            setPatient(null);
            setError('Patient not found');
        }

        setLoading(false);
        }, 1000);
    }

    async function logout(){
        setPatient(null);
        setError('');
        setHealthCardNumber('');

        await oktaAuth.signOut();
    }


    return(
        <div>
            <h1>Ontario Health EHR Viewer</h1>

            <p>
                Signed in as: {' '}{userClaims?.name || userClaims?.email || 'Unknown User'}
            </p>
            
            <p>
                Email: {userClaims?.email}
            </p>

            <button
                onClick = {testFhir}>
                    Test FHIR
            </button>

            <br/>
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
                patient = {patient}/>
                </>   
            )}

        </div>
    );
}

export default EhrApp;
