import React, { ProfilerProps } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import List  from './components/List';

function App() {

  return (
    <div className="App">
      <div className='App-header'>
        <h3>KMITL</h3>
        <h3>TEACHLOAD</h3>
      </div>
      <div className='App-subheader'>
        <button className='btn default'>หน้าแรก</button>
        <button className='btn default'>ภาระงานสอน</button>
        <button className='btn default'>สรุปภาระงาน</button>
      </div>
      <div className='App-context'>
        <h5>ระบบคิดภาระงาน</h5>
      </div>
      <List profileList={profileList}/>
    </div>
  );
}

export default App;
