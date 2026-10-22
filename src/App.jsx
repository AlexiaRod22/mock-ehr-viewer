import {useState} from 'react';
function App(){
  const [healthCardNumber,setHealthCardNumber] = useState('');
  return(
    <div>
      <h1>Ontario Health EHR Viewer</h1>
      <input
      type = "text"
      placeholder = "Enter Health Card Number"
      value = {healthCardNumber}
      onChange = {(event) => setHealthCardNumber(event.target.value)}
      />

      <button
        onClick = {() => {alert(`Searching for HCN: ${healthCardNumber}`);

        }}
        >
        Retrieve Patient
      </button>
      <p>Current HCN: {healthCardNumber}</p>
    </div>
  );
}

export default App;