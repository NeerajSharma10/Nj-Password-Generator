import { useState } from "react"
import Midbar from "./components/Midbar"


function App() {
  const [isNumberEnabled, setIsNumberEnabled] = useState(false);
  const [isCharacterEnabled, setIsCharacterEnabled] = useState(false);
  const [value, setValue] = useState(10);

  const handleCheckBoxChange = () => {
    setIsNumberEnabled(!isNumberEnabled);
  };

  const handleCheckBoxChangeForCharacter = () => {
    setIsCharacterEnabled(!isCharacterEnabled);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="w-screen h-screen bg-blue-950	 flex justify-center ">

      <div className="w-4/5 h-1/2 md:w-1/2 md:h-1/3 bg-fuchsia-950 mt-10">
        <div className="w-100 h-1/2  flex justify-center items-center">
          <div className="w-1/1 h-1/3  flex justify-center items-center">
            <div className="w-100 h-1/1 text-base  md:text-3xl	text-gray-200 font-extrabold">PASSWORD-GENERATOR</div>
          </div>
        </div>
        <div className="w-100 h-1/2 bg-pink-950">
          <Midbar valueVariable={value} isNumberEnabledVarible={isNumberEnabled}
            isCharacterEnabledVariable={isCharacterEnabled} />
          <div className="w-100 h-1/2  flex justify-center items-center space-x-2">
            <div className="w-1/4  h-1/2 flex justify-center items-center">
              {/* <progress className="w-full" value="10" max="20"></progress> */}
              {/* <ProgressBar /> */}
              <div className="w-full  h-1/2 flex justify-center items-center">
                <input
                  type="range"
                  min="1"
                  max="40"
                  value={value}
                  className="w-full"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="w-1/5 h-1/2 text-gray-200 font-semibold flex justify-center items-center">
              <div className="text-xs md:text-lg">Length: {value}</div>
            </div>
            {/* <Checkbox /> */}
            <div className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-3 w-3 md:h-5 md:w-5 text-indigo-600"
                checked={isNumberEnabled}
                onChange={handleCheckBoxChange}
              />
              {/* <span className="ml-2">{label}</span> */}
            </div>
            <div className="text-xs md:text-lg w-2/12 h-1/2 text-gray-200 flex font-semibold items-center">Numbers</div>
            {/* <Checkbox /> */}
            <div className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-3 w-3 md:h-5 md:w-5 text-indigo-600"
                checked={isCharacterEnabled}
                onChange={handleCheckBoxChangeForCharacter}
              />
              {/* <span className="ml-2">{label}</span> */}
            </div>
            <div className="text-xs md:text-lg w-1/5 h-1/2 font-semibold text-gray-200 flex  items-center">Characters</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
