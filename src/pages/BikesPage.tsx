import { useSearchParams } from "react-router-dom";
import { useBikes } from "../hooks/useBikes";
import BikeCard from "../components/BikeCard";
import Pagination from "../components/Pagination";
import { useBikesCount } from "../hooks/useBikeCount";
import { useBikesStore } from "../store/useBikesStore";
import { CiSearch } from "react-icons/ci";
import { IoIosWarning } from "react-icons/io";
import { MdError } from "react-icons/md";

export default function BikesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("page") || 1);
  const query = searchParams.get("query") || "";
  // const [inputQuery, setInputQuery] = useState(query);
  const inputQuery = useBikesStore((state) => state.query);
  const setInputQuery = useBikesStore((state) => state.setQuery);

  const { data, isLoading, isError, isPlaceholderData } = useBikes({
    page,
    query,
  });
  const { data: bikesCount, isLoading: bikesCountLoading } = useBikesCount({
    query,
  });

  if (isLoading) {
    return (
      <div className="p-8 text-center h-screen flex items-center justify-center font-bold text-2xl">
        Loading bikes...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="p-8 text-center text-red-500 flex flex-col items-center gap-4">
        <MdError size={75} color="red" />
        <p className="font-bold">
          {" "}
          Failed to load bikes! Please try again later.
        </p>
      </div>
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

      <div className="mb-6 w-sm flex border rounded-l pl-2 overflow-hidden rounded-r-xl">
        <input
          type="text"
          value={inputQuery}
          onChange={(e) => {
            setInputQuery(e.target.value);
          }}
          placeholder="Search bikes..."
          className=" w-full focus-visible:outline-none"
        />
        <button
          type="button"
          onClick={() => setSearchParams({ page: "1", query: inputQuery })}
          className="bg-blue-500 text-white p-2"
        >
          <CiSearch size={20} />
        </button>
      </div>
      {data?.bikes.length === 0 && (
        <div className="text-center text-gray-500 flex flex-col items-center gap-4">
          <IoIosWarning color="yellow" size={50} /> <p>No bikes found.</p>
        </div>
      )}
      {data?.bikes.length !== 0 && (
        <div
          className={`space-y-5 ${
            (isPlaceholderData || isLoading) && "opacity-20"
          }`}
        >
          {data?.bikes.map((bike) => (
            <BikeCard key={bike.id} bike={bike} />
          ))}
        </div>
      )}

      {!bikesCountLoading && (
        <Pagination
          page={page}
          total={bikesCount?.proximity || 50}
          onPageChange={(newPage) => setSearchParams({ page: String(newPage) })}
        />
      )}
    </div>
  );
}
