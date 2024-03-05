<script setup>
import { useMachine, useSelector } from '@xstate/vue';

import { globalActor, darkModeActor } from '../states/global';

const globalTitle = useSelector(globalActor, (state) => state.context.title);
const active = useSelector(darkModeActor, (state) => state.matches("active"));
const count = useSelector(darkModeActor, (state) => state.context.count);
</script>

<template>
  <footer class="flex items-center justify-between flex-wrap bg-leaf-green p-6 w-full bottom-0 text-sm lg:flex-grow">
  <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div className="text-sm lg:flex-grow">
      <h2>{{ globalTitle }}</h2>
      <div className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        <button @click="darkModeActor.send({ type: 'TOGGLE', value: 1 })" class="appearance-none py-2 px-4 bg-purple-500 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75">
      Click me (Now: ({{ active ? "On" : "Off" }}))
      Count: {{ count }}
    </button>
      </div>
    </div>
    <div>
      <a href="https://www.github.com/hwclassName/xstate-for-all" target="_blank" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Github</a>
    </div>
  </div>
  
    
  </footer>
</template>