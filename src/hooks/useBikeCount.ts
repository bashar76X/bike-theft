import { useQuery } from "@tanstack/react-query";
import { bikeApi } from "../configs/axios-client";
import { apiParams } from "./useBikes";

type BikeCountResponse = {
  proximity: number;
  stolen: number;
  non: number;
};
type Params = {
  query: string;
};

const fetchBikesCount = async (query: string) => {
  const { data } = await bikeApi.get("search/count", {
    params: { ...apiParams, query },
  });

  return data;
};

export const useBikesCount = ({ query }: Params) => {
  return useQuery<BikeCountResponse>({
    queryKey: ["bike-count", { ...apiParams, query }],
    queryFn: () => fetchBikesCount(query),
  });
};
