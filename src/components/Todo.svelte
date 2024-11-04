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
		class="flex-grow rounded-md border-0 p-0 hover:outline-dashed hover:outline-gray-300 focus:outline-none focus:ring-0"
		type="text"
		value={info.text}
		oninput={(e) => edit((e.target as HTMLInputElement).value)}
	/>

	<div class="flex gap-2">
		<!-- actions -->
		<button onclick={remove}>🗑️</button>
	</div>
</div>
