<script lang="ts">
	import Todo from '../components/Todo.svelte';
	import type { Todo as Todo_T, TodoInfo } from '../types';
	import { todos } from '../stores';
	import { v4 as uuidv4 } from 'uuid';
	import { onMount } from 'svelte';
	import { blur } from 'svelte/transition';

	const updateInfo = (id: string, info: TodoInfo | null) => {
		todos.update((ts) => {
			if (info) {
				ts = ts.map((t) => (t.id === id ? { id, info } : t));
			} else {
				ts = ts.filter((t) => t.id !== id);
			}
			return ts;
		});
	};

	const addTodo = () => {
		todos.update((ts) => [
			...ts,
			{
				id: uuidv4(),
				info: { text: '', done: false }
			}
		]);
	};

	const updater = (id: string) => (info: TodoInfo | null) => updateInfo(id, info);
</script>

<div class="flex flex-col items-center gap-2 px-6 py-4">
	<div class="flex w-full max-w-[500px] justify-between px-2">
		<h1 class="text-xl"><b>Todos</b></h1>

		<button class="text-lg" onclick={addTodo}>➕</button>
	</div>

	{#if $todos.length === 0}
		<p>Nothing to see here 🏖️</p>
	{/if}

	{#each $todos as { id, info } (id)}
		{#if info}
			<Todo {info} updateInfo={updater(id)} makeNew={addTodo} />
		{/if}
	{/each}
</div>
