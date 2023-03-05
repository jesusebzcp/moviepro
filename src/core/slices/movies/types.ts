export interface MoviePopulateArgs {
  page: number;
}
export interface MovieSimilarArgs {
  id: number;
}
export interface MovieSearch {
  search: string;
}
export interface ResponseMoviePopulate {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: OriginalLanguage;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export enum OriginalLanguage {
  En = 'en',
  Es = 'es',
  It = 'it',
  Ko = 'ko',
}
