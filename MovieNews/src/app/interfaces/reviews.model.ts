export interface AuthorDetails {
    name?: string;
    username?: string;
    avatar_path?: string;
    rating?: number;
    user_id?: string;
}

export interface Review {
    id?: string;
    author?: string;
    author_details?: AuthorDetails;
    content?: string;
    created_at?: string;
    iso_639_1?: string;
    media_id?: number;
    media_title?: string;
    media_type?: string;
    updated_at?: Date;
    url?: string;
}

export interface Reviews extends Array<Review> {}

export interface ReviewsListResponse {
	page?: number;
	results?: Review;
	total_pages?: number;
	total_results?: number;
}


