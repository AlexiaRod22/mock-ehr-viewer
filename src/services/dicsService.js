import {getMappedImagingStudies} from './fhirService';

async function getDicsStudies(patientId){
    return await getMappedImagingStudies(patientId);
}

export {getDicsStudies};