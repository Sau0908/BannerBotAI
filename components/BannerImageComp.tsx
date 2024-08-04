import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./utils/store";
import { backgroundImages, stylesByIndex } from "./utils/constants";
import EditIcon from "@mui/icons-material/Edit";
import EditBannerImg from "./EditBannerImg";

interface BannerImageCompProps {
  index: number;
}

const BannerImageComp: React.FC<BannerImageCompProps> = ({ index }) => {
  const bannerData = useSelector((state: RootState) => state.banner);
  const [open, setOpen] = useState(false);

  const styles = stylesByIndex[index] || stylesByIndex[0];
  const backgroundImageUrl = backgroundImages[index] || backgroundImages[0];

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div
      className={`relative ${styles.containerClasses}`}
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        width: styles.width,
        height: styles.height,
      }}
    >
      <div className="absolute top-4 right-4 bg-gray-100 rounded-full p-2">
        <EditIcon
          className="text-gray-500 cursor-pointer hover:text-gray-700"
          onClick={handleClickOpen}
        />
      </div>
      <div className="flex flex-col justify-between h-full p-4">
        <div className={styles.textAlign}>
          <h1
            className={`text-4xl font-bold ${styles.headingMargin} ${styles.textColor} ${styles.headingTextWrap}`}
          >
            {bannerData.title[index] || bannerData.title[0]}
          </h1>
          <p
            className={`text-xl ${styles.textColor} ${styles.paragraphMargin}`}
          >
            {bannerData.description[index] || bannerData.description[0]}
          </p>
        </div>
        <button
          className={`${styles.buttonPosition} ${styles.buttonColor} ${styles.buttonText} ${styles.btnpadding} ${styles.buttonHover}`}
        >
          {bannerData.cta[index] || bannerData.cta[0]}
        </button>
      </div>
      <div className={styles.imagePosition}>
        <img
          src={bannerData.images[index] || bannerData.images[0]}
          alt="Banner"
          className={styles.imageSize}
        />
      </div>
      <EditBannerImg open={open} handleClose={handleClose} index={index} />
    </div>
  );
};

export default BannerImageComp;
