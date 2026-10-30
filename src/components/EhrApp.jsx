import {useState} from 'react';
import {useOktaAuth} from '@okta/okta-react';
import PatientCard from './PatientCard';
import Dashboard from './Dashboard';

import {getImagingStudiesById,getPatientByIdentifier, mapPatient} from '../services/fhirService';

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
                console.error(error);
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
        <div className= "ehr-container">
            <div className="app-header">
                <div className="header-left">

                    <div className="app-brand">
                        Ontario Health
                    </div>

                    <div className="app-title">
                        EHR Viewer
                    </div>

                </div>

                <div className="header-right">

                    <details className="user-menu">

                        <summary>
                            👤 {userClaims?.name}
                        </summary>

                        <div className="user-dropdown">
                            <button
                                onClick={logout}
                            >
                                Sign out
                            </button>
                        </div>
                    </details>
                </div>
            </div>
            
            
            <br/>

            <h2>Patient Search</h2>
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
