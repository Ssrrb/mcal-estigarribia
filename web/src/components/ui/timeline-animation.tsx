import { type HTMLMotionProps, motion, useInView } from "motion/react";
import {
  useMemo,
  type ComponentPropsWithoutRef,
  type ElementType,
  type ReactNode,
  type RefObject,
} from "react";
import type { Variants } from "motion/react";

type TimelineContentProps<T extends ElementType> = {
  children?: ReactNode;
  animationNum: number;
  className?: string;
  timelineRef: RefObject<HTMLElement | null>;
  as?: T;
  customVariants?: Variants;
  once?: boolean;
} & (T extends keyof HTMLElementTagNameMap
  ? HTMLMotionProps<T>
  : ComponentPropsWithoutRef<T>);

export const TimelineContent = <T extends ElementType = "div">({
  children,
  animationNum,
  timelineRef,
  className,
  as,
  customVariants,
  once = false,
  ...props
}: TimelineContentProps<T>) => {
  const defaultSequenceVariants = {
    visible: (i: number) => ({
      filter: "blur(0px)",
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.5,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(20px)",
      y: 0,
      opacity: 0,
    },
  };

  // Use custom variants if provided, otherwise use default
  const sequenceVariants = customVariants || defaultSequenceVariants;

  const isInView = useInView(timelineRef, {
    once,
  });

  const Component = (as || "div") as ElementType;

  const MotionComponent = useMemo(() => {
    if (typeof Component === "string") {
      return motion[Component as keyof typeof motion] as ElementType;
    }

    return motion.create(Component) as ElementType;
  }, [Component]);

  return (
    <MotionComponent
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      custom={animationNum}
      variants={sequenceVariants}
      className={className}
      {...props}
    >
      {children}
    </MotionComponent>
  );
};
