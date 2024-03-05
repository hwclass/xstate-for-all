<script lang="js">
  import { useSelector } from '@xstate/svelte';
  import { globalActor, darkModeActor } from "../states/global";

  let frameworkName = 'Svelte';
  let globalTitle = useSelector(globalActor, (state) => state.context.title);
  let active = useSelector(darkModeActor, (state) => state.matches("active"));
  let count = useSelector(darkModeActor, (state) => state.context.count);
</script>

<aside class="max-h-full max-w-lg	bg-slate-100">
  <h2>
    {$globalTitle} ({frameworkName})
  </h2>
  <button on:click={() => {
    darkModeActor.send({ type: "TOGGLE", value: 1 });
  }}>
    Click me (Now: ({ $active ? "On" : "Off" }))
    Count: { $count }
  </button>
</aside>