import {
  MotionValue,
  SpringOptions,
  useSpring,
  useTransform,
} from 'framer-motion';

export const useSmoothTransform = (
  value: MotionValue<number>,
  springOptions: SpringOptions,
  transformer: (value: number) => number
) => useSpring(useTransform(value, transformer), springOptions);
