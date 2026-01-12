import { motion } from "framer-motion";
import { ExternalLink, Gift, Check } from "lucide-react";

interface ReferralCardProps {
  name: string;
  reward: string;
  benefits: string[];
  link: string;
  code?: string;
  steps: string[];
  delay?: number;
  logo: string;
  brandColor: string;
}

const ReferralCard = ({
  name,
  reward,
  benefits,
  link,
  code,
  steps,
  delay = 0,
  logo,
  brandColor,
}: ReferralCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className="group relative h-full"
    >
      {/* Glow effect */}
      <div
        className="absolute -inset-1 rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-all duration-700"
        style={{
          background: `linear-gradient(135deg, ${brandColor}60, hsl(45 93% 58% / 0.4))`,
        }}
      />

      <div className="relative bg-glass rounded-3xl p-6 border border-border/50 hover:border-primary/40 transition-all duration-500 overflow-hidden h-full flex flex-col">
        {/* Shimmer effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.07] to-transparent"
            style={{
              backgroundSize: "200% 100%",
              animation: "shimmer 2s ease-in-out infinite",
            }}
          />
        </div>

        {/* Header with logo and reward */}
        <div className="flex items-start justify-between mb-5 relative z-10">
          <div className="flex items-center gap-3">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center overflow-hidden shadow-lg border border-border/30"
              style={{
                background: `linear-gradient(135deg, ${brandColor}15, ${brandColor}30)`,
              }}
            >
              <img
                src={logo}
                alt={name}
                className="w-10 h-10 object-contain"
              />
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground">{name}</h3>
              <p className="text-xs text-muted-foreground">Referral Offer</p>
            </div>
          </div>

          {/* Reward Badge */}
          <div className="flex items-center gap-1.5 bg-gradient-to-r from-primary/15 to-reward-glow/15 border border-primary/30 text-primary px-3 py-1.5 rounded-full text-sm font-bold">
            <Gift className="w-3.5 h-3.5" />
            {reward}
          </div>
        </div>

        {/* Steps */}
        <div className="bg-secondary/60 rounded-2xl p-4 mb-5 border border-border/30 relative z-10">
          <p className="text-xs font-semibold text-primary mb-3 uppercase tracking-wider">
            How to Earn
          </p>
          <ol className="space-y-2.5">
            {steps.map((step, index) => (
              <li key={index} className="flex items-start gap-3">
                <span
                  className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                  style={{
                    background: `linear-gradient(135deg, ${brandColor}40, ${brandColor}20)`,
                    color: brandColor,
                  }}
                >
                  {index + 1}
                </span>
                <span className="text-sm text-foreground/80 leading-relaxed">
                  {step}
                </span>
              </li>
            ))}
          </ol>
        </div>

        {/* Benefits */}
        <div className="mb-5 relative z-10 flex-grow">
          <p className="text-xs font-semibold text-accent mb-3 uppercase tracking-wider">
            Benefits
          </p>
          <ul className="space-y-2">
            {benefits.map((benefit, index) => (
              <li
                key={index}
                className="flex items-start gap-2.5 text-sm text-muted-foreground"
              >
                <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-accent" />
                </div>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Referral Code */}
        {code && (
          <div className="bg-gradient-to-r from-primary/10 to-reward-glow/10 rounded-xl px-4 py-3 mb-5 border border-primary/20 relative z-10">
            <span className="text-xs text-muted-foreground block mb-1">
              Use Referral Code
            </span>
            <span className="font-mono font-bold text-primary text-xl tracking-widest">
              {code}
            </span>
          </div>
        )}

        {/* CTA Button */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10 w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary via-primary to-reward-glow text-primary-foreground font-bold py-4 px-6 rounded-xl hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] animate-gradient mt-auto"
        >
          Claim Reward
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </motion.div>
  );
};

export default ReferralCard;