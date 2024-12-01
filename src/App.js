import React from 'react';

const App = () => {
  const callLambdaFunction = async () => {
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
