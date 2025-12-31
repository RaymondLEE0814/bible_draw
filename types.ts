export interface Verse {
  id: string;
  reference_ko: string; // e.g., "빌립보서 4:13"
  reference_en: string; // e.g., "Philippians 4:13"
  korean_text: string;
  english_text: string;
  translation_ko: string; // e.g., "개역개정"
  translation_en: string; // e.g., "NIV"
  tags?: string[];
}

export enum AppScreen {
  LANDING = 'LANDING',
  DRAWING = 'DRAWING',
  RESULT = 'RESULT',
  ADMIN = 'ADMIN',
}

export enum TemplateType {
  SIMPLE_MODERN = 'SIMPLE_MODERN',
  PAPER_TEXTURE = 'PAPER_TEXTURE',
  PHOTO_BLUR = 'PHOTO_BLUR',
}

export interface DrawConfig {
  allowDuplicates: boolean;
  oneDrawPerUser: boolean;
  maxRedraws: number;
}

export interface AdminStats {
  totalDraws: number;
  uniqueUsers: number;
  shares: number;
  saves: number;
  popularVerses: { ref: string; count: number }[];
}