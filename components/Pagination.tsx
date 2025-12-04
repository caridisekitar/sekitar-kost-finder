export default function Pagination() {
  return (
    <div className="flex justify-between items-center mt-8 text-sm">
      <button className="text-gray-500 hover:text-black">← Previous</button>

      <div className="flex gap-2">
        <span className="w-8 h-8 flex items-center justify-center bg-black text-white rounded-full">1</span>
        <span className="w-8 h-8 flex items-center justify-center">2</span>
        <span className="w-8 h-8 flex items-center justify-center">3</span>
        <span className="w-8 h-8 flex items-center justify-center">...</span>
        <span className="w-8 h-8 flex items-center justify-center">67</span>
        <span className="w-8 h-8 flex items-center justify-center">68</span>
      </div>

      <button className="text-gray-500 hover:text-black">Next →</button>
    </div>
  );
}
