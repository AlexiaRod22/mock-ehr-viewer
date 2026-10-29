import {getMappedObservations} from './fhirService';

async function getOlisResults(patientId){
    return await getMappedObservations(patientId);
}

export {getOlisResults};