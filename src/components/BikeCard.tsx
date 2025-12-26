import type { Bike } from "../types/Bike";
import { CiCalendar } from "react-icons/ci";
import { IoLocationSharp } from "react-icons/io5";

import { unixToDate } from "../utils/unixToDate";

type Props = {
  bike: Bike;
};

function BikeCard({ bike }: Props) {
  return (
    <a
      href={bike.url}
      target="_blank"
      rel="noreferrer"
      className="flex gap-4 bg-white rounded-lg p-4 hover:bg-gray-50 transition border"
    >
      <div className="w-48 h-42 bg-gray-100 rounded flex items-center justify-center shrink-0">
        {bike.thumb ? (
          <img
            src={bike.thumb}
            alt={bike.title}
            className="w-full h-full object-cover rounded"
          />
        ) : (
          <span className="text-gray-400 text-sm">No image</span>
        )}
      </div>

      <div className="flex-1 space-y-1">
        <h3 className="font-semibold text-blue-800 text-xl hover:underline">
          {bike.title}
        </h3>
        {bike.description && <p>{bike.description} lorem</p>}

        <p className="text-sm text-gray-600">
          Manufacturer: {bike.manufacturer_name} • {bike.year}
        </p>

        <p className="text-sm text-gray-600">
          Frame Colors: {bike.frame_colors.join(", ")}
        </p>

        <p className="text-sm text-gray-500 flex items-center-safe gap-1">
          <IoLocationSharp color="red" size={15} /> {bike.stolen_location}
        </p>
      </div>

      <div className="text-right space-y-1">
        <span className="inline-block px-2 py-1 text-xs font-semibold rounded bg-red-100 text-red-600">
          {bike?.status?.toUpperCase()}
        </span>

        <p className=" flex items-center gap-2">
          <CiCalendar /> {unixToDate(bike.date_stolen)}
        </p>
      </div>
    </a>
  );
}

export default BikeCard;
