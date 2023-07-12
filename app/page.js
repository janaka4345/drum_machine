"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [key, setKey] = useState("");
  const [volume, setVolume] = useState(50);

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      let key = e.key.toUpperCase();
      playAudio(key);
    });
  }, []);

  function playAudio(key) {
    let audio = document.getElementById(key);
    audio.volume = volume / 100;
    audio.play();
    setKey(key);
  }

  return (
    <div className="ml-40">
      <div id="drum-machine" className="w-full h-full ">
        <div id="display" className="flex  flex-row-reverse mt-8">
          <div className=" w-1/2 h-[400px] flex flex-col justify-center items-center">
            <label
              htmlFor="volume-range"
              className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400"
            >
              Volume
            </label>
            <input
              id="volume-range"
              type="range"
              value={volume}
              onChange={(e) => setVolume(e.target.value)}
              className="w-1/2  h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            />
            <h1 className="mb-8 mt-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
              NOTE: {key}
            </h1>
          </div>
          <div className="grid grid-cols-3  grid-rows-3 gap-3 w-1/2 h-[400px]">
            <a
              id="drum-pad"
              onClick={() => {
                playAudio("Q");
              }}
              className="drum-pad flex items-center justify-center w-full h-full text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Q
              <audio
                id="Q"
                src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
                className="clip"
              />
            </a>
            <a
              id="drum-pad"
              onClick={() => {
                playAudio("W");
              }}
              className="drum-pad flex items-center justify-center w-full h-full text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              W
              <audio
                id="W"
                src="https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"
                className="clip"
              />
            </a>
            <a
              id="drum-pad"
              onClick={() => {
                playAudio("E");
              }}
              className="drum-pad flex items-center justify-center w-full h-full text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              E
              <audio
                id="E"
                src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
                className="clip"
              />
            </a>
            <a
              id="drum-pad"
              onClick={() => {
                playAudio("A");
              }}
              className="drum-pad flex items-center justify-center w-full h-full text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              A
              <audio
                id="A"
                src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
                className="clip"
              />
            </a>
            <a
              id="drum-pad"
              onClick={() => {
                playAudio("S");
              }}
              className="drum-pad flex items-center justify-center w-full h-full text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              S
              <audio
                id="S"
                src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
                className="clip"
              />
            </a>
            <a
              id="drum-pad"
              onClick={() => {
                playAudio("D");
              }}
              className="drum-pad flex items-center justify-center w-full h-full text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              D
              <audio
                id="D"
                src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
                className="clip"
              />
            </a>
            <a
              id="drum-pad"
              onClick={() => {
                playAudio("Z");
              }}
              className="drum-pad flex items-center justify-center w-full h-full text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Z
              <audio
                id="Z"
                src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
                className="clip"
              />
            </a>
            <a
              id="drum-pad"
              onClick={() => {
                playAudio("X");
              }}
              className="drum-pad flex items-center justify-center w-full h-full text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              X
              <audio
                id="X"
                src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
                className="clip"
              />
            </a>
            <a
              id="drum-pad"
              onClick={() => {
                playAudio("C");
              }}
              className="drum-pad flex items-center justify-center w-full h-full text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              C
              <audio
                id="C"
                src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
                className="clip"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
