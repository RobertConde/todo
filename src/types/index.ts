export interface Todo {
	id: string;
	info: TodoInfo | null;
}

export interface TodoInfo {
	text: string;
	done: boolean;
}
