import {getMappedImagingStudies} from './fhirService';

async function getDicsStudies(){
    return await getMappedImagingStudies();
}

export {getDicsStudies};