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

  const handleStartSurprise = () => {
    if (audioRef.current) {
      audioRef.current.play().catch((err) => console.error("Play failed:", err));
      setIsPlaying(true);
      setShowOverlay(false); // Hide overlay after click
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
      {/* Surprise Birthday Overlay */}
      {showOverlay && (
        <div className="fixed inset-0 z-[9999] bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-600 flex flex-col items-center justify-center text-center p-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg animate-bounce">
            🎉 A Special Surprise Awaits! 🎉
          </h1>
          <p className="text-white text-lg sm:text-xl md:text-2xl mb-8 max-w-xl">
            Someone has planned something amazing for you…  
            Ready to see it? 💜
          </p>
          <Button
            onClick={handleStartSurprise}
            className="px-8 py-4 text-xl sm:text-2xl bg-pink-600 hover:bg-pink-700 text-white rounded-full shadow-lg animate-pulse"
          >
            🎁 Tap to Begin the Surprise 🎁
          </Button>
        </div>
      )}

      {/* Background Music + Controls */}
      <div className="fixed bottom-6 right-6 z-50 bg-white/20 backdrop-blur-md rounded-full shadow-lg p-3 flex items-center gap-3">
        <ReactAudioPlayer
          src={audioSrc}
          autoPlay={false} // We start manually after click
          controls={false}
          loop
          volume={isMuted ? 0 : 0.5}
          ref={(el) => {
            audioRef.current = el?.audioEl.current || null;
          }}
        />

        {/* Play / Pause Button */}
        <Button
          variant="ghost"
          size="icon"
          className="h-10 w-10 rounded-full bg-white/30 hover:bg-white/50"
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

        {/* Mute / Unmute Button */}
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 rounded-full bg-white/30 hover:bg-white/50"
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
