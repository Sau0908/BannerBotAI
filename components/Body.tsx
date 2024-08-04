import React from "react";
import LeftNav from "./LeftNav";
import BannerImageComp from "./BannerImageComp";
import { useSelector } from "react-redux";
import { RootState } from "./utils/store";

const Body = () => {
  const bannerData = useSelector((state: RootState) => state.banner);
  return (
    <div className="flex">
      <div className="w-1/3">
        <LeftNav />
      </div>
      <div className="flex-1 p-5">
        <h1 className="text-3xl font-bold text-white">
          Welcome to the Ad Banner Generator
        </h1>

        {bannerData.isLoadedWithData && (
          <div className="grid grid-cols-2 p-6 gap-2 ">
            {[0, 1, 2, 3, 4].map((index) => (
              <BannerImageComp key={index} index={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Body;
