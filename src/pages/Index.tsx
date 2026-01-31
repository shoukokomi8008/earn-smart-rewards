import { motion } from "framer-motion";
import { Sparkles, TrendingUp, Wallet, Zap, Gift } from "lucide-react";
import ReferralCard from "@/components/ReferralCard";

import sliceLogo from "@/assets/slice-logo.png";
import angeloneLogo from "@/assets/angelone-logo.png";
import airtelLogo from "@/assets/airtel-logo.png";
import upstoxLogo from "@/assets/upstox-logo.png";
import naviLogo from "@/assets/navi-logo.png";

const referrals = [
  {
    name: "Slice App",
    reward: "₹150",
    steps: [
      "Download the Slice app",
      "Install and complete KYC",
      "Deposit ₹1 to your account",
      "Send ₹1 to anyone via UPI",
    ],
    benefits: [
      "Earn while you use UPI",
      "Daily interest at 100% RBI repo rate",
      "Money works smarter than sitting idle",
    ],
    code: "&BHAVE87149",
    link: "https://t.sliceit.com/s?c=HbxZTGt&ic=BHAVE87149",
    logo: sliceLogo,
    brandColor: "#9333EA",
  },
  {
    name: "Angel One",
    reward: "₹300",
    steps: [
      "Download Angel One app",
      "Complete your KYC verification",
      "Get FREE Demat Account instantly",
    ],
    benefits: [
      "All trades at just ₹20",
      "Quick SIP in Direct Mutual Funds",
      "₹1 Lakh MTF at 0% interest",
    ],
    link: "https://angel-one.onelink.me/Wjgr/cacvklb7",
    logo: angeloneLogo,
    brandColor: "#FF5722",
  },
  {
    name: "Airtel Payments Bank",
    reward: "₹100",
    steps: [
      "Download Airtel Thanks app",
      "Open Payments Bank account",
      "Complete verification",
      "Get instant cashback",
    ],
    benefits: [
      "Instant account opening",
      "Safe & secure banking",
      "UPI payments enabled",
    ],
    link: "https://cglk.in/c/bjllpxxw",
    logo: airtelLogo,
    brandColor: "#ED1C24",
  },
  {
    name: "Upstox",
    reward: "₹200",
    steps: [
      "Download Upstox app",
      "Sign up using referral link",
      "Complete KYC within 7 days",
    ],
    benefits: [
      "Stock like you shop",
      "Buy Top Funds & Insurance",
      "News & expert insights",
      "Pro Mode for F&O trading",
    ],
    link: "https://upstox.onelink.me/0H1s/43AVDM",
    logo: upstoxLogo,
    brandColor: "#7B2D8E",
  },
  {
    name: "Navi UPI",
    reward: "₹100",
    steps: [
      "Download Navi app",
      "Set up your UPI account",
      "Complete 1 UPI transaction",
      "Earn 100RS on first payment",
    ],
    benefits: [
      "Up to ₹100 back on first payment",
      "Rewards on every transaction",
      "Easy & fast UPI payments",
    ],
    link: "https://r.navi.com/5uCCpB",
    logo: naviLogo,
    brandColor: "#00D09C",
  },
];

const Index = () => {
  const totalRewards = referrals.reduce((sum, ref) => {
    const amount = parseInt(ref.reward.replace(/[₹,]/g, ""));
    return sum + amount;
  }, 0);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="fixed inset-0 bg-grid opacity-40" />
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-gradient-to-br from-primary/25 to-accent/20 rounded-full blur-[100px] animate-pulse-glow" />
        <div
          className="absolute bottom-[-10%] right-[-5%] w-[450px] h-[450px] bg-gradient-to-br from-accent/20 to-primary/25 rounded-full blur-[100px] animate-pulse-glow"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-[30%] right-[10%] w-[250px] h-[250px] bg-reward-glow/15 rounded-full blur-[80px] animate-float"
        />
        <div
          className="absolute bottom-[30%] left-[15%] w-[200px] h-[200px] bg-accent/10 rounded-full blur-[60px] animate-float"
          style={{ animationDelay: "3s" }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12 md:py-20">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-glass rounded-full px-5 py-2.5 mb-8 glow-gold"
          >
            <Gift className="w-4 h-4 text-primary" />
            <span className="text-sm text-foreground/80 font-medium">
              Exclusive Referral Rewards
            </span>
            <Sparkles className="w-4 h-4 text-accent" />
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 tracking-tight">
            Earn Up To{" "}
            <span className="text-gradient">₹{totalRewards}</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Join these amazing apps using my referral links and unlock instant
            cash rewards. Simple steps, real money in your pocket!
          </p>

          {/* Stats Cards */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-glass rounded-2xl px-6 py-4 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <Wallet className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-3xl font-bold text-foreground">5</p>
                <p className="text-sm text-muted-foreground">Apps Available</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-glass rounded-2xl px-6 py-4 flex items-center gap-4 glow-gold"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/30 to-reward-glow/30 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-3xl font-bold text-gradient-warm">
                  ₹{totalRewards}
                </p>
                <p className="text-sm text-muted-foreground">Total Rewards</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Referral Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {referrals.map((referral, index) => (
            <ReferralCard
              key={referral.name}
              {...referral}
              delay={0.1 * (index + 1)}
            />
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="text-center mt-20"
        >
          <p className="text-muted-foreground text-sm bg-glass inline-block px-6 py-3 rounded-full">
            T&C Apply • Links may expire • Sign up with new accounts only
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
