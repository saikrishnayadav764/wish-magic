import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Gift, Sparkles } from "lucide-react";

export const FinalMessage = () => {
  return (
    <section className="py-20 px-4 bg-gradient-birthday">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.div
            className="text-8xl mb-8"
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            🎉
          </motion.div>
          
          <h2 className="text-5xl font-serif font-bold text-primary-foreground mb-8">
            Happy Birthday, Amazing Human!
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="bg-primary-foreground/10 backdrop-blur-md border-primary-foreground/20 p-12 shadow-sparkle">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <p className="text-2xl font-serif text-primary-foreground leading-relaxed">
                  I hope this little surprise brought a smile to your face and warmth to your heart. 
                  You deserve all the love, joy, and magical moments life has to offer.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="flex justify-center space-x-8 py-8"
              >
                <motion.div
                  className="text-5xl"
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  🥳
                </motion.div>
                <motion.div
                  className="text-5xl"
                  animate={{ y: [5, -5, 5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                >
                  🎂
                </motion.div>
                <motion.div
                  className="text-5xl"
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                >
                  🎈
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <p className="text-xl font-sans text-primary-foreground/90 mb-8">
                  Thank you for being such an incredible friend, for bringing so much light into this world, 
                  and for inspiring everyone around you to be better. Here's to another year of adventures, 
                  dreams coming true, and making unforgettable memories together!
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                viewport={{ once: true }}
                className="flex flex-wrap justify-center gap-4"
              >
                <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-birthday text-lg px-8 py-3">
                  <Heart className="mr-2 h-5 w-5" />
                  With All My Love
                </Button>
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-sparkle text-lg px-8 py-3">
                  <Gift className="mr-2 h-5 w-5" />
                  Your Best Friend
                </Button>
                <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-magical text-lg px-8 py-3">
                  <Sparkles className="mr-2 h-5 w-5" />
                  Forever & Always
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                viewport={{ once: true }}
                className="text-3xl font-serif italic text-primary-foreground/95 pt-8"
              >
                "May your birthday be as wonderful as you are!" ✨💕
              </motion.div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          viewport={{ once: true }}
          className="mt-12 text-primary-foreground/70 font-sans"
        >
          <p>Made with 💖 for the most amazing person on their special day</p>
        </motion.div>
      </div>
    </section>
  );
};