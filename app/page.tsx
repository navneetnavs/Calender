import CalendarRoot from '../components/CalendarRoot';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 flex items-center justify-center p-8 md:p-16">
      {/* Wall shadow effect */}
      <div className="relative">
        {/* Calendar container with realistic shadow */}
        <div className="relative drop-shadow-2xl">
          <CalendarRoot />
        </div>
      </div>
    </main>
  );
}