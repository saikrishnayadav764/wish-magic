import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Camera, Mountain } from "lucide-react";

const meghalayaSpots = [
  {
    name: "Shillong",
    description: "The Scotland of the East awaits your footsteps",
    icon: "🏔️"
  },
  {
    name: "Cherrapunji",
    description: "Where clouds kiss the earth and waterfalls dance",
    icon: "💧"
  },
  {
    name: "Living Root Bridges",
    description: "Nature's engineering marvels calling your name",
    icon: "🌿"
  },
  {
    name: "Dawki River",
    description: "Crystal clear waters reflecting your dreams",
    icon: "🚣‍♀️"
  }
];

export const MeghalayaSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-magical/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-serif font-bold mb-6">
            <span className="shimmer-text">Your Meghalaya Dream</span>
          </h2>
          <p className="text-xl text-foreground/80 font-sans max-w-3xl mx-auto leading-relaxed">
            I see the way your eyes light up when you talk about the mystical hills of Meghalaya. 
            Your dream adventure is going to be absolutely magical! ✨🏔️
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {meghalayaSpots.map((spot, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-secondary/20 p-6 shadow-magical hover:shadow-birthday transition-all duration-300 h-full">
                <div className="flex items-start space-x-4">
                  <motion.div
                    className="text-4xl"
                    animate={{ y: [-2, 2, -2] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                  >
                    {spot.icon}
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-serif font-semibold text-secondary mb-2">
                      {spot.name}
                    </h3>
                    <p className="text-foreground/80 font-sans leading-relaxed">
                      {spot.description}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="bg-gradient-warm p-12 shadow-sparkle border-none">
            <div className="max-w-4xl mx-auto">
              <motion.div
                className="text-6xl mb-6"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                🗺️
              </motion.div>
              
              <h3 className="text-3xl font-serif font-bold text-primary-foreground mb-6">
                When You Finally Make It There...
              </h3>
              
              <p className="text-xl font-sans text-primary-foreground/90 leading-relaxed mb-8">
                I can already picture you standing on those misty hills, breathing in the pure mountain air, 
                with that incredible smile of yours lighting up the entire landscape. You're going to fall in love 
                with every waterfall, every bridge, every moment of that journey.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Button className="bg-primary-foreground/20 backdrop-blur-sm border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/30 shadow-sparkle">
                  <Camera className="mr-2 h-4 w-4" />
                  Capture Every Moment
                </Button>
                <Button className="bg-primary-foreground/20 backdrop-blur-sm border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/30 shadow-sparkle">
                  <Mountain className="mr-2 h-4 w-4" />
                  Conquer Every Peak
                </Button>
                <Button className="bg-primary-foreground/20 backdrop-blur-sm border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/30 shadow-sparkle">
                  <MapPin className="mr-2 h-4 w-4" />
                  Create New Memories
                </Button>
              </div>

              <p className="text-lg font-serif italic text-primary-foreground/95">
                "And when you're there, surrounded by all that natural beauty, 
                remember that you're just as magnificent as the landscape around you." 💖
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};