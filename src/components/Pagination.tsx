import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";

type Props = {
  page: number;
  total: number;
  onPageChange: (page: number) => void;
};

export default function Pagination({ page, total, onPageChange }: Props) {
  const totalPages = Math.ceil(total / 10);

  if (totalPages <= 1) return null;

  return (
    <div className=" flex justify-center items-center gap-4 mt-8">
      <button
        type="button"
        disabled={page === 1}
        onClick={() => onPageChange(1)}
        className="cursor-pointer p-2 rounded-full bg-gray-200 disabled:opacity-50"
      >
        <MdKeyboardDoubleArrowLeft size={20} />
      </button>
      <button
        type="button"
        disabled={page === 1}
        onClick={() => onPageChange(page - 1)}
        className="cursor-pointer p-2 rounded-full bg-gray-200 disabled:opacity-50"
      >
        <MdKeyboardArrowLeft size={20} />
      </button>
      <div className="text-sm bg-gray-200 px-8 py-2 rounded-md">
        Page <span className="font-bold "> {page} </span>
        of <span className="font-bold "> {totalPages}</span>
      </div>
      <button
        type="button"
        disabled={page === totalPages}
        onClick={() => onPageChange(page + 1)}
        className="cursor-pointer p-2 rounded-full bg-gray-200 disabled:opacity-50"
      >
        <MdKeyboardArrowRight size={20} />
      </button>
      <button
        type="button"
        disabled={page === totalPages}
        onClick={() => onPageChange(totalPages)}
        className="cursor-pointer p-2 rounded-full bg-gray-200 disabled:opacity-50"
      >
        <MdKeyboardDoubleArrowRight size={20} />
      </button>
    </div>
  );
}
