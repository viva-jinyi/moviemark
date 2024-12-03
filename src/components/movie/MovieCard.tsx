import Image from "next/image";

import { Movie } from "@/types/movie";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {

	if (!movie) return null;

	return (
		<div className="p-4 rounded-xl bg-gray-800 hover:bg-gray-700 transition-colors">
			<div className="relative aspect-[2/3] rounded-lg overflow-hidden">
				<Image
					src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
					alt={movie.title}
					fill
					className="object-cover"
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				/>
			</div>
			<h3 className="mt-4 text-lg font-medium text-white">{movie.title}</h3>
			<p className="mt-1 text-sm text-gray-400">{movie.release_date}</p>
		</div>
	);
};

export default MovieCard;