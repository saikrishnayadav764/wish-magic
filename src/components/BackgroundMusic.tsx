import React, { useState, useRef } from "react";
import ReactAudioPlayer from "react-audio-player";
import { Button } from "@/components/ui/button";
import { Volume2, VolumeX } from "lucide-react";

export const BackgroundMusic = () => {
  const audioSrc = "/audio/dilka_jo_hal_hai.mp3"; // public folder path
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleFirstClick = () => {
    if (audioRef.current) {
      audioRef.current.play().catch((err) => console.error("Play failed:", err));
      setIsPlaying(true);
      setShowOverlay(false); // hide overlay forever after first click
    }
  };

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch(console.error);
      setIsPlaying(true);
    }
  };

  return (
    <>
      {/* Invisible full-screen overlay */}
      {showOverlay && (
        <div
          onClick={handleFirstClick}
          className="fixed inset-0 z-[9999] bg-transparent cursor-pointer"
        />
      )}

      <div className="fixed bottom-6 right-6 z-50 bg-card/80 backdrop-blur-md rounded-full shadow-lg p-3 flex items-center gap-3">
        <ReactAudioPlayer
          src={audioSrc}
          autoPlay={false} // autoplay handled manually after first click
          controls={false}
          loop
          volume={isMuted ? 0 : 0.5}
          ref={(el) => {
            // We need native <audio>, not ReactAudioPlayer's wrapper div
            audioRef.current = el?.audioEl.current || null;
          }}
        />

        <Button
          variant="ghost"
          size="icon"
          className="h-10 w-10 rounded-full"
          onClick={togglePlay}
          aria-label={isPlaying ? "Pause music" : "Play music"}
        >
          {isPlaying ? (
            <span className="animate-pulse" role="img" aria-label="music playing">
              🎵
            </span>
          ) : (
            <span role="img" aria-label="music paused">🎵</span>
          )}
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 rounded-full"
          onClick={() => setIsMuted(!isMuted)}
          aria-label={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? (
            <VolumeX className="h-4 w-4" aria-hidden="true" />
          ) : (
            <Volume2 className="h-4 w-4" aria-hidden="true" />
          )}
        </Button>
      </div>
    </>
  );
};
