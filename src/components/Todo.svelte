<script lang="ts">
	import type { TodoInfo } from '../types';

	let {
		info,
		updateInfo
	}: {
		info: TodoInfo;
		updateInfo: (updatedInfo: TodoInfo | null) => void;
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
</script>

<div class="flex h-9 w-full max-w-[500px] items-center gap-2 rounded-md border-2 px-2 py-1">
	<input class="rounded-md" type="checkbox" checked={info.done} onchange={toggleDone} />

	<input
		class="hover:outline-nonefocus:outline-none flex-grow border-0 p-0 hover:border-b-2 hover:border-dashed focus:border-b-2 focus:border-solid focus:border-slate-500 focus:ring-0"
		type="text"
		value={info.text}
		oninput={(e) => edit((e.target as HTMLInputElement).value)}
	/>

	<div class="flex gap-2">
		<!-- actions -->
		<button onclick={remove}>🗑️</button>
	</div>
</div>
