import { setup, createMachine, createActor, assign } from 'xstate';

const globalMachine = createMachine({
  context: { title: 'MicroApps at Scale (2)' }
});

export const darkModeMachine = createMachine({
  id: "toggle",
  initial: "inactive",
  context: {
    count: 0,
  },
  states: {
    inactive: {
      on: { TOGGLE: "active" },
    },
    active: {
      entry: assign({
        count: ({ context, event }) => context.count + event.value,
      }),
      on: { TOGGLE: "inactive" },
    },
  }
});

export const globalActor = createActor(globalMachine);
export const darkModeActor = createActor(darkModeMachine);

globalActor.start();
darkModeActor.start();