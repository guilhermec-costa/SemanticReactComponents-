interface UseFetchOptions {
    method?: string;
    headers?: Record<string, string>;
    body?: any;
}
declare const useFetch: <T>(url: string, options?: UseFetchOptions) => {
    data?: T;
    error?: string;
    loading: boolean;
    refetch: () => void;
};
export default useFetch;
//# sourceMappingURL=useFetch.d.ts.map