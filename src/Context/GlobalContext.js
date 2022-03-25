import React, { createContext, useEffect, useState } from "react";

const GlobalContext = createContext();

export const ContextProvider = ({ children }) => {
  const [state, setState] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  // const [cityName, setCityName] = useState("");

  // const getCityName = (name) => {
  //   setCityName(name);
  // };

  const fetchData = async (cityName) => {
    setIsLoading(true);
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=7a27ca370582675e94512202df0d3dd0`;

      const response = await fetch(url);
      const data = await response.json();

      const { temp, humidity, pressure } = data.main;
      const { main: weatherMood } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;

      const newWeatherInfo = {
        temp,
        humidity,
        pressure,
        weatherMood,
        name,
        speed,
        country,
        sunset,
      };

      setState(newWeatherInfo);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData("lahore");
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        state,
        // getCityName,
        fetchData,
        isLoading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
