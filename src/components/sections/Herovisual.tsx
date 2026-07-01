import { motion } from "framer-motion";

// Replace this later with your actual logo
import logo from "../../assets/bishop.png";
export default function HeroVisual() {
  return (
    <div className="relative flex h-150 items-center justify-center overflow-hidden">
      <>
        <div className="absolute h-125 w-125 rounded-full bg-blue-500/20 blur-[120px]" />
        <div className="absolute inset-0 opacity-30 bg-[linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] bg-size-[40px_40px]" />
        <div className="absolute h-87.5 w-87.5 rounded-full bg-violet-500/25 blur-[100px]" />
      </>

      <motion.div
        animate={{
          y: [-8, 8, -8],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
    absolute
    left-1/2
    top-1/2
    h-64
    w-64
    -translate-x-1/2
    -translate-y-1/2
    rotate-12
    rounded-2xl
    border
    border-white/10
    opacity-40
  "
        style={{
          backgroundImage: `
      linear-gradient(45deg,#ffffff30 25%,transparent 25%),
      linear-gradient(-45deg,#ffffff30 25%,transparent 25%),
      linear-gradient(45deg,transparent 75%,#ffffff30 75%),
      linear-gradient(-45deg,transparent 75%,#ffffff30 75%)
    `,
          backgroundSize: "48px 48px",
          backgroundPosition: "0 0,0 24px,24px -24px,-24px 0",
        }}
      />
      <motion.img
        src={logo}
        alt="ChessR"
        animate={{
          y: [-12, 12, -12],
          rotate: [-2, 2, -2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
    absolute
    left-1/2
    top-1/2
    z-20
    h-36
    -translate-x-1/2
    -translate-y-1/2
    drop-shadow-[0_0_40px_rgba(59,130,246,.5)]
  "
      />
      {/* <FloatingPiece
        src={knight}
        className="left-2 top-8 w-24 opacity-90"
        duration={5.4}
      />

      <FloatingPiece
        src={rook}
        className="right-8 top-28 w-20 opacity-70 blur-[0.3px]"
        duration={6.1}
        delay={1}
      /> */}
    </div>
  );
}
