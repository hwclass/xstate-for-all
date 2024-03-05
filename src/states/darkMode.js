import { createMachine, assign } from "xstate";

const darkModeMachine = createMachine({
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

export default darkModeMachine;
