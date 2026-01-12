import { motion } from "framer-motion";
import { ExternalLink, Gift } from "lucide-react";

interface ReferralCardProps {
  name: string;
  reward: string;
  benefits: string[];
  link: string;
  code?: string;
  steps?: string;
  delay?: number;
}

const ReferralCard = ({ name, reward, benefits, link, code, steps, delay = 0 }: ReferralCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="group relative"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-reward to-reward-glow rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500" />
      <div className="relative bg-card rounded-2xl p-6 border border-card-border hover:border-reward/50 transition-all duration-300">
        {/* Reward Badge */}
        <div className="absolute -top-3 -right-3">
          <div className="bg-gradient-to-r from-reward to-reward-glow text-reward-foreground px-4 py-1.5 rounded-full text-sm font-bold shadow-lg flex items-center gap-1.5">
            <Gift className="w-4 h-4" />
            {reward}
          </div>
        </div>

        {/* App Name */}
        <h3 className="text-xl font-bold text-foreground mb-3 pr-16">{name}</h3>

        {/* Steps if provided */}
        {steps && (
          <p className="text-muted-foreground text-sm mb-3 leading-relaxed">{steps}</p>
        )}

        {/* Benefits */}
        <ul className="space-y-2 mb-4">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="text-reward mt-0.5">✓</span>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>

        {/* Referral Code */}
        {code && (
          <div className="bg-muted/50 rounded-lg px-3 py-2 mb-4 border border-border">
            <span className="text-xs text-muted-foreground">Use code: </span>
            <span className="font-mono font-bold text-reward">{code}</span>
          </div>
        )}

        {/* CTA Button */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-reward to-reward-glow text-reward-foreground font-semibold py-3 px-6 rounded-xl hover:shadow-lg hover:shadow-reward/25 transition-all duration-300 hover:scale-[1.02]"
        >
          Get Started
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </motion.div>
  );
};

export default ReferralCard;
