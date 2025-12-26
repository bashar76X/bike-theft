import { useSearchParams } from "react-router-dom";
import { useBikes } from "../hooks/useBikes";
import BikeCard from "../components/BikeCard";
import Pagination from "../components/Pagination";
import { useBikesCount } from "../hooks/useBikeCount";

export default function BikesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("page") || 1);

  const { data, isLoading, isError } = useBikes({ page });
  const { data: bikesCount } = useBikesCount();

  if (isLoading) {
    return <div className="p-8 text-center">Loading bikes...</div>;
  }

  if (isError) {
    return (
      <div className="p-8 text-center text-red-500">Failed to load bikes</div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
   
      <div className="mb-6">
        <h1 className="text-2xl font-bold">
          🚲 Reported Bike Thefts — Munich ({bikesCount?.proximity})
        </h1>
        <p className="text-gray-600 text-sm">
          Showing stolen bikes reported near Munich
        </p>
      </div>

     
      <div className="space-y-5 ">
        {data?.bikes.map((bike) => (
          <BikeCard key={bike.id} bike={bike} />
        ))}
      </div>

  
      <Pagination
        page={page}
        total={bikesCount?.proximity || 50}
        onPageChange={(newPage) => setSearchParams({ page: String(newPage) })}
      />
    </div>
  );
}
