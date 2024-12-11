import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GifState } from "../context/GifContext";
import Gif from "../components/Gif";
import { HiMiniChevronDown, HiMiniChevronUp } from "react-icons/hi2";

const contentType = ["gifs", "stickers", "text"];

const SingleGif = () => {
  const { type, slug } = useParams();
  const [singleGif, setSingleGif] = useState({});
  const [relatedGifs, setRelatedGifs] = useState([]);
  const [readMore, setReadMore] = useState(false);

  const { gif } = GifState();

  const fetchGif = async () => {
    const gifId = slug.split("-");
    const { data } = await gif.gif(gifId[gifId.length - 1]);

    const { data: related } = await gif.related(gifId[gifId.length - 1], {
      limit: 10,
    });
    setSingleGif(data);
    setRelatedGifs(related);
  };
  useEffect(() => {
    if (!contentType.includes(type)) {
      throw new Error("Invalid Content Type");
    }
    fetchGif();
  }, []);
  return (
    <div className="grid grid-cols-4 my-10 gap-4">
      <div className="hidden sm:block">
        {singleGif?.user && (
          <>
            <div className="flex gap-1">
              <img
                src={singleGif?.user?.avatar_url}
                alt={singleGif?.user?.display_name}
                className="h-14"
              />
              <div className="px-2">
                <div className="font-bold">{singleGif?.user?.display_name}</div>
                <div className="faded-text">@{singleGif?.user?.username}</div>
              </div>
            </div>
            {singleGif?.user?.description && (
              <p className="py-4 whitespace-pre-line text-sm text-gray-400">
                {readMore
                  ? singleGif?.user?.description
                  : singleGif?.user?.description.slice(0, 100)}
                {readMore.length > 100 && (
                  <div
                    className="flex items-center faded-text cursor-pointer"
                    onClick={() => setReadMore(!readMore)}
                  >
                    {readMore ? (
                      <>
                        Read Less <HiMiniChevronUp size={20} />
                      </>
                    ) : (
                      <>
                        Read More <HiMiniChevronDown size={20} />
                      </>
                    )}
                  </div>
                )}
              </p>
            )}
          </>
        )}
      </div>
      <div className="col-span-4 sm:col-span-3">
        <div className="flex gap-6">
          <div className="w-full sm:w-3/4">
            <div className="faded-text truncate my-2 font-semibold uppercase">
              {singleGif.title}
            </div>
            <Gif gif={singleGif} hover={false} />
            {/* mobile ui */}
          </div>
          favorites icon
        </div>
        <div>
          {" "}
          <span className="font-extrabold">Related Videos</span>
        </div>
      </div>
    </div>
  );
};

export default SingleGif;
