import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios';

import Card from './component/card';
import Kelompok from './component/kelompok';

function App() {
  const [data,setData] = React.useState([])

  async function getdata () {
    const request = await axios
    .get('https://reqres.in/api/users?page=2')
    .then((res) => {
      console.log (res.data.data)
      setData(res.data.data)
    })
    .catch((er) => {console.log (er)})
  }

  React.useEffect (() => {
    getdata()
  }, [])

  return (
    <div className="App" style={{display: "flex",
    "flex-wrap": "wrap",
    "flex-direction": "column",
    "align-content": "center",}}>
      <Kelompok />
      {data.map((item,i) => {
        return(
          <Card data={item} key={i} />
        )
      })}
    </div>
  );
}

export default App;
