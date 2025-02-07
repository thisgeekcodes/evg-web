// src/app/teams/page.js

export default function TeamsPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section
        className="relative h-64 md:h-96 bg-cover bg-center"
        style={{ backgroundImage: "url('/teams-banner.jpg')" }}
      >
        {/* Optional overlay for better text contrast */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            Our Teams
          </h1>
        </div>
      </section>

      {/* Team Overview Section */}
      <section className="py-12 px-4 md:px-0 container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">Apex Legends Team</h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-300">
            Our Apex Legends squad is built on precision, teamwork, and the
            relentless pursuit of victory. Meet our team members who are
            dominating the competitive scene.
          </p>
        </div>

        {/* Roster Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sample Team Member Card */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            <img
              src="/players/player1.jpg"
              alt="Player 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-white">Player 1</h3>
              <p className="mt-2 text-gray-400">Role: Duelist</p>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            <img
              src="/players/player2.jpg"
              alt="Player 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-white">Player 2</h3>
              <p className="mt-2 text-gray-400">Role: Support</p>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            <img
              src="/players/player3.jpg"
              alt="Player 3"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-white">Player 3</h3>
              <p className="mt-2 text-gray-400">Role: Sniper</p>
            </div>
          </div>
        </div>

        {/* Additional Sections */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Our Mission & Values
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300">
            At EVG, we believe in excellence, teamwork, and integrity both on
            and off the field. Our teams are not just about competition—they
            represent a community of dedicated gamers who push each other to
            reach new heights.
          </p>
        </div>
      </section>
    </main>
  );
}
