import { writable } from 'svelte/store';

export const sphereControlState = writable({
	mode: 'normal', // 'normal', 'shrunk', 'pushed'
	isAnimating: false
});

export function shrinkSpheres() {
	sphereControlState.update((state) => ({
		...state,
		mode: state.mode === 'shrunk' ? 'normal' : 'shrunk',
		isAnimating: true
	}));

	// Reset animation flag after animation completes
	setTimeout(() => {
		sphereControlState.update((state) => ({ ...state, isAnimating: false }));
	}, 1000);
}

export function pushSpheres() {
	sphereControlState.update((state) => ({
		...state,
		mode: 'pushed',
		isAnimating: true
	}));

	// Reset to normal after push effect
	setTimeout(() => {
		sphereControlState.update((state) => ({
			...state,
			mode: 'normal',
			isAnimating: false
		}));
	}, 500);
}
