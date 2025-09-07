export default function LoadingSpinner() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-800 to-black flex items-center justify-center">
      <div className="flex flex-col items-center space-y-4">
        <div className="animate-spin rounded-full h-12 w-12 border-2 border-amber-400 border-t-transparent"></div>
        <p className="text-amber-400 font-semibold">Loading...</p>
      </div>
    </div>
  );
}