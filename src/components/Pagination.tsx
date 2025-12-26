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
        onClick={() => onPageChange(page - 1)}
        className="px-4 py-2 rounded bg-gray-200 disabled:opacity-50"
      >
        Prev
      </button>
      <span className="text-sm">
        Page {page} of {totalPages}
      </span>
      <button
        type="button"
        disabled={page === totalPages}
        onClick={() => onPageChange(page + 1)}
        className="px-4 py-2 rounded bg-gray-200 disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}
