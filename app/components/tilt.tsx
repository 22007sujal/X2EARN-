
import { useEffect, RefObject } from "react";

export default function useTilt(ref: RefObject<HTMLElement>, maxTilt = 15) {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const rotateY = (x / (rect.width / 2)) * maxTilt;
      const rotateX = (y / (rect.height / 2)) * -maxTilt;

      element.style.transform = `
        translateZ(25px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
      `;
    };

    const handleMouseLeave = () => {
      element.style.transform = `
        translateZ(0px)
        rotateX(0deg)
        rotateY(0deg)
      `;
    };

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [ref, maxTilt]);
}
