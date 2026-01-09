import { motion } from "framer-motion";
import { Clock, Calendar, Shield, TrendingUp, Eye, Gift, Users } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Discounted Token Price",
    desc: "Buy tokens at a lower price before the public launch.",
  },
  {
    icon: Shield,
    title: "Guaranteed Allocation",
    desc: "Your purchase is secured with a maximum cap to avoid whales dominating the sale.",
  },
  {
    icon: Eye,
    title: "Transparency",
    desc: "Regular updates and a clear roadmap to keep you informed every step of the way.",
  },
  {
    icon: Users,
    title: "Community Trust",
    desc: "Our smart contract includes protections like max buy limits and liquidity locks to protect your investment.",
  },
  {
    icon: Gift,
    title: "Future Rewards",
    desc: "Early supporters may be eligible for future airdrops or bonus incentives as the project grows.",
  },
];

const PreSale = () => {
  return (
    <section id="presale" className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-6xl mx-auto text-center glass-card rounded-3xl p-12 md:p-20 space-y-12"
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
        >
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.h2
              className="font-display text-5xl md:text-7xl text-secondary text-shadow-blue mb-6"
            >
              FLOKI PRE-SALE
            </motion.h2>
            <motion.div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full" />
              <Clock className="w-8 h-8 text-orange-accent" />
              <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full" />
            </motion.div>
          </motion.div>

          {/* Date Announcement */}
          <motion.p
            className="font-display text-2xl md:text-3xl text-muted-foreground mb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            LIVE ON
          </motion.p>
          <motion.div
            className="flex items-center justify-center gap-4 mb-12"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Calendar className="w-12 h-12 text-secondary" />
            <span className="font-display text-5xl md:text-7xl text-secondary font-bold tracking-tight">
              16 JAN
            </span>
          </motion.div>

          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-left max-w-4xl mx-auto"
          >
            <h3 className="font-display text-3xl md:text-4xl text-secondary mb-8 text-center">
              Presale Benefits & Guarantees
            </h3>
            <p className="font-display text-lg text-muted-foreground mb-8">
              During our presale, early investors will enjoy exclusive benefits including:
            </p>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  className="flex gap-3 p-4 bg-black/30 rounded-xl border border-yellow-500/30 hover:border-yellow-400/60 transition-all"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 + index * 0.1 }}
                >
                  <benefit.icon className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-display text-lg font-semibold text-secondary mb-1">
                      {benefit.title}
                    </h4>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {benefit.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Commitment Statement */}
          <motion.p
            className="font-display text-lg md:text-xl max-w-4xl mx-auto text-muted-foreground leading-relaxed text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.6 }}
          >
            We are committed to building a secure and trustworthy environment for all investors. 
            Your investment during the presale is backed by smart contract rules designed to 
            protect the community and promote long-term success.
          </motion.p>

          {/* Stay Tuned */}
          <motion.h3
            className="font-display text-3xl md:text-4xl text-secondary mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.8 }}
          >
            STAY TUNED
          </motion.h3>

          {/* Decorative elements */}
          <motion.div
            className="flex flex-wrap gap-4 justify-center opacity-60"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.6 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 2 }}
          >
            <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" />
            <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
            <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PreSale;
