import * as Icon from "../component/icons";
import React from "react";

export default {
  MOBILE_SIZE: 640,
};

export const MENU = [
  {
    title: "Sơn tùng",
    path: "/",
    icon: <Icon.Home />,
    iconSelected: <Icon.HomeActive />,
  },
  {
    title: "Hoàng Sơn",
    path: "/search",
    icon: <Icon.Search />,
    iconSelected: <Icon.SearchActive />,
  },
  {
    title: "Hoài Lâm",
    path: "/library",
    icon: <Icon.Library />,
    iconSelected: <Icon.LibraryActive />,
  },
];

export const PLAYLISTBTN = [
  {
    title: "Nhạc trẻ",
    path: "/",
    ImgName: "createPlaylist",
  },
  {
    title: "Yêu Thích",
    path: "/",
    ImgName: "popularSong",
  },
];

export const LIBRARYTABS = [
  {
    title: "Nhạc trẻ",
    path: "/library",
  },
  {
    title: "Nhạc sống",
    path: "/library/podcasts",
  },
  {
    title: "Nhạc sàn",
    path: "/library/artists",
  },
  {
    title: "Nhạc remix",
    path: "/library/albums",
  },
];
