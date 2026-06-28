import { Bell, Search } from "lucide-react";

function Navbar() {
  return (
    <header className="flex h-20 items-center justify-between border-b border-slate-800 bg-[#0B1120] px-8">
      <div className="relative w-[450px]">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
        />

        <input
          type="text"
          placeholder="Search businesses..."
          className="w-full rounded-xl border border-slate-700 bg-[#111827] py-3 pl-11 pr-4 outline-none focus:border-blue-500"
        />
      </div>

      <div className="flex items-center gap-5">
        <Bell className="cursor-pointer text-slate-400" />

        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 font-bold">
            S
          </div>

          <div>
            <h3 className="font-semibold">Shreyash</h3>
            <p className="text-sm text-slate-400">Founder</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
