import apiClient from '../config/apiClient';
import type { Post } from '../types/post';

export const getPosts = async (): Promise<Post[]> => {
  const response = await apiClient.get('/posts');
  return response.data;
};
