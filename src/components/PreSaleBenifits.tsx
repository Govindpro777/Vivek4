import { motion } from "framer-motion";
import { Shield, TrendingUp, Eye, Gift, Users } from "lucide-react";

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

const PreSaleBenefits = () => {
  return (
    <section id="presale-benefits" className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Heading */}
          <motion.h2
            className="font-display text-4xl md:text-5xl lg:text-6xl text-secondary text-shadow-blue text-center mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Presale Benefits & Guarantees
          </motion.h2>

          <motion.p
            className="font-display text-lg md:text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            During our presale, early investors will enjoy exclusive benefits including:
          </motion.p>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="glass-card rounded-2xl p-6 space-y-4 hover:scale-105 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-yellow-400/20 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-yellow-400" />
                  </div>
                  <h4 className="font-display text-lg md:text-xl font-semibold text-secondary">
                    {benefit.title}
                  </h4>
                </div>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Commitment Statement */}
          <motion.div
            className="glass-card rounded-2xl p-8 md:p-10 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <p className="font-display text-lg md:text-xl text-muted-foreground leading-relaxed">
              We are committed to building a secure and trustworthy environment for all investors. 
              Your investment during the presale is backed by smart contract rules designed to 
              protect the community and promote long-term success.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PreSaleBenefits;
