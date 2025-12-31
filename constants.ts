import { Verse, TemplateType } from './types';

export const APP_CONFIG = {
  churchName: "Way Maker JESUS",
  year: "2026",
  eventTitle: "New Year Verse Draw",
};

export const MOCK_VERSES: Verse[] = [
  {
    id: '1',
    reference_ko: '빌립보서 4:13',
    reference_en: 'Philippians 4:13',
    korean_text: '내게 능력 주시는 자 안에서 내가 모든 것을 할 수 있느니라',
    english_text: 'I can do all things through Christ who strengthens me.',
    translation_ko: '개역개정',
    translation_en: 'NIV',
  },
  {
    id: '2',
    reference_ko: '이사야 41:10',
    reference_en: 'Isaiah 41:10',
    korean_text: '두려워하지 말라 내가 너와 함께 함이라 놀라지 말라 나는 네 하나님이 됨이라',
    english_text: 'So do not fear, for I am with you; do not be dismayed, for I am your God.',
    translation_ko: '개역개정',
    translation_en: 'NIV',
  },
  {
    id: '3',
    reference_ko: '예레미야 29:11',
    reference_en: 'Jeremiah 29:11',
    korean_text: '너희를 향한 나의 생각을 내가 아나니 평안이요 재앙이 아니니라 너희에게 미래와 희망을 주는 것이니라',
    english_text: '"For I know the plans I have for you," declares the LORD, "plans to prosper you and not to harm you, plans to give you hope and a future."',
    translation_ko: '개역개정',
    translation_en: 'NIV',
  },
  {
    id: '4',
    reference_ko: '시편 23:1',
    reference_en: 'Psalm 23:1',
    korean_text: '여호와는 나의 목자시니 내게 부족함이 없으리로다',
    english_text: 'The LORD is my shepherd, I lack nothing.',
    translation_ko: '개역개정',
    translation_en: 'NIV',
  },
  {
    id: '5',
    reference_ko: '잠언 3:5-6',
    reference_en: 'Proverbs 3:5-6',
    korean_text: '너는 마음을 다하여 여호와를 신뢰하고 네 명철을 의지하지 말라 너는 범사에 그를 인정하라 그리하면 네 길을 지도하시리라',
    english_text: 'Trust in the LORD with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.',
    translation_ko: '개역개정',
    translation_en: 'NIV',
  },
];

export const TEMPLATE_CONFIGS: Record<TemplateType, { bgClass: string; textClassKo: string; textClassEn: string; accentClass: string }> = {
  [TemplateType.SIMPLE_MODERN]: {
    bgClass: 'bg-gradient-to-br from-slate-50 to-slate-200',
    textClassKo: 'text-slate-900',
    textClassEn: 'text-slate-600',
    accentClass: 'text-blue-900',
  },
  [TemplateType.PAPER_TEXTURE]: {
    bgClass: 'bg-[#fdfbf7] border-8 border-double border-[#e3dcd2]',
    textClassKo: 'text-[#4a4036]',
    textClassEn: 'text-[#8c7b6c]',
    accentClass: 'text-[#8b5e3c]',
  },
  [TemplateType.PHOTO_BLUR]: {
    bgClass: 'bg-gradient-to-b from-indigo-900 to-purple-900 text-white',
    textClassKo: 'text-white drop-shadow-md',
    textClassEn: 'text-indigo-100 drop-shadow-sm',
    accentClass: 'text-yellow-200',
  }
};