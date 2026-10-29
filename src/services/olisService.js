import {getMappedObservation} from './fhirService';

async function getOlisResults(){
    return await getMappedObservation();
}

export {getOlisResults};