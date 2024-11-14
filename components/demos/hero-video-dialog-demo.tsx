import React from "react";
import { HeroVideoDialog } from "../magicui/hero-video-dialog";

// Define the props type for the component
interface HeroVideoDialogDemoTopInBottomOutProps {
  videoSrc: string;
  thumbnailSrc:string;
}

export const HeroVideoDialogDemoTopInBottomOut: React.FC<HeroVideoDialogDemoTopInBottomOutProps> = ({
  videoSrc,
  thumbnailSrc,
}) => {
  return (
    <div className="relative">
      {/* Light theme video */}
      <HeroVideoDialog
        className="dark:hidden block"
        animationStyle="top-in-bottom-out"
        videoSrc={videoSrc}
        thumbnailSrc={thumbnailSrc}
        thumbnailAlt="Hero Video"
      />
      {/* Dark theme video */}
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="top-in-bottom-out"
        videoSrc={videoSrc}
        thumbnailSrc={thumbnailSrc}
        thumbnailAlt="Hero Video"
      />
    </div>
  );
};
