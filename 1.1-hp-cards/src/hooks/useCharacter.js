import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../api/axiosInstance";
///////////////////////////////////////////////////////////// meter en services
const fetchCharacters = async () => {
  const res = await axiosInstance.get("/characters");
  return res.data;
};
/////////////////////////////////////////////////////////////////
export default function useCharacters() {
  return useQuery({
    queryKey: ["characters"],
    queryFn: fetchCharacters,
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
}
