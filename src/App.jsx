import React, { useState } from 'react'
import './App.css'

function convert(value, temp_unit1, temp_unit2) {

  const boil_dict = {'C':100, 'R':80, 'F':212, 'K':373.15};
  const freeze_dict = {'C':0, 'R':0, 'F':32, 'K':273.15};

  const x1 = freeze_dict[temp_unit1]
  const x2 = boil_dict[temp_unit1]
  const y1 = freeze_dict[temp_unit2]
  const y2 = boil_dict[temp_unit2]
  
  const result = ((value-x1)/(x2-x1))*(y2-y1) + y1

  const rounded = Math.round(result * 1000) / 1000;

  return rounded
}

function App() {
  const [celsius, setCelsius] = useState('');
  const [reamur, setReamur] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');
  const [kelvin, setKelvin] = useState('');

  const handleInputChange = (value, unit) => {
    if (isNaN(value)) {
      return;
    }

    switch (unit) {
      case 'celsius':
        setCelsius(value);
        setFahrenheit(convert(value, 'C', 'F'));
        setKelvin(convert(value, 'C', 'K'));
        setReamur(convert(value, 'C', 'R'));
        break;
        case 'reamur':
          setReamur(value);
          setCelsius(convert(value, 'R', 'C'));
          setFahrenheit(convert(value, 'R', 'F'));
          setKelvin(convert(value, 'R', 'K'));
          break;
        case 'fahrenheit':
          setFahrenheit(value);
          setCelsius(convert(value, 'F', 'C'));
          setKelvin(convert(value, 'F', 'K'));
          setRankine(convert(value, 'F', 'R'));
          break;
        case 'kelvin':
          setKelvin(value);
          setCelsius(convert(value, 'K', 'C'));
          setFahrenheit(convert(value, 'K', 'F'));
          setRankine(convert(value, 'K', 'R'));
        break;
      default:
        break;
    }
  }

  return (
    <div className='temperature-converter'>
      <div className='title grid justify-center mt-4 font-semibold text-xl'>
        Temperature Converter
      </div>
      <div className='temperature-converter-grid'>
        <div className='temp-name flex justify-between'>
          <div>Celsius</div>
          <div>:</div>
        </div>
        <input type="number" value={celsius} onChange={(e) => handleInputChange(e.target.value, 'celsius')}></input>

        <div className='temp-name flex justify-between'>
          <div>Reamur</div>
          <div>:</div>
        </div>
        <input type="number" value={reamur} onChange={(e) => handleInputChange(e.target.value, 'reamur')}></input>

        <div className='temp-name flex justify-between'>
          <div>Fahrenheit</div>
          <div>:</div>
        </div>
        <input type="number" value={fahrenheit} onChange={(e) => handleInputChange(e.target.value, 'fahrenheit')}></input>

        <div className='temp-name flex justify-between'>
          <div>Kelvin</div>
          <div>:</div>
        </div>
        <input type="number" value={kelvin} onChange={(e) => handleInputChange(e.target.value, 'kelvin')}></input>
      </div>
    </div>
  )
}

export default App