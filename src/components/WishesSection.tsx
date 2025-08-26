import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const wishes = [
  {
    icon: "🌟",
    title: "Your Light",
    message: "May you continue to shine your beautiful light on everyone around you. Your kindness, wisdom, and joy inspire me every day."
  },
  {
    icon: "💫",
    title: "Your Dreams",
    message: "I hope this year brings you closer to all your dreams, especially that magical trip to Meghalaya that makes your eyes sparkle when you talk about it."
  },
  {
    icon: "🌈",
    title: "Your Journey",
    message: "May every step of your journey be filled with adventure, laughter, and moments that take your breath away. You deserve all the happiness in the world."
  },
  {
    icon: "💝",
    title: "Your Heart",
    message: "Thank you for being the most genuine, caring, and amazing person I know. Your friendship is one of life's greatest gifts."
  },
  {
    icon: "✨",
    title: "Your Future",
    message: "Here's to another year of being absolutely incredible! I can't wait to see all the amazing things you'll accomplish and the lives you'll touch."
  },
  {
    icon: "🌺",
    title: "Your Spirit",
    message: "Never change your beautiful, adventurous spirit. The world is a better place with you in it, and I'm so grateful to call you my friend."
  }
];

export const WishesSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-serif font-bold mb-6">
            <span className="shimmer-text">Birthday Wishes</span>
          </h2>
          <p className="text-xl text-foreground/80 font-sans max-w-2xl mx-auto">
            From the depths of my heart, here are my wishes for you on your special day 💕
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {wishes.map((wish, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                boxShadow: "var(--glow-birthday)",
                transition: { duration: 0.3 }
              }}
            >
              <Card className="h-full bg-card/40 backdrop-blur-md border-primary/20 p-6 shadow-magical hover:shadow-birthday transition-all duration-300">
                <div className="text-center mb-4">
                  <motion.div
                    className="text-5xl mb-3 inline-block"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
                  >
                    {wish.icon}
                  </motion.div>
                  <h3 className="text-2xl font-serif font-semibold text-primary mb-4">
                    {wish.title}
                  </h3>
                </div>
                <p className="text-foreground/90 font-sans leading-relaxed text-center">
                  {wish.message}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="bg-gradient-birthday p-12 shadow-sparkle border-accent/30">
            <h3 className="text-3xl font-serif font-bold text-primary-foreground mb-6">
              Most importantly...
            </h3>
            <p className="text-xl font-sans text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto">
              I'm so grateful the universe brought us together as friends. You make every day brighter, 
              every laugh louder, and every memory more precious. Here's to celebrating you today and always! 🥳✨
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};