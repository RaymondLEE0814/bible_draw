import { Verse } from '../types';
import { MOCK_VERSES } from '../constants';

// Simulating a delay for the draw animation
export const drawRandomVerse = async (delayMs: number = 1500): Promise<Verse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * MOCK_VERSES.length);
      resolve(MOCK_VERSES[randomIndex]);
    }, delayMs);
  });
};

// Logic to download element as image (Mock implementation using Canvas/Blob APIs conceptual flow)
// In a real implementation, we would use 'html-to-image' package.
// Here we provide a helper that would wrap that logic.
export const downloadVerseCard = async (elementId: string, fileName: string) => {
  try {
    // Note: Since we cannot install external packages like html-to-image in this environment,
    // we are simulating the success of this action. 
    // In a real app:
    // import { toPng } from 'html-to-image';
    // const dataUrl = await toPng(document.getElementById(elementId));
    // const link = document.createElement('a');
    // link.download = fileName;
    // link.href = dataUrl;
    // link.click();
    console.log(`Downloading ${elementId} as ${fileName}`);
    alert("In a production build, this would download the high-res PNG. (Simulated)");
    return true;
  } catch (error) {
    console.error("Error downloading image", error);
    return false;
  }
};
