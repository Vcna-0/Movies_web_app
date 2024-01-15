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
}

export interface IFormInputSearch {
   searchName: string;
}

export enum ETypeCard {
   trendingCard = 'trendingCard',
   classicCard = 'classicCard',
}
