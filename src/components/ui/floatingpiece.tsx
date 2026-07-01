import { motion } from "framer-motion";

interface FloatingPieceProps {
  src: string;
  className?: string;
  duration?: number;
  delay?: number;
  rotate?: number;
}

export default function FloatingPiece({
  src,
  className,
  duration = 5,
  delay = 0,
  rotate = 0,
}: FloatingPieceProps) {
  return (
    <motion.img
      src={src}
      animate={{
        y: [-10, 10, -10],
        rotate: [rotate - 2, rotate + 2, rotate - 2],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      width={100}
      className={`
                absolute
                select-none
                pointer-events-none
                w-3
                scale-50
                drop-shadow-[0_0_40px_rgba(59,130,246,.35)]
                ${className}
            `}
    />
  );
}
