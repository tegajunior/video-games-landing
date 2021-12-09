const videoRoutes = [
  {
    path: "/",
    component: () =>
      import(/*webpackChunkName "video" */ "@/layouts/LanderBaseLayout"),
    children: [
      {
        path: "",
        name: "videos",
        component: () =>
          import(/*webpackChunkName "video" */ "@/modules/video/pages/Videos"),
        meta: {
          guest: true,
        },
      },
      {
        path: "/contact",
        name: "contact",
        component: () =>
          import(
            /*webpackChunkName "contact" */ "@/modules/video/pages/Contact"
          ),
        meta: {
          guest: true,
        },
      },
    ],
  },
];

export default videoRoutes
