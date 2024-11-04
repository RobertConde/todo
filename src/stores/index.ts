import { writable } from 'svelte/store';
import type { Todo } from '../types';

const stored: Todo[] =
	typeof localStorage !== 'undefined' ? JSON.parse(localStorage.getItem('todos') || '[]') : [];

export const todos = writable(stored);
todos.subscribe((value) => {
	if (typeof localStorage !== 'undefined') {
		localStorage.setItem('todos', JSON.stringify(value));
	}
});
