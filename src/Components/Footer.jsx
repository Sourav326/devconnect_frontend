import { Link,NavLink } from "react-router";
const Footer = () => {
  const navLinkClass = ({ isActive }) =>
  isActive
    ? "text-secondary border-b-2 border-secondary font-semibold pb-1"
    : "text-slate-600 hover:text-secondary font-medium transition";
    return (
      <footer className="bg-slate-50 border-t border-slate-200 pt-10">
        <div className="max-w-7xl mx-auto px-6 py-14">
  
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
  
            {/* Logo */}
  
            <div className="lg:col-span-2">
  
              <h2 className="text-3xl font-bold text-secondary">
                DevConnect
              </h2>
  
              <p className="mt-4 text-gray-600 leading-7">
                Connect with developers, collaborate on exciting
                projects, prepare for interviews, contribute to
                open source and grow your career together.
              </p>
  
             
  
            </div>
  
            {/* Platform */}
  
            <div>
  
              <h3 className="font-bold text-gray-800 mb-4">
                Platform
              </h3>
  
              <ul className="space-y-3 text-gray-600">
  
                <li>
                  <NavLink to="/discover" className={navLinkClass}>
                    Discover Developers
                  </NavLink>
                </li>
  
                <li>
                  <NavLink to="/projects" className={navLinkClass}>
                    Find Projects
                  </NavLink>
                </li>
  
                <li>
                  <NavLink to="/events" className={navLinkClass}>
                    Events
                  </NavLink>
                </li>
  
                <li>
                  <NavLink to="/jobs" className={navLinkClass}>
                    Jobs
                  </NavLink>
                </li>
  
              </ul>
  
            </div>
  
            {/* Resources */}
  
            <div>
  
              <h3 className="font-bold text-gray-800 mb-4">
                Resources
              </h3>
  
              <ul className="space-y-3 text-gray-600">
  
                <li><a className="hover:text-indigo-600">Blog</a></li>
  
                <li><a className="hover:text-indigo-600">Interview Prep</a></li>
  
                <li><a className="hover:text-indigo-600">Open Source</a></li>
  
                <li><a className="hover:text-indigo-600">Documentation</a></li>
  
                <li><a className="hover:text-indigo-600">Help Center</a></li>
  
              </ul>
  
            </div>
  
            {/* Company */}
  
            <div>
  
              <h3 className="font-bold text-gray-800 mb-4">
                Company
              </h3>
  
              <ul className="space-y-3 text-gray-600">
  
                <li><NavLink to="/about" className={navLinkClass}>About</NavLink></li>
  
                <li><a className={navLinkClass}>Contact</a></li>
  
                <li><NavLink to="privacy-policy" className={navLinkClass}>Privacy Policy</NavLink></li>
  
                <li><a className={navLinkClass}>Terms of Service</a></li>
  
                <li><a className={navLinkClass}>Support</a></li>
  
              </ul>
  
            </div>
  
          </div>
  
          {/* Newsletter */}
  
          <div className="border-t border-slate-200 mt-12 pt-10 flex flex-col lg:flex-row justify-between items-center gap-6">
  
            <div>
  
              <h3 className="text-xl font-bold text-gray-800">
                Stay Updated 🚀
              </h3>
  
              <p className="text-gray-600 mt-1">
                Get product updates and developer news.
              </p>
  
            </div>
  
            <div className="flex w-full lg:w-auto gap-3">
  
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full lg:w-80"
              />
  
              <button className="btn btn-secondary rounded-full px-8">
                Subscribe
              </button>
  
            </div>
  
          </div>
  
          {/* Bottom */}
  
          <div className="border-t border-slate-200 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
  
            <p>
              © {new Date().getFullYear()} DevConnect. All rights reserved.
            </p>
  
            <div className="flex gap-6 mt-4 md:mt-0">
  
              <a className="hover:text-indigo-600">
                Privacy
              </a>
  
              <a className="hover:text-indigo-600">
                Terms
              </a>
  
              <a className="hover:text-indigo-600">
                Cookies
              </a>
  
              <a className="hover:text-indigo-600">
                Sitemap
              </a>
  
            </div>
  
          </div>
  
        </div>
      </footer>
    );
  };
  
  export default Footer;