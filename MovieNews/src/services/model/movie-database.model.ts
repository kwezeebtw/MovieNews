export interface MovieDatabaseModel {
    id: number;
    category: string;
    date: string;
    movieId: number;
    original_title: string;
    vote_average: number;
    overview: string;
    genres: Array<String>;
    popularity: number;
    poster_path: string;
    release_date: string;
    status: string;
    userId: string;
    watched: boolean;
}