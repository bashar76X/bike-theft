import { useQuery } from "@tanstack/react-query";
import { bikeApi } from "../configs/axios-client";
import type { Bike } from "../types/Bike";

type BikesResponse = {
  bikes: Bike[];
  total: number;
};

type Params = {
  page: number;
  query?: string;
};

export const apiParams = {
  location: "Munich",
  stolenness: "proximity",
  distance: 100,
  query: "",
};

const fetchBikes = async ({ page, query }: Params) => {
  const { data } = await bikeApi.get("/search", {
    params: {
      ...apiParams,
      page,
      per_page: 10,
      query: query || undefined,
    },
  });

  return data;
};

export const useBikes = ({ page, query }: Params) => {
  return useQuery<BikesResponse>({
    queryKey: ["bikes", page, { ...apiParams, query }],
    queryFn: () => fetchBikes({ page, query }),
    placeholderData: (prev) => {
      return prev;
    },
  });
};
