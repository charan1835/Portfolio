export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-900">
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-purple-400"></div>
    </div>
  );
}