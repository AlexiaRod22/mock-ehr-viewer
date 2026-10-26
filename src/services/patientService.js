import patientData from '../mockData/patientData';

function getPatientByHcn(hcn){
    if(hcn==patientData.hcn){
        return patientData;
    }

    return null;
}

export {getPatientByHcn};