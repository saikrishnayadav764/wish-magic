import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Heart {
  id: number;
  x: number;
  delay: number;
  size: number;
}

export const FloatingHearts = () => {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const generateHearts = () => {
      const newHearts: Heart[] = [];
      for (let i = 0; i < 8; i++) {
        newHearts.push({
          id: i,
          x: Math.random() * 90 + 5,
          delay: Math.random() * 4,
          size: Math.random() * 20 + 15,
        });
      }
      setHearts(newHearts);
    };

    generateHearts();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute text-primary opacity-60"
          style={{
            left: `${heart.x}%`,
            fontSize: `${heart.size}px`,
            bottom: -50,
          }}
          initial={{ y: 0, opacity: 0, rotate: 0 }}
          animate={{ 
            y: -window.innerHeight - 100, 
            opacity: [0, 0.8, 0],
            rotate: [0, 10, -10, 0],
            x: [0, 20, -20, 0]
          }}
          transition={{
            duration: 8,
            delay: heart.delay,
            repeat: Infinity,
            repeatDelay: 6,
            ease: "easeOut"
          }}
        >
          💖
        </motion.div>
      ))}
    </div>
  );
};