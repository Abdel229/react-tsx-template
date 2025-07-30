import { useQuery } from '@tanstack/react-query';
import { getPosts } from '../api/postsApi';

/**
 * Custom hook to fetch a list of posts using TanStack Query.
 *
 * @returns {object} An object containing post data, loading state, and error state.
 */
export const usePosts = () => {
  return useQuery({ queryKey: ['posts'], queryFn: getPosts });
};
