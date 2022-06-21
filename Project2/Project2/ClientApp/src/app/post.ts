export interface Post {
    id?: string;
    text: string;
    isPinned: boolean;
    createdDate: Date;
    filename?: string;
}