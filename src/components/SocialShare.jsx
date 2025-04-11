import React, { useEffect, useState } from "react";
import { socials } from "../constants/dummy";


const generateShareLink = (platform, url) => {
  switch (platform) {
    case "twitter":
      return `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`;
    case "linkedin":
      return `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
    case "facebook":
      return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    default:
      return url;
  }
};

const SocialShare = () => {
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
    }
  }, []);

  return (
    <div className="flex justify-center items-center flex-row flex-wrap gap-6 py-6">
    {socials.slice(0, 3).map((item, index) => (
        <div key={`title-${index}`}>
            <a href={generateShareLink(item.platform, currentUrl)} target="_blank" rel="noreferrer">
            {React.cloneElement(item.icon, { className: "fill-[#e89611] hover:fill-[#ff6501] w-[20px] h-[20px]  ease-in duration-300" })}
            </a>
        </div>
    ))}
    </div>
  );
};

export default SocialShare;


