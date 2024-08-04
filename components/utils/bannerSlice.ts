import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BannerState {
  title: string[];
  description: string[];
  cta: string[];
  images: string[];
  isLoadedWithData: boolean;
}

const initialState: BannerState = {
  title: Array(5).fill(""),
  description: Array(5).fill(""),
  cta: Array(5).fill(""),
  images: Array(5).fill(""),
  isLoadedWithData: false,
};

const bannerSlice = createSlice({
  name: "banner",
  initialState,
  reducers: {
    setBannerData: (
      state,
      action: PayloadAction<{
        title: string;
        description: string;
        cta: string;
        images: string[];
      }>
    ) => {
      for (let i = 0; i < 5; i++) {
        state.title[i] = action.payload.title;
        state.description[i] = action.payload.description;
        state.cta[i] = action.payload.cta;
      }
      state.images = action.payload.images;
      state.isLoadedWithData = true;
    },
    updateBannerDataByIndex: (
      state,
      action: PayloadAction<{
        index: number;
        title?: string;
        description?: string;
        cta?: string;
        image?: string;
      }>
    ) => {
      const { index, title, description, cta, image } = action.payload;
      if (title) state.title[index] = title;
      if (description) state.description[index] = description;
      if (cta) state.cta[index] = cta;
      if (image) state.images[index] = image;
    },
  },
});

export const { setBannerData, updateBannerDataByIndex } = bannerSlice.actions;

export default bannerSlice.reducer;
