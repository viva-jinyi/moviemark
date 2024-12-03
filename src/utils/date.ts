export const isDataStale = (updatedAt?: string) => {
  if (!updatedAt) return true;
  
  const staleTime = 5 * 60 * 1000; // 5분
  return Date.now() - new Date(updatedAt).getTime() > staleTime;
}; 