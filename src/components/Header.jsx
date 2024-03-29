import React, { useEffect, useState } from "react";
import { useMachine, useSelector } from '@xstate/react';

import { globalActor, darkModeActor } from "../states/global";

function Header () {
  const globalTitle = useSelector(globalActor, (state) => state.context.title);
  const active = useSelector(darkModeActor, (state) => state.matches("active"));
  const count = useSelector(darkModeActor, (state) => state.context.count);

  return (
    <header>
      <nav className="flex items-center justify-between flex-wrap bg-leaf-green p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
          <span className="font-semibold text-xl tracking-tight">
            <h2>{globalTitle}</h2>
          </span>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <div className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              <button onClick={() => {
                darkModeActor.send({ type: "TOGGLE", value: 1 });
              }} className="appearance-none py-2 px-4 bg-purple-500 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75">
                Click me (Now: ({ active ? "On" : "Off" }))
                Count: { count }
              </button>
            </div>
          </div>
          <div>
            <a href="https://www.github.com/hwclassName/xstate-for-all" target="_blank" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Github</a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
