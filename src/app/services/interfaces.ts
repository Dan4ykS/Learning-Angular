export interface Post {
  userId?: string;
  id?: number;
  title: string;
  body: string;
}

export type requestError = string | null
