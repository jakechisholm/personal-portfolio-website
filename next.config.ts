import type { NextConfig } from "next";

const { withNextVideo } = require('next-video/process');

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone", // Added for Docker https://docs.docker.com/guides/nextjs/containerize/
};

export default withNextVideo(nextConfig);
