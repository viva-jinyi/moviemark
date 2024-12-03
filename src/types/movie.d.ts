export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
  vote_average: number;
}

export interface MovieListResponse {
  total_pages: number;
  total_items: number;
  page: number;
  movies: Movie[];
}