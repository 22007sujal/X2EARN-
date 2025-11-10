
import { useEffect, RefObject } from "react";

export default function useDollar(morphText: RefObject<HTMLElement>) {
  useEffect(() => {
    if (!morphText.current) return;

    const startText = '$$$$$$$';
    const endText = 'DOLLARS';
    const delay = 200; // delay between each character change

    
    morphText.current.innerHTML = startText.split('').map((char, i) => 
        `<span class="char" data-index="${i}">${char}</span>`
    ).join('');

    setTimeout(() => {
        for (let i = 0; i < endText.length; i++) {
            setTimeout(() => {
                const charSpan = morphText.current?.querySelector(`[data-index="${i}"]`) as HTMLElement;
                charSpan.style.transform = 'scale(1.3) rotateY(180deg)';
                charSpan.style.opacity = '0';
                
                setTimeout(() => {
                    charSpan.textContent = endText[i];
                    charSpan.style.transform = 'scale(1) rotateY(0deg)';
                    charSpan.style.opacity = '1';
                }, 150);
            }, i * delay);
        }
    }, 0);
  }, [morphText]);
}
