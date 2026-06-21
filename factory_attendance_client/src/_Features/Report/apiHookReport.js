import {useQuery} from "@tanstack/react-query";
import {GetReport} from "./apiReport.js";

function useGetReport(worker_id, month, year, enabled) {
    const query = useQuery({
        queryKey: ['monthlyReport', worker_id, month, year],
        queryFn: () => GetReport(worker_id, month, year),
        enabled: enabled,
        staleTime: 5 * 60 * 1000,
        gcTime: 5 * 60 * 1000,
        retry: (failureCount, error) => { return failureCount < 3; }
    });
    return query;
}
export {useGetReport};
