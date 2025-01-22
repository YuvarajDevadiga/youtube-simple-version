import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="rounded-md overflow-hidden w-64">
      <img className="rounded-md" src={thumbnails.medium.url} alt="thumbnail" />
      <ul>
        <li className="text-[#dadada] font-bold mt-2 mb-2">{title}</li>
        <li className="text-[#d1d0cb] ">{channelTitle}</li>
        <li className="text-[#d1d0cb] ">
          {(statistics.viewCount / 10000).toFixed(0)}K views
        </li>
      </ul>
    </div>
  );
};

// export const AdVideoCard = ({ info }) => {
//   return (
//     <div className="p-1 m-1 border border-red-400">
//       <VideoCard info={info} />
//     </div>
//   );
// };

export default VideoCard;
