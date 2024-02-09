export interface MovieResult {
   id: number;
   title: string;
   name: string;
   original_title: string;
   poster_path: string;
   backdrop_path: string;
   media_type: string;
   original_language: string;
   popularity: number;
   first_air_date: string;
   release_date: string;
}

export interface TvResult {
   id: number;
   title: string;
   name: string;
   original_title: string;
   poster_path: string;
   backdrop_path: string;
   media_type: string;
   original_language: string;
   popularity: number;
   first_air_date: string;
   release_date: string;
}

export interface MediaDetailsType {
   id: number;
   title: string;
   name: string;
   original_title: string;
   poster_path: string;
   backdrop_path: string;
   media_type: string;
   original_language: string;
   popularity: number;
   first_air_date: string;
   release_date: string;
   genres: { id: number; name: string }[];
   runtime: number;
   vote_average: number;
   vote_count: number;
   overview: string;
}

export interface CastingsType {
   id: number;
   name: string;
   character: string;
   profile_path: string;
}

export type SliderMovieType = MovieResult | TvResult;

export type SliderCastingsType = CastingsType;

export interface IFormInputSearch {
   searchName: string;
}

export enum ETypeCard {
   trendingCard = 'trendingCard',
   classicCard = 'classicCard',
   castingCard = 'castingCard',
}
