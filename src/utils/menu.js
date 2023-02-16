export const menu = [
  {
    icon: "mdi-home",
    title: "Dashboard",
    path: "/",
  },
  {
    icon: "mdi-account-multiple-outline",
    title: "Users",
    sub: [
      {
        title: "User List",
        path: "/user-list",
      },
      {
        title: "Black List",
        path: "/black-list",
      },
    ],
  },
  {
    icon: "mdi-bulletin-board",
    title: "Campaign",
    sub: [
      {
        title: "Categories",
        path: "/categories",
      },
      {
        title: "Posts",
        path: "/post",
      },
      {
        title: "Comments",
        path: "/comment",
      },
    ],
  },
  {
    icon: "mdi-chart-bar",
    title: "Statistics",
    path: "/statistics",
  },
];
