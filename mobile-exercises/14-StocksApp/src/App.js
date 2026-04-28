import React from 'react';
import './App.css';
import { Select } from 'antd';
import 'antd/dist/antd.css';
import axios from 'axios';
import {
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer
} from 'recharts';

function App() {

  const [data, setData] = React.useState([]);
  const { Option } = Select;
  
  function handleChange(value) {
    console.log(`selected ${value}`);
    loadStock(value);
  }
  const loadStock = (symbol) => {
    const API_KEY = "CI8G4U1L9510WYF6";
    const URL_PATH = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY";
    const url = URL_PATH + '&symbol='+symbol+'&apikey='+API_KEY;
  
    axios.get(url)
    .then(res => {
      var data = [];
      var countMAX = 10;
      var count = 0;
      Object.keys(res.data["Time Series (Daily)"]).forEach(function(key) {
        count++;
        if (count < countMAX) {
          data.push(
            {
              'date': key,
              'open': res.data["Time Series (Daily)"][key]["1. open"],
              'high': res.data["Time Series (Daily)"][key]["2. high"],
              'low': res.data["Time Series (Daily)"][key]["3. low"],
              'close': res.data["Time Series (Daily)"][key]["4. close"],
              'volume': res.data["Time Series (Daily)"][key]["5. volume"],
            }
          );
        }
      });
      setData(data);
    })
  }

  return (
    <div className="App">
      <h1>Stock - Time Series</h1>
      <Select defaultValue="AAPL" style={{ width: 120 }} onChange={handleChange}>
        <Option value="AAPL">Apple</Option>
        <Option value="AMZN">Amazon</Option>
        <Option value="NOK">Nokia</Option>
        <Option value="TSLA">Tesla</Option>
      </Select>
      <div style={{width: '100%', height: '400px'}}>
  <ResponsiveContainer>
    <LineChart
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis domain={['dataMin', 'dataMax']}/>
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="open" stroke="#8884d8" activeDot={{ r: 8 }} />
      <Line type="monotone" dataKey="close" stroke="#82ca9d" />
      <Line type="monotone" dataKey="high" stroke="#ff0000" />
    </LineChart>
  </ResponsiveContainer>
</div>
    </div>
  );
}

export default App;