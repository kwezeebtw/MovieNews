

export interface cast{
    adult:boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string;
    cast_id: number;
    character: string
    credit_id: string;
    order: number;
}


export interface crew{
    adult:boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string;
    credit_id: string;
    department: string;
    job: string;
}

export interface People {
   id: number;
   cast: cast;
   crew: crew;
}

export interface Peoples extends Array<People> {}

export interface PeopleListResponse{
	page: number;
	results: People;
	total_pages: number;
	total_results: number;
}