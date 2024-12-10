import { useState } from "react";
import { Link } from "react-router-dom";
import { HiEllipsisVertical, HiMiniBars3BottomRight } from "react-icons/hi2";

const Header = () => {
  const [categories, setCategories] = useState([]);
  const [showCategories, setShowCategories] = useState(false);
  return (
    <nav>
      <div className="relative flex gap-4 justify-between items-center mb-2">
        <Link to="/" className="flex gap-2">
          <img src="/logo.svg" alt="gifLogo" className="w-9" />
          <h1 className="text-5xl font-bold tracking-tight cursor-pointer">
            GIPHY
          </h1>
        </Link>

        <div className="font-bold text-md flex gap-2 items-center">
          <Link className="px-4 py-1 hover:gradient border-b-4 hidden lg:block">
            Reactions{" "}
          </Link>
          <button onClick={() => setShowCategories(!showCategories)}>
            <HiEllipsisVertical
              size={35}
              className={`py-0.5  hover:gradient ${
                showCategories ? "gradient" : ""
              } border-b-4 hidden lg:block`}
            />
          </button>
          <div className="h-9 bg-gray-700 pt-1.5 px-6 cursor-pointer rounded">
            <Link to="/favorites">Favorite GIFs</Link>
          </div>
          <div>
            <button>
              <HiMiniBars3BottomRight
                size={30}
                className="text-sky-400 block lg:hidden"
              />
            </button>
          </div>
        </div>

        {showCategories && (
          <div className="absolute right-0 top-14 px-10 pt-6 pb-9 w-full gradient z-20">
            <span>Categories</span>
            <hr />
            <div>
              <Link className="font-bold">Reactions</Link>
            </div>
          </div>
        )}
      </div>

      {/* search */}
    </nav>
  );
};

export default Header;
