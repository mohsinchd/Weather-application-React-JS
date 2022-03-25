import React, { useState, useContext } from "react";
import ModalInput from "./ModalInput";
import {
  FaCloud,
  FaMapMarkerAlt,
  FaTint,
  FaMeteor,
  FaWind,
} from "react-icons/fa";

import {
  BsSunsetFill,
  BsCloudHazeFill,
  BsCloudFog,
  BsCloudDrizzle,
  BsFillSunFill,
  BsCloudFog2Fill,
} from "react-icons/bs";
import { IoIosSunny } from "react-icons/io";

import GlobalContext from "../Context/GlobalContext";

import Clock from "./Clock";
import Spinner from "../Spinner/Spinner";

const MainWeather = () => {
  const [modal, setModal] = useState(false);

  const { state, isLoading } = useContext(GlobalContext);

  let sec = state.sunset;
  let time = new Date(sec * 1000);
  let timeStr = `${time.getHours()}:${time.getMinutes()}`;

  let icon = "";
  switch (state.weatherMood) {
    case "Smoke":
      icon = <BsCloudFog fontSize={100} />;
      break;
    case "Haze":
      icon = <BsCloudHazeFill fontSize={100} />;
      break;
    case "Sunny":
      icon = <IoIosSunny fontSize={100} />;
      break;
    case "Clouds":
      icon = <BsCloudDrizzle fontSize={100} />;
      break;
    case "Clear":
      icon = <BsFillSunFill fontSize={100} />;
      break;
    case "Mist":
      icon = <BsCloudFog2Fill fontSize={100} />;
      break;
    default:
      icon = <FaCloud fontSize={100} />;
  }

  console.log(state);

  const closeModal = () => {
    setModal(false);
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="main-weather">
      <div className="card ">
        <div className="card-body-overlay">
          <div className="card-body p-4">
            <div className="header-content">
              <div className="left-content">
                {/* <FaCloud fontSize={100} /> */}
                {icon}

                <h2 className="mt-1">{state.weatherMood}</h2>
                <p>
                  {state.name} , {state.country}
                </p>
                <h1 className="display-2 fw-bold">
                  {Math.floor(state.temp)}&deg;C
                </h1>
                <p onClick={() => setModal(true)} className="lead hover">
                  <FaMapMarkerAlt /> Change Location
                </p>
                <Clock />
              </div>
              <div className="right-content mt-4">
                <div className="text-center mb-5">
                  <p className="m-0">
                    <FaTint fontSize={30} className="me-2" />
                    Humidity
                  </p>

                  <p className="lead fw-bold">{state.humidity}%</p>
                </div>

                <div className="text-center mb-5">
                  <p className="m-0">
                    <FaMeteor fontSize={30} className="me-2" />
                    Air Pressure
                  </p>

                  <p className="lead fw-bold">{state.pressure}</p>
                </div>

                <div className="text-center mb-5">
                  <p className="m-0">
                    <BsSunsetFill fontSize={35} className="me-2" />
                    Sunset
                  </p>

                  <p className="lead fw-bold">{timeStr}</p>
                </div>

                <div className="text-center m-0">
                  <p className="m-0">
                    <FaWind fontSize={30} className="me-2" />
                    Wind Speed
                  </p>

                  <p className="lead fw-bold">{state.speed}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ModalInput onClose={closeModal} showModal={modal} />
    </div>
  );
};

export default MainWeather;
