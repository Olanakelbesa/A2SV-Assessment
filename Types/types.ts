export interface Author {
	_id: string;
	name: string;
	email: string;
	image: string;
	role: string;
}

export interface Blog {
	_id: string;
	image: string;
	title: string;
	description: string;
	author: Author | null; // Allow null if the author can be missing
	isPending: boolean;
	tags: string[];
	likes: number;
	relatedBlogs: any[]; // Adjust type as needed
	skills: string[];
	createdAt: string;
	updatedAt: string;
}

export type BlogData = Blog[];
