// src/app/teams/page.js
import { FaTwitch, FaXTwitter } from "react-icons/fa6";

export default function TeamsPage() {
  const players = [
    {
      playerName: "Player 1",
      fullName: "John Doe",
      twitch: "https://twitch.tv/player1",
      twitter: "https://twitter.com/player1",
      profileImg: "/img/players/male-blank.svg",
    },
    {
      playerName: "Player 2",
      fullName: "Jane Smith",
      twitch: "https://twitch.tv/player2",
      twitter: "https://twitter.com/player2",
      profileImg: "/img/players/female-blank.svg",
    },
    {
      playerName: "Player 3",
      fullName: "Alex Johnson",
      twitch: "https://twitch.tv/player3",
      twitter: "https://twitter.com/player3",
      profileImg: "/img/players/male-blank.svg",
    },
    {
      playerName: "Player 4",
      fullName: "Sam Lee",
      twitch: "https://twitch.tv/player4",
      twitter: "https://twitter.com/player4",
      profileImg: "/img/players/female-blank.svg",
    },
    {
      playerName: "Player 5",
      fullName: "Chris Brown",
      twitch: "https://twitch.tv/player5",
      twitter: "https://twitter.com/player5",
      profileImg: "/img/players/male-blank.svg",
    },
  ];
  const supportStaff = [
    {
      role: "Coach",
      playerName: "Coach 1",
      fullName: "Michael Johnson",
      twitch: "https://twitch.tv/coach1",
      twitter: "https://twitter.com/coach1",
      profileImg: "/img/players/male-blank.svg",
    },
    {
      role: "Analyst",
      playerName: "Analyst 1",
      fullName: "Robert Brown",
      twitch: "https://twitch.tv/analyst1",
      twitter: "https://twitter.com/analyst1",
      profileImg: "/img/players/male-blank.svg",
    },
  ];
  return (
    <main className=" pt-12 min-h-screen bg-gradient-to-b from-gray-900 to-black">
      {/* Hero Section */}
      <section
        className="relative h-96 md:h-[300px] bg-cover bg-center"
        style={{ backgroundImage: "url('/teams-banner.jpg')" }}
      >
        {/* Overlay for contrast */}
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="pt-24 relative flex items-center justify-center h-full">
          <h1 className="text-4xl md:text-6xl font-bold text-white uppercase text-center">
            Apex Legends
          </h1>
        </div>
      </section>

      {/* Players Section */}
      <section className="py-12 px-4 md:px-0 container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white uppercase">Players</h2>
        </div>
        <div
          className="grid gap-8 justify-center"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 250px))",
          }}
        >
          {players.map((player, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              {/* Wrap the image with a clickable link to the player's profile */}
              <img
                src={player.profileImg}
                alt={player.playerName}
                className="w-full h-64 object-cover"
              />

              <div className="p-4 text-center">
                {/* Top line: Player Name */}
                <h3 className="text-xl font-semibold text-white">
                  {player.playerName}
                </h3>
                {/* Second line: Full Name */}
                <p className="text-base text-gray-400">{player.fullName}</p>
                {/* Third line: Twitch and Twitter links */}
                <div className="mt-2 flex justify-center space-x-4">
                  <a
                    href={player.twitch}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-500 hover:text-purple-400"
                  >
                    <FaTwitch className="w-5 h-5" />
                  </a>
                  <a
                    href={player.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-400"
                  >
                    <FaXTwitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Support Staff Section */}
      <section className="py-12 px-4 md:px-0 container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white uppercase">
            Support Staff
          </h2>
        </div>
        <div
          className="grid gap-8 justify-center"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 250px))",
          }}
        >
          {supportStaff.map((staff, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              {/* Make the staff image clickable */}
              <a
                href={staff.profileLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={staff.profileImg}
                  alt={staff.playerName}
                  className="w-full h-64 object-cover"
                />
              </a>
              <div className="p-4 text-center">
                {/* Line 1: Role */}
                <h3 className="text-xl font-semibold text-white">
                  {staff.role}
                </h3>
                {/* Line 2: Player Name (or nickname/title) */}
                <h4 className="text-lg text-white mt-1">{staff.playerName}</h4>
                {/* Line 3: Full Name */}
                <p className="text-base text-gray-400">{staff.fullName}</p>
                {/* Line 4: Social Links */}
                <div className="mt-2 flex justify-center space-x-4">
                  <a
                    href={staff.twitch}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-500 hover:text-purple-400"
                  >
                    <FaTwitch className="w-5 h-5" />
                  </a>
                  <a
                    href={staff.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-400"
                  >
                    <FaXTwitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
