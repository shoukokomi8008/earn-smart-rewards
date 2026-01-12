import { motion } from "framer-motion";
import { Sparkles, TrendingUp, Wallet, Zap } from "lucide-react";
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
    logo: "https://play-lh.googleusercontent.com/GmVLn4aQrlZ0qJPLZ0bWNQ0pJBJN9Wyt9JfVCxVrRvWVKELJZLhEQCzlZCXZZNJZGQ=w240-h480-rw",
    brandColor: "#FF6B35",
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
    logo: "https://play-lh.googleusercontent.com/s6oFYpPmXQYjYJ9sQ7nFWHrCrLWlKdQzMA8G8mUZxmqR0mPZVJsJKzT_g0BpN_ZiOA=w240-h480-rw",
    brandColor: "#FF5722",
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
    logo: "https://play-lh.googleusercontent.com/2xVuaHSZZXWVQnMHKGWBQl3hZwJZH_fJQQrJWLIZLZhw3HZS5MvKZ3JXQN1Z1Z3JJZQ=w240-h480-rw",
    brandColor: "#ED1C24",
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
    logo: "https://play-lh.googleusercontent.com/rGF8xr1YZ-fQKHBRMgXMX_k5LPMxG_X6Z-RYKGZr3QlNJVRZLJGW9NJWkDU9dH5PYvE=w240-h480-rw",
    brandColor: "#7B2D8E",
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
    logo: "https://play-lh.googleusercontent.com/IYKJuMSFzJcYyQdJdJ5d1q3xSq3w3JG2Ja5qSFQ1H7n-aGCy0Q4NJyL7DQXC8Q3qnA=w240-h480-rw",
    brandColor: "#00D09C",
  },
];

const Index = () => {
  const totalRewards = referrals.reduce((sum, ref) => {
    const amount = parseInt(ref.reward.replace(/[₹,]/g, ''));
    return sum + amount;
  }, 0);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="fixed inset-0 bg-grid opacity-30" />
      <div className="fixed top-0 left-0 w-full h-full">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-[40%] right-[20%] w-[300px] h-[300px] bg-reward-glow/15 rounded-full blur-[100px] animate-float" />
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
            className="inline-flex items-center gap-2 bg-glass border border-border/50 rounded-full px-5 py-2.5 mb-8"
          >
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground font-medium">Exclusive Referral Rewards</span>
            <Sparkles className="w-4 h-4 text-accent" />
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 tracking-tight">
            Earn Up To{" "}
            <span className="text-gradient">₹{totalRewards}</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Join these amazing apps using my referral links and get instant rewards. 
            Simple steps, real money!
          </p>

          {/* Stats Cards */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-glass rounded-2xl px-6 py-4 border border-border/50 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
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
              className="bg-glass rounded-2xl px-6 py-4 border border-border/50 flex items-center gap-4 glow-green"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-3xl font-bold text-gradient">₹{totalRewards}</p>
                <p className="text-sm text-muted-foreground">Total Rewards</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Referral Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {referrals.map((referral, index) => (
            <ReferralCard
              key={referral.name}
              {...referral}
              delay={0.15 * (index + 1)}
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
          <p className="text-muted-foreground text-sm bg-glass inline-block px-6 py-3 rounded-full border border-border/50">
            T&C Apply • Links may expire • Sign up with new accounts only
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;