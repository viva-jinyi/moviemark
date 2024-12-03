"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";

import { getMovies } from "@/api/movie";
import { MovieListResponse } from "@/types/movie";

import MovieCard from "./MovieCard";

/**
 * 영화 목록을 보여주는 컴포넌트
 *
 * 주요 기능:
 * 1. 영화 데이터를 API로부터 가져옴
 * 2. 무한 스크롤 구현
 * 3. 로딩/에러 상태 처리
 *
 * 사용된 기술:
 * - @tanstack/react-query의 useInfiniteQuery:
 *   페이지네이션된 데이터를 자동으로 관리해주는 훅
 *
 * - react-intersection-observer의 useInView:
 *   특정 요소가 화면에 보이는지 감지하는 훅 (무한 스크롤 구현에 사용)
 */
const MovieList = () => {
	// 화면에 보이는지 감지할 요소의 ref와 상태
	const { ref, inView } = useInView({
		threshold: 0.1,
		delay: 100,
	});

	// 영화 데이터 불러오기
	const {
		data,
		isLoading,
		isError,
		hasNextPage,
		fetchNextPage,
		isFetchingNextPage,
	} = useInfiniteQuery<MovieListResponse>({
		queryKey: ["movies"],
		queryFn: ({ pageParam = 1 }) => getMovies(pageParam as number),
		getNextPageParam: (lastPage, allPages) => {
			const nextPage = allPages.length + 1;
			return nextPage <= lastPage.total_pages ? nextPage : undefined;
		},
		initialPageParam: 1,
		staleTime: 60 * 1000,
	});

	// 화면에 보이고, 다음 페이지가 있고, 현재 페이지를 가져오는 중이 아닐 때
	if (inView && hasNextPage && !isFetchingNextPage) {
		fetchNextPage();
	}

	// 로딩 중이거나 에러 발생 시 처리
	if (isLoading) return <p className="text-center">영화 목록을 가져오는 중...</p>;
	if (isError) return <p className="text-center">영화 목록을 불러오지 못했습니다.</p>;

	return (
		<div className="container mx-auto px-4 invisible-scroll">
			{/* 영화 카드 그리드 */}
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
				{data?.pages.map((page) =>
					page.movies.map((movie) => (
						<MovieCard key={movie.id} movie={movie} />
					))
				)}
			</div>

			{/* 무한 스크롤 감지 영역 */}
			<div ref={ref} className="h-10 mt-4">
				{isFetchingNextPage && <p className="text-center">더 불러오는 중...</p>}
			</div>
		</div>
	);
};

export default MovieList;