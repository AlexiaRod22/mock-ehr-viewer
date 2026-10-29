import {useState} from 'react';
import {useOktaAuth} from '@okta/okta-react';
import PatientCard from './PatientCard';
import Dashboard from './Dashboard';

import {getPatientByIdentifier, mapPatient} from '../services/fhirService';

function EhrApp({oktaAuth}){
    const {authState} = useOktaAuth();
    const userClaims = authState?.idToken?.claims;

    const [healthCardNumber,setHealthCardNumber] = useState('');
    const [patient, setPatient] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);



    async function retrievePatient(){
        setLoading(true);
        setPatient(null);
        setError('');
        try{
            const data = await getPatientByIdentifier(healthCardNumber);

            if(data.entry && data.entry.length > 0 ){
                const patient = mapPatient(data.entry[0].resource);
                setPatient(patient);
            }else{
                setError('No patient found');
            }
        }
        catch(error){
            setError('FHIR patient retrieved failed');
        }

        setLoading(false);
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

            <br/>
            <button 
            onClick = {logout}>
                Sign out
            </button>
            
            <br/>

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
