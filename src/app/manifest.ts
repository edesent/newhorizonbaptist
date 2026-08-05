import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "New Horizon Baptist Church",
    short_name: "New Horizon Baptist",
    description:
      "A Bible-believing, King James Bible Independent Baptist church.",
    start_url: "/",
    display: "standalone",
    background_color: "#fffdf9",
    theme_color: "#052a4e",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
