<script lang="ts">
	import { onMount } from 'svelte';
	import type { TodoInfo } from '../types';

	let {
		info,
		updateInfo,
		makeNew
	}: {
		info: TodoInfo;
		updateInfo: (updatedInfo: TodoInfo | null) => void;
		makeNew: () => void;
	} = $props();

	function toggleDone() {
		updateInfo({
			...info,
			done: !info.done
		});
	}

	function edit(text: string) {
		updateInfo({
			...info,
			text
		});
	}

	function remove() {
		updateInfo(null);
	}

	let input: HTMLInputElement;
	onMount(() => {
		input.focus();
	});
</script>

<div class="flex h-9 w-full max-w-[500px] items-center gap-2 rounded-md border-2 px-2 py-1">
	<input class="rounded-md" type="checkbox" checked={info.done} onchange={toggleDone} />

	<input
		bind:this={input}
		class="hover:outline-nonefocus:outline-none flex-grow border-0 p-0 hover:border-b-2 hover:border-dashed focus:border-b-2 focus:border-solid focus:border-slate-500 focus:ring-0"
		type="text"
		value={info.text}
		oninput={(e) => edit((e.target as HTMLInputElement).value)}
		onkeydown={(e) => {
			if (e.key === 'Enter') {
				makeNew();
			} else if (e.key === 'Backspace' && info.text === '') {
				remove();
			}
		}}
	/>

	<div class="flex gap-2">
		<!-- actions -->
		<button onclick={remove}>🗑️</button>
	</div>
</div>
