import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export const PhotoSection = () => {
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
          <h2 className="text-5xl font-serif font-bold mb-6 shimmer-text">
            Capturing Beautiful Moments
          </h2>
          <p className="text-xl text-foreground/80 font-sans max-w-2xl mx-auto">
            Every photo tells a story of your incredible journey and the joy you
            bring to the world ✨
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Photo placeholders - replace with actual photos */}
          {Array.from({ length: 3 }).map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                boxShadow: "var(--glow-birthday)",
                transition: { duration: 0.3 },
              }}
            >
              <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-primary/20 shadow-magical">
                <div className="aspect-square bg-gradient-magical flex items-center justify-center">
                  <img
                    src={`/images/ig${index + 1}.jpg`}
                    alt={`Photo ${index + 1}`}
                    className={`w-full h-full object-cover ${
                      index === 0 ? "object-[center_30%]" : "object-center"
                    }`}          
                  />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="bg-card/30 backdrop-blur-md border-accent/30 p-8 shadow-sparkle">
            <p className="text-lg font-serif text-foreground/90 italic leading-relaxed">
              "In every photo, I see the light in your eyes and the warmth of
              your smile. You make every moment more beautiful just by being
              you." 💫
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};