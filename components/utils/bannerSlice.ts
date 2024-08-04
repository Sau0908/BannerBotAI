import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BannerState {
  title: string;
  description: string;
  cta: string;
  images: string[];
  isLoadedWithData: boolean;
}

const initialState: BannerState = {
  title: "",
  description: "",
  cta: "",
  images: [],
  isLoadedWithData: false,
};

const bannerSlice = createSlice({
  name: "banner",
  initialState,
  reducers: {
    setBannerData: (
      state,
      action: PayloadAction<{ title: string; description: string; cta: string; images: string[] }>
    ) => {
      state.title = action.payload.title;
      state.description = action.payload.description;
      state.cta = action.payload.cta;
      state.images = action.payload.images;
      state.isLoadedWithData = true;
    },
  },
});

export const { setBannerData } = bannerSlice.actions;

export default bannerSlice.reducer;