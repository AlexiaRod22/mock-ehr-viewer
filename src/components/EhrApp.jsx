import {useState} from 'react';
import {useOktaAuth} from '@okta/okta-react';
import Header from './Header';
import Sidebar from './Sidebar';

import PcrPage from './PcrPage';
import OlisPage from './OlisPage';
import DicsPage from './DicsPage';
import MessagesPage from './MessagesPage';
import HelpPage from './HelpPage';

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
    const [currentPage, setCurrentPage] = useState('dashboard');

    const showPatientSearch = 
        currentPage === 'dashboard' || currentPage === 'pcr' || currentPage ==='olis' || currentPage === 'dics';

    const notifications = [
        'New lab results for patient 118185 available',
        'Review imaging study for patient 12345',
        'New patient 098765 added to server'
    ];

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
            <Header 
            userName = {userClaims?.name} 
            logout = {logout}
            />
            <div className="app-layout">
                <Sidebar
                currentPage = {currentPage}
                setCurrentPage = {setCurrentPage}
                notifications = {notifications}
                />

                <div className = "content-area">
                    {showPatientSearch &&(
                        <>
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

                        </>
                    )}
                    

                    {patient && currentPage ==='dashboard' && (
                        <>
                        <PatientCard patient = {patient}/>
                        <Dashboard 
                        patient = {patient}/>
                        </>   
                    )}

                    {patient && currentPage ==='pcr' && (
                        <PcrPage patient={patient}/>
                    )}

                    {patient && currentPage ==='olis' && (
                        <OlisPage patient={patient}/>
                    )}

                    {patient && currentPage ==='dics' && (
                        <DicsPage patient={patient}/>
                    )}

                    {currentPage ==='messages' && (
                        <MessagesPage />
                    )}

                    {currentPage ==='help' && (
                        <HelpPage />
                    )}
                </div>
                

            </div>
            

        </div>
    );
}

export default EhrApp;
