import { 
    MessageCircleDashed,
    Settings,UserRoundCog,
    Handshake,
    FolderBookmark,
    Menu,
    LogOut 
} from 'lucide-react';

const Navbar = () => {
  const isLoggedIn = true;

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-xl shadow-sm">
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">

          {/* Mobile Menu */}
          <div className="dropdown lg:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
            <Menu color="#000000" />
            </label>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[100] w-64 rounded-2xl bg-white p-3 shadow-xl border border-gray-200"
            >
              <li><a className='text-slate-600'>Home</a></li>
              <li><a className='text-slate-600'>Discover</a></li>
              <li><a className='text-slate-600'>Developers</a></li>
              <li><a className='text-slate-600'>Projects</a></li>
              <li><a className='text-slate-600'>Communities</a></li>
              <li><a className='text-slate-600'>Events</a></li>
              <li><a className='text-slate-600'>Jobs</a></li>

              <div className="divider my-2"></div>

              <li><a className='text-slate-600'>Profile</a></li>
              <li><a className='text-slate-600'>Settings</a></li>
              <li><a className="text-red-500">Logout</a></li>
            </ul>
          </div>

          <div className="w-11 h-11 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold text-lg shadow-md">
            {"</>"}
          </div>

          <div>
            <h2 className="font-bold text-xl text-slate-800">
              DevConnect
            </h2>

            <p className="text-xs text-slate-500">
              Developer Community
            </p>
          </div>
        </div>

        {/* Desktop Menu */}

        <nav className="hidden lg:flex items-center gap-8">

          <a
            href="#"
            className="font-semibold text-indigo-600 border-b-2 border-indigo-600 pb-1"
          >
            Home
          </a>

          <a
            href="#"
            className="font-medium text-slate-600 hover:text-indigo-600 transition"
          >
            Discover
          </a>

          <a
            href="#"
            className="font-medium text-slate-600 hover:text-indigo-600 transition"
          >
            Developers
          </a>

          <a
            href="#"
            className="font-medium text-slate-600 hover:text-indigo-600 transition"
          >
            Projects
          </a>

          <a
            href="#"
            className="font-medium text-slate-600 hover:text-indigo-600 transition"
          >
            Communities
          </a>

          <a
            href="#"
            className="font-medium text-slate-600 hover:text-indigo-600 transition"
          >
            Events
          </a>

          <a
            href="#"
            className="font-medium text-slate-600 hover:text-indigo-600 transition"
          >
            Jobs
          </a>

        </nav>

        {/* Right Side */}

        <div className="flex items-center gap-3">

          {isLoggedIn ? (
            <>
              {/* Avatar */}

              <div className="dropdown dropdown-end">

                <div
                  tabIndex={0}
                  className="relative cursor-pointer"
                >
                  <img
                    src="https://i.pravatar.cc/150?img=12"
                    alt=""
                    className="w-11 h-11 rounded-full border-2 border-indigo-500 object-cover"
                  />

                  <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-white"></span>

                </div>

                <ul
                  tabIndex={0}
                  className="menu dropdown-content mt-4 w-72 rounded-2xl bg-white p-3 shadow-2xl border border-gray-200 z-[100]"
                >
                  <li className="pointer-events-none mb-3">

                    <div className="flex gap-3">

                      <img
                        src="https://i.pravatar.cc/150?img=12"
                        className="w-14 h-14 rounded-full"
                        alt=""
                      />

                      <div>

                        <p className="font-bold text-gray-800">
                          John Carter
                        </p>

                        <p className="text-sm text-gray-500">
                          Full Stack Developer
                        </p>

                        <div className="badge badge-success badge-sm mt-2">
                          Online
                        </div>

                      </div>

                    </div>

                  </li>

                  <div className="divider my-1"></div>

                  <li>
                    <a className="rounded-xl text-gray-700 hover:bg-indigo-50">
                    <UserRoundCog /> My Profile
                    </a>
                  </li>

                  <li>
                    <a className="rounded-xl text-gray-700 hover:bg-indigo-50">
                    <Handshake /> Connections
                    </a>
                  </li>

                  <li>
                    
                    <a className="rounded-xl text-gray-700 hover:bg-indigo-50">
                    <MessageCircleDashed /> Messages
                    </a>
                  </li>

                  <li>
                    <a className="rounded-xl text-gray-700 hover:bg-indigo-50">
                    <FolderBookmark /> My Projects
                    </a>
                  </li>

                  <li>
                    <a className="rounded-xl text-gray-700 hover:bg-indigo-50">
                    <Settings /> Settings
                    </a>
                  </li>

                  <div className="divider my-1"></div>

                  <li>
                    <a className="rounded-xl text-red-500 hover:bg-red-50">
                    <LogOut color="#000000" /> Logout
                    </a>
                  </li>

                </ul>

              </div>
            </>
          ) : (
            <>
              <button className="btn btn-ghost rounded-full">
                Login
              </button>

              <button className="btn btn-primary rounded-full px-6">
                Join Free
              </button>
            </>
          )}

        </div>
      </div>
    </header>
  );
};

export default Navbar;