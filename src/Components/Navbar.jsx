import { 
    MessageCircleDashed,
    Settings,UserRoundCog,
    Handshake,
    FolderBookmark,
    Menu,
    LogOut 
} from 'lucide-react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
  const user = useSelector((store) => store.user)//subscribe the redux store
  const navLinkClass = ({ isActive }) =>
  isActive
    ? "text-secondary border-b-2 border-secondary font-semibold pb-1"
    : "text-slate-600 hover:text-secondary font-medium transition";

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
              <li><NavLink to="/discover" className={navLinkClass}>Discover Developers</NavLink></li>
              <li><NavLink to="/projects" className={navLinkClass}>Find Projects</NavLink></li>
              <li><NavLink to="/events" className={navLinkClass}>Events</NavLink></li>
              <li><NavLink to="/jobs" className={navLinkClass}>Jobs</NavLink></li>

              <div className="divider my-2"></div>

              <li><NavLink className={navLinkClass}>Profile</NavLink></li>
              <li><NavLink className={navLinkClass}>Settings</NavLink></li>
              <li><Link className="text-red-500">Logout</Link></li>
            </ul>
          </div>

          <Link to="/">
            <div className="w-11 h-11 rounded-xl bg-secondary text-white flex items-center justify-center font-bold text-lg shadow-md">
              {"</>"}
            </div>
          </Link>

          <Link to="/">
            <div>
              <h2 className="font-bold text-xl text-slate-800">
                DevConnect
              </h2>

              <p className="text-xs text-slate-500">
                Developer Community
              </p>
            </div>
          </Link>
        </div>

        {/* Desktop Menu */}

        <nav className="hidden lg:flex items-center gap-8">
          <NavLink
            to="/discover"
            className={navLinkClass}
          >
            Discover Developers
          </NavLink>

          <NavLink
            to="/projects"
            className={navLinkClass}
          >
            Find Projects
          </NavLink>

          <NavLink
            to="/events"
            className={navLinkClass}
          >
            Events
          </NavLink>

          <NavLink
            to="/jobs"
            className={navLinkClass}
          >
            Jobs
          </NavLink>

        </nav>

        {/* Right Side */}

        <div className="flex items-center gap-3">

          {user ? (
            <>
              {/* Avatar */}
              <p className="md:block hidden">Welcome {user.firstName}</p>
              <div className="dropdown dropdown-end">

                <div
                  tabIndex={0}
                  className="relative cursor-pointer"
                >
                  
                  <img
                    src={user.profilePictures[0]}
                    alt=""
                    className="w-11 h-11 rounded-full border-2 border-secondary object-cover"
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
                        src={user.profilePictures[0]}
                        className="w-14 h-14 rounded-full"
                        alt=""
                      />

                      <div>

                        <p className="font-bold text-gray-800 capitalize">
                          {user.firstName} {user.lastName}
                        </p>

                        <p className="text-sm text-gray-500 capitalize">
                          {user.occupation}
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
            <Link to="/login"> <button className="btn bg-black text-white border-black rounded-full">
              Login
            </button>
            </Link>

              <button className="btn btn-secondary rounded-full px-6 hidden md:block">
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