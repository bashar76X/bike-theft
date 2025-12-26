import { useQuery } from "@tanstack/react-query";
import { bikeApi } from "../configs/axios-client";
import { apiParams } from "./useBikes";

type BikeCountResponse = {
  proximity: number;
  stolen: number;
  non: number;
};

const fetchBikesCount = async () => {
  const { data } = await bikeApi.get("search/count", {
    params: { ...apiParams },
  });

  return data;
};

export const useBikesCount = () => {
  return useQuery<BikeCountResponse>({
    queryKey: ["bike-count"],
    queryFn: fetchBikesCount,
  });
};
