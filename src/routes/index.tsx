import { component$, useSignal } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {

  const pokemonId = useSignal(1); // Para primitivos, booleans, strings, numbers, etc 

  return (
    <>
		<span class="text-2xl">Buscador simple</span>
		<span class="text-9xl">{ pokemonId }</span>
	
		{/* TODO: crear imagen */}

	<div>
		<button class="btn btn-primary">Anterior</button>
		<button class="btn btn-primary">Siguiente</button>
	</div>
	
    </>
  );
});

export const head: DocumentHead = {
  title: 'PokeQwik',
  meta: [
    {
      name: 'PokeQwik',
      content: 'First app with qwik',
    },
  ],
};
