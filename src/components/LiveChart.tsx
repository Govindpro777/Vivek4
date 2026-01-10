import { motion } from "framer-motion";

const LiveChart = () => {
  return (
    <section
      id="warzone"
      className="relative py-14 sm:py-16 md:py-20 overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-secondary text-shadow-blue text-center mb-8 sm:mb-10 md:mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Warzone
        </motion.h2>

        <motion.div
          className="text-center text-base sm:text-xl md:text-2xl mb-10 sm:mb-12 tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Let the war begin!
        </motion.div>

        {/* Chart Card */}
        <motion.div
          className="glass-card rounded-xl sm:rounded-2xl overflow-hidden max-w-6xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Dexscreener Responsive Wrapper */}
          <div
            className="relative w-full"
            style={{ paddingBottom: "125%" }}
          >
            <iframe
              src="https://dexscreener.com/solana/AgC7En9s897T4us149giMh8GRtfTGsKK3YiexoCQ66xs?embed=1&loadChartSettings=0&info=0&chartLeftToolbar=0&chartDefaultOnMobile=1&chartTheme=dark&theme=dark&chartStyle=0&chartType=usd&interval=15"
              className="absolute top-0 left-0 w-full h-full border-0"
              title="Floki BNB Chart - DEX Screener"
              allow="clipboard-write"
            />
          </div>
        </motion.div>

        <motion.div
          className="text-center mt-10 sm:mt-12 text-sm sm:text-base md:text-lg font-semibold text-secondary uppercase tracking-wider"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          To win by more
        </motion.div>
      </div>
    </section>
  );
};

export default LiveChart;
