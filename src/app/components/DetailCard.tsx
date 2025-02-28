import { AnimatePresence, motion } from 'framer-motion';
import React from 'react'
import { CanvasRevealEffect } from './ui/canvas-reveal-effect';

type Props = {
    text: string;
}

const DetailCard = (props: Props) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}
    className="h-[200px] flex flex-col lg:flex-row overflow-hidden items-center justify-center bg-black w-full rounded-xl gap-4 mx-auto px-8 relative"
  >
    <p className="md:text-2xl text-2xl font-medium text-center text-white relative z-[2] max-w-2xl mx-auto">
      {props.text}
    </p>
    <AnimatePresence>
      {hovered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="h-full w-full absolute inset-0"
        >
          <CanvasRevealEffect
            animationSpeed={5}
            containerClassName="bg-purple-950"
            colors={[
              [59, 130, 246],
              [139, 92, 246],
            ]}
            opacities={[
              0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 1,
            ]}
            dotSize={8}
          />
        </motion.div>
      )}
    </AnimatePresence>
  </div>
  )
}

export default DetailCard