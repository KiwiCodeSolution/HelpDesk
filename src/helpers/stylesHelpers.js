export const textEffect =
  "focus:text-transparent hover:text-transparent bg-clip-text bg-gradient-to-b from-bg-green to-bg-blue ";

export const socIconsEffect = "hover:shadow-socialIcon focus:shadow-socialIcon";

export const hoverAnimations =
  "after:block after:bg-gradient-to-r from-bg-green to-bg-blue after:opacity-[.8] after:w-full after:h-[2px] after:rounded-full after:absolute  after:translate-x-[-120%] hover:after:translate-x-0 hover:after:transition-transform hover:after:ease-in hover:after:duration-550";

export const titleAnimation = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { delay: 0.3, duration: 0.7 },
  },
};

export const blocAnimation = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: custom => ({ scale: 1, opacity: 1, transition: { delay: custom * 0.3, duration: 0.7 } }),
};
