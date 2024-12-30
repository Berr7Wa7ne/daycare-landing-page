import React from 'react';
import Home from './pages/Home/Home';
// import Enroll from './pages/Enroll/Enroll';


const App: React.FC = () => {
  console.log('Rendering App Component');
  return (
    <div>
        <Home /> 
       {/* <Enroll />  */}
    </div>
  );
};

export default App;