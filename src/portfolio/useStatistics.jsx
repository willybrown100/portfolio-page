import { useQuery } from "@tanstack/react-query"
import { getStatistics } from "../services/getData";

function useStatistics() {
const {data,isLoading}= useQuery({
queryKey:["statistics"],
queryFn:getStatistics
})
return {data,isLoading}
}

export default useStatistics;
