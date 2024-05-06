import { useQuery } from "@tanstack/react-query";
import { getData } from "../services/getData";

function useProductsData() {
const { data = [], isLoading } = useQuery({
  queryKey: ["products"],
  queryFn: getData,
});

return {data,isLoading}
}

export default useProductsData
