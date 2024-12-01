// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';

const App = () => {
  const callLambdaFunction = async () => {
    // const url = 'https://hbbga5xqeyxbma6n6rxtxzu44q0kejif.lambda-url.eu-north-1.on.aws/';
    const url = "https://lxtustrzzroeasqsrkl7ffruka0iubfj.lambda-url.us-east-2.on.aws/dev";
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log('Response:', data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>React Lambda Button</h1>
      <button onClick={callLambdaFunction}>Call Lambda Function</button>
    </div>
  );
};

export default App;
