import olisData from '../mockData/olisData';

function getOlisResults(hcn){
    return olisData[hcn] || [];
}

export {getOlisResults};