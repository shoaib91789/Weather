import Image from 'next/image';
import React from 'react';

const Weather = ({ data }) => {
  let temperature = data.main.temp.toFixed(0);
  let temperatureInCelsius = (((temperature-32)*5)/9).toFixed(1);
  return (
    <div className='relative flex flex-col justify-between max-w-[500px] w-full h-[90vh] m-auto p-4 text-gray-300 z-10'>
      {/* Top */}
      <div className='relative flex justify-between pt-12'>
        <div className='flex flex-col items-start'>
          <Image
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt='/'
            width='100'
            height='100'
          />
          <p className='text-2xl'>{data.weather[0].main}</p>
        </div>
        <p className='text-7xl'>{temperatureInCelsius}&#176;C</p>
      </div>
      {/* Bottom */}

<div className='relative p-8 rounded-md bg-black/50'>
    <p className='pb-6 text-2xl text-center'>Weather in {data.name}</p>
    <div className='flex justify-between text-center'>
        <div>
            <p className='text-2xl font-bold'>{temperatureInCelsius}&#176;C</p>
            <p className='text-xl'>Feels Like</p>
        </div>
        <div>
            <p className='text-2xl font-bold'>{data.main.humidity}%</p>
            <p className='text-xl'>Humidity</p>
        </div>
        <div>
            <p className='text-2xl font-bold'>{data.wind.speed.toFixed(0)} MPH</p>
            <p className='text-xl'>Winds</p>
        </div>
    </div>
</div>

    </div>
  );
};

export default Weather;
