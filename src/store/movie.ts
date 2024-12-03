import { atom, selectorFamily } from "recoil";

import { Movie } from "@/types/movie";

// 영화 데이터를 Record 형태로 저장
interface MovieState {
  // Record type은 string이 아닌 number로 하면
  // 알아서 숫자를 내림차순으로 정렬하여 string을 쓰는 것이 좋다.
  movies: Record<string, Movie>;
}

export const movieState = atom<MovieState>({
	key: "movieState",
	default: {
		movies: {},
	},
});

// 특정 ID의 영화 데이터를 가져오는 selector
export const movieByIdSelector = selectorFamily<Movie | undefined, string>({
	key: "movieById",
	get: (movieId: string) => ({ get }) => {
		const state = get(movieState);
		return state.movies[movieId];
	},
});