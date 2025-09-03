import { createSlice } from "@reduxjs/toolkit";

const initialState: MainSliceState = {
  user: null,
  authInitialRoute: "/languageSelection",
  isLoggedIn: false,
  preferredLanguage: { label: "English", code: "en" },
  myFarms: [
    {
      id: "11",
      title: "Farm One",
      address: "Location One",
      latitude: "28.962682",
      longitude: "70.729352",
      size: 190,
      cropType: "sugarcane",
      status: "pending",
      farmArea: [
        { latitude: 28.967444, longitude: 70.74605 },
        { latitude: 28.966947, longitude: 70.746037 },
        { latitude: 28.966956, longitude: 70.746682 },
        { latitude: 28.967442, longitude: 70.746704 },
      ],
    },
    {
      id: "12",
      title: "Farm Two",
      address: "Location 2",
      size: 160,
      cropType: "wheat",
      status: "published",
      latitude: "28.962682",
      longitude: "70.729352",
      farmArea: [
        { latitude: 28.960848, longitude: 70.742641 },
        { latitude: 28.960843, longitude: 70.743293 },
        { latitude: 28.959837, longitude: 70.743336 },
        { latitude: 28.959845, longitude: 70.742665 },
      ],
    },
    {
      id: "13",
      title: "Farm Three",
      address: "Location 3",
      size: 260,
      cropType: "rice",
      status: "pending",
      latitude: "28.962682",
      longitude: "70.729352",
      farmArea: [
        { latitude: 28.962968, longitude: 70.729225 },
        { latitude: 28.962964, longitude: 70.72955 },
        { latitude: 28.96246, longitude: 70.729536 },
        { latitude: 28.962444, longitude: 70.729234 },
      ],
    },
  ],
};

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setAuthInitialRoute: (state, { payload }) => {
      state.authInitialRoute = payload;
    },
    setUserSession: (state, { payload }) => {
      state.isLoggedIn = payload;
    },
    setUser: (state, { payload }: SetUserAction) => {
      state.user = payload;
    },
    setPreferredLanguage: (state, { payload }: SetPreferredLanguageAction) => {
      state.preferredLanguage = payload;
    },
    addMyFarm: (state, { payload }: AddMyFarmAction) => {
      state.myFarms.unshift(payload);
    },
    handleLogout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
    },

    resetMainReducer: () => initialState,
  },
});

export const {
  setPreferredLanguage,
  handleLogout,
  setAuthInitialRoute,
  setUser,
  setUserSession,
  resetMainReducer,
  addMyFarm,
} = mainSlice.actions;

export default mainSlice.reducer;
