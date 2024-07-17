import {
  Home as HomeIcon,
  Search,
  Library,
  ChevronLeft,
  ChevronRight,
  Play,
  Shuffle,
  SkipBack,
  SkipForward,
  Repeat,
  Mic2,
  LayoutList,
  Laptop2,
  Volume,
  Maximize,
} from "lucide-react";

import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <nav className="space-y-5">
            <a
              href=""
              className="flex items-center gap-2 text-xs font-semibold text-zinc-200"
            >
              <HomeIcon />
              Home
            </a>
            <a
              href=""
              className="flex items-center gap-2 text-xs font-semibold text-zinc-200"
            >
              <Search />
              Search
            </a>
            <a
              href=""
              className="flex items-center gap-2 text-xs font-semibold text-zinc-200"
            >
              <Library />
              Your library
            </a>
          </nav>
          <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-2">
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Chill Vibes
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Workout Hits
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Top 40
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Jazz Classics
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Indie Mix
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Throwback Jams
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Hip Hop Essentials
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Party Playlist
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Relax & Unwind
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Acoustic Favourites
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Rock Anthems
            </a>
          </nav>
        </aside>
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>

          <h1 className="font-semibold text-3xl mt-10">Good afternoon</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            {Array.from({ length: 6 }).map((_, index) => (
              <a
                href="#"
                key={index}
                className="group bg-white/10 rounded overflow-hidden flex items-center gap-4 hover:bg-white/20 transitions-colors"
              >
                <Image
                  src="/album.jpeg"
                  alt="Spotify"
                  width={104}
                  height={104}
                />
                <strong>My Beautiful Dark Twisted Fantasy</strong>
                <button className="p-2 rounded-full bg-green-500 text-black ml-auto mr-4 invisible group-hover:visible">
                  <Play className="pl-0.2" />
                </button>
              </a>
            ))}
          </div>

          <h2 className="font-semibold text-2xl mt-10">Made for Luiz Felipe</h2>

          <div className="grid grid-cols-5 gap-4 mt-4">
            {Array.from({ length: 5 }).map((_, index) => (
              <a
                href="#"
                key={index}
                className="bg-white/5 p-3 rounded hover:bg-white/10 flex flex-col gap-2"
              >
                <Image
                  src="/album2.jpg"
                  className="w-full"
                  alt="Spotify"
                  width={104}
                  height={104}
                />
                <strong>Daily Mix 1</strong>
                <span className="text-s text-zinc-500">
                  Kanye West, Metallica, Matanza and more
                </span>
              </a>
            ))}
          </div>
        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6 items-center justify-between flex flex-row fixed bottom-0 w-full">
        <div className="flex items-center gap-2">
          <Image src="/album2.jpg" alt="Spotify" width={64} height={64} />
          <div className="flex flex-col">
            <strong className="font-normal">Good Morning</strong>
            <span className="text-xs">Kanye West</span>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-6">
            <Shuffle size={20} className=" text-zinc-200" />
            <SkipBack size={20} className="text-zinc-200" />
            <button className="p-2 rounded-full bg-white text-black">
              <Play className="pl-0.2" />
            </button>
            <SkipForward size={20} className="text-zinc-200" />
            <Repeat size={20} className="text-zinc-200" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-zinc-400">0:31</span>
            <div className="h-1 rounded-full w-96 bg-zinc-600">
              <div className="bg-zinc-200 w-40 h-1 rounded-full"></div>
            </div>
            <span className="text-xs text-zinc-400">2:14</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Mic2 size={20} className="text-zinc-200" />
          <LayoutList size={20} className="text-zinc-200" />
          <Laptop2 size={20} className="text-zinc-200" />
          <div className="flex items-center gap-2">
            <Volume size={20} className="text-zinc-200" />
            <div className="h-1 rounded-full w-24 bg-zinc-600">
              <div className="bg-zinc-200 w-10 h-1 rounded-full"></div>
            </div>
          </div>
          <Maximize size={20} className="text-zinc-200" />
        </div>
      </footer>
    </div>
  );
}
