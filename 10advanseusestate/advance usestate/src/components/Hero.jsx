import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-500, 500], [15, -15]);
  const rotateY = useTransform(mouseX, [-500, 500], [-15, 15]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative h-screen w-full bg-black overflow-hidden flex items-center justify-center">
      
      {/* Gradient Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 via-transparent to-blue-600/30 blur-3xl" />

      {/* Floating Animated Orb */}
      <motion.div
        style={{ rotateX, rotateY }}
        className="w-96 h-96 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full absolute blur-2xl opacity-40"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      {/* Content */}
      <div className="relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-7xl font-bold text-white tracking-tight"
        >
          Build The Future
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-6 text-lg text-gray-400 max-w-xl mx-auto"
        >
          A next-generation interactive experience powered by smooth motion and immersive design.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 px-8 py-4 bg-white text-black rounded-full font-medium shadow-lg hover:shadow-purple-500/50 transition"
        >
          Get Started
        </motion.button>
      </div>
    </section>
  );
}
export default Hero;