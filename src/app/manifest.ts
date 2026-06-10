import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "New Horizon Baptist Church",
    short_name: "New Horizon Baptist",
    description:
      "A Bible-believing, King James Bible Independent Baptist church.",
    start_url: "/",
    display: "standalone",
    background_color: "#fefcf8",
    theme_color: "#2c1810",
    icons: [
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
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
