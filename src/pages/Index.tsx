import { motion } from "framer-motion";
import { Sparkles, TrendingUp, Wallet } from "lucide-react";
import ReferralCard from "@/components/ReferralCard";

const referrals = [
  {
    name: "Slice App",
    reward: "₹150",
    steps: "Download → Install → Complete KYC → Deposit ₹1 → Send ₹1 to anyone",
    benefits: [
      "Earn while you use UPI",
      "Daily interest at 100% RBI repo rate",
      "Money works smarter than sitting idle",
    ],
    code: "ABHIS13394",
    link: "https://t.sliceit.com/s?c=k5Lx12e&ic=ABHIS13394",
  },
  {
    name: "Angel One",
    reward: "₹300",
    steps: "Download → Complete KYC → Get Free Demat Account",
    benefits: [
      "All trades at just ₹20",
      "Quick SIP in Direct Mutual Funds",
      "₹1 Lakh MTF at 0% interest",
      "FREE Demat Account",
    ],
    link: "https://angel-one.onelink.me/Wjgr/7usia5px",
  },
  {
    name: "Airtel Payments Bank",
    reward: "₹100",
    steps: "Download → Create Account → Get Cashback",
    benefits: [
      "Instant account opening",
      "Cashback on account creation",
      "Safe & secure banking",
      "UPI payments enabled",
    ],
    link: "https://airtel.onelink.me/fz7c/xyc2q5c3",
  },
  {
    name: "Upstox",
    reward: "₹200",
    steps: "Download → Complete KYC within 7 days",
    benefits: [
      "Stock like you shop",
      "Buy Top Funds & Insurance",
      "News & expert insights",
      "Pro Mode for F&O trading",
    ],
    link: "https://upstox.onelink.me/0H1s/2YCQPN",
  },
  {
    name: "Navi UPI",
    reward: "₹150",
    steps: "Download → Complete 10 UPI transactions",
    benefits: [
      "Earn rewards on every payment",
      "Up to ₹100 back on first payment",
      "Easy UPI transactions",
      "Multiple rewards on usage",
    ],
    link: "https://r.navi.com/5uCCpB",
  },
];

const Index = () => {
  const totalRewards = referrals.reduce((sum, ref) => {
    const amount = parseInt(ref.reward.replace(/[₹,]/g, ''));
    return sum + amount;
  }, 0);

  return (
    <div className="min-h-screen bg-background bg-grid relative overflow-hidden">
      {/* Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-reward/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-reward-glow/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 container mx-auto px-4 py-12 md:py-20">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-secondary/50 border border-border rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-reward" />
            <span className="text-sm text-muted-foreground">Exclusive Referral Rewards</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Earn Up To <span className="text-gradient">₹{totalRewards}</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Join these amazing apps using my referral links and get instant rewards. 
            Simple steps, real money!
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-reward/10 flex items-center justify-center">
                <Wallet className="w-5 h-5 text-reward" />
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-foreground">5</p>
                <p className="text-xs text-muted-foreground">Apps</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-reward/10 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-reward" />
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-gradient">₹{totalRewards}</p>
                <p className="text-xs text-muted-foreground">Total Rewards</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Referral Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-16 text-muted-foreground text-sm"
        >
          <p>T&C Apply • Links may expire</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
