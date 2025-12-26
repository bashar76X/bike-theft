import { useQuery } from "@tanstack/react-query";
import { bikeApi } from "../configs/axios-client";
import type { Bike } from "../types/Bike";

type BikesResponse = {
  bikes: Bike[];
  total: number;
};

type Params = {
  page: number;
};

export const apiParams = {
  location: "Munich",
  stolenness: "proximity",
  distance: 100,
};

const fetchBikes = async (page: number) => {
  const { data } = await bikeApi.get("/search", {
    params: {
      ...apiParams,
      page,
      per_page: 10,
    },
  });

  return data;
};

export const useBikes = ({ page }: Params) => {
  return useQuery<BikesResponse>({
    queryKey: ["bikes", page],
    queryFn: () => fetchBikes(page),
  });
};
