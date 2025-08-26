import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, X, AlertCircle } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const handlePlayClick = () => {
    setIsPlaying(true);
    setVideoError(false);
  };
  
  const handleVideoError = () => {
    console.error("Video failed to load or play");
    setVideoError(true);
  };
  return (
    <section className="py-20 px-4 bg-gradient-magical/10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-serif font-bold mb-6 shimmer-text">
            A Special Message for You
          </h2>
          <p className="text-xl text-foreground/80 font-sans max-w-2xl mx-auto">
            Because some feelings can only be expressed through moving moments 🎬✨
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-primary/20 shadow-birthday">
            <div className="aspect-video bg-gradient-warm flex items-center justify-center relative group">
              {isPlaying ? (
                <div className="w-full h-full relative">
                  {videoError ? (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-black/10 rounded-md p-6">
                      <AlertCircle className="h-12 w-12 text-red-500 mb-4" />
                      <h3 className="text-xl font-medium mb-2">Video Unavailable</h3>
                      <p className="text-center text-foreground/70 mb-4">
                        The video could not be loaded. Please try again later.
                      </p>
                      <Button 
                        variant="outline"
                        onClick={() => setIsPlaying(false)}
                      >
                        Go Back
                      </Button>
                    </div>
                  ) : (
                    <>
                      <video
                        ref={videoRef}
                        className="w-full h-full object-cover object-[center_30%] rounded-md"
                        controls
                        autoPlay
                        playsInline
                        preload="auto"
                        onError={handleVideoError}
                        muted={true}
                      >
                        <source src="/videos/vid.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      <Button 
                        size="sm"
                        variant="ghost" 
                        className="absolute top-4 right-4 bg-black/30 hover:bg-black/50 text-white rounded-full p-2"
                        onClick={() => setIsPlaying(false)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </>
                  )}
                </div>
              ) : (
                <div className="text-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      size="lg" 
                      className="bg-primary/20 backdrop-blur-sm border border-primary/30 text-primary-foreground hover:bg-primary/30 shadow-sparkle text-lg px-8 py-4 rounded-full"
                      onClick={() => setIsPlaying(true)}
                    >
                      <Play className="mr-3 h-6 w-6" />
                      Play Video Message
                    </Button>
                  </motion.div>
                  <p className="text-foreground/70 mt-6 font-sans">
                    Experience the magic of Meghalaya
                  </p>
                </div>
              )}
              
              {/* Decorative elements */}
              <motion.div
                className="absolute top-4 left-4 text-2xl opacity-60"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                🌟
              </motion.div>
              <motion.div
                className="absolute bottom-4 right-4 text-2xl opacity-60"
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                💝
              </motion.div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Card className="bg-card/30 backdrop-blur-md border-secondary/30 p-8 shadow-magical">
            <p className="text-lg font-serif text-foreground/90 italic leading-relaxed">
              "Words can't capture how much you mean to me, but maybe this video can show you 
              a glimpse of the joy and love you bring into my life every single day." 💕
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};