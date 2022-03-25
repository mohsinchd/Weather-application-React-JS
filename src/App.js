import MainWeather from "./Components/MainWeather";
import { ContextProvider } from "./Context/GlobalContext";

function App() {
  return (
    <ContextProvider>
      <div className="backgroud"> </div>
      <div className="content">
        <div className="container mt-10">
          <MainWeather />
        </div>
      </div>
    </ContextProvider>
  );
}

export default App;
