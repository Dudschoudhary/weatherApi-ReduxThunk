import React from 'react'
import './App.css'
import {useDispatch,useSelector} from 'react-redux';
import { fetchWeatherData,setCityName } from '../../weatherRedux/src/redux/weatherSlice/weatherSlice';

function App() {
  const dispatch = useDispatch();

  const {cityName,weatherData,status,error}= useSelector((state)=>state.weather);

  const formHandle = (e) =>{
    e.preventDefault();
    if(cityName== ''){
      alert("enter cityName......")
    }else{
      dispatch(fetchWeatherData(cityName))
    }
  }

  return (
    <>
    <div className='space-y-2'>
     <h1>WeatherApi</h1>
     <form onSubmit={formHandle}>
        <input className='px-2 py-1 border outline-none rounded-s' type="text" placeholder='Search....' value={cityName} onChange={(e)=> dispatch(setCityName(e.target.value))}/>
        <button className='px-2 py-1 bg-sky-700'>Search</button>
     </form>
     <div className='space-y-3'>
      {status == 'loading' && (<p>Loading.....</p>) }
      {status == 'succeed' && (
        <>
        <div>City Name: {weatherData.name}</div>
        <div>City Name: {weatherData.sys.country}</div>
        <div>Description: {weatherData.weather[0].description}</div>

        </>
      ) }
      {status == 'reject' && (<p>ffdfdf</p>)}
     </div>
     </div>
    </>
  )
}

export default App
