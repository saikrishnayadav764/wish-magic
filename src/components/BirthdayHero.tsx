import { motion } from "framer-motion";
import meghalayaHero from "@/assets/meghalaya-hero.jpg";

export const BirthdayHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${meghalayaHero})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-8xl font-serif font-bold mb-6 shimmer-text">
            Happy Birthday
          </h1>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 1, type: "spring", bounce: 0.4 }}
            className="text-4xl md:text-6xl font-serif font-medium text-secondary"
          >
            Beautiful Soul! ✨
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-xl md:text-2xl text-foreground/90 font-sans leading-relaxed mb-12"
        >
          Straight from the heart of a boy from the city of joy ❤️
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 2 }}
          className="animate-float"
        >
          <div className="text-6xl mb-8">🎂</div>
          <div className="text-2xl font-serif text-accent animate-shimmer">
            Scroll down for your surprise...
          </div>
        </motion.div>
      </div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-20 left-10 text-4xl opacity-70"
        animate={{ rotate: 360, y: [-10, 10, -10] }}
        transition={{ rotate: { duration: 20, repeat: Infinity }, y: { duration: 3, repeat: Infinity } }}
      >
        🎈
      </motion.div>
      <motion.div
        className="absolute top-32 right-16 text-3xl opacity-70"
        animate={{ rotate: -360, y: [10, -10, 10] }}
        transition={{ rotate: { duration: 15, repeat: Infinity }, y: { duration: 4, repeat: Infinity } }}
      >
        🎉
      </motion.div>
      <motion.div
        className="absolute bottom-20 left-20 text-5xl opacity-60"
        animate={{ rotate: 360, x: [-5, 5, -5] }}
        transition={{ rotate: { duration: 25, repeat: Infinity }, x: { duration: 2.5, repeat: Infinity } }}
      >
        ✨
      </motion.div>
    </section>
  );
};