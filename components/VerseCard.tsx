import React from 'react';
import { Verse, TemplateType } from '../types';
import { TEMPLATE_CONFIGS, APP_CONFIG } from '../constants';
import { Quote } from 'lucide-react';

interface VerseCardProps {
  verse: Verse;
  template: TemplateType;
  id?: string;
  className?: string;
}

export const VerseCard: React.FC<VerseCardProps> = ({ verse, template, id, className = '' }) => {
  const styles = TEMPLATE_CONFIGS[template];

  return (
    <div 
      id={id}
      className={`relative w-full aspect-[9/16] overflow-hidden flex flex-col justify-between p-8 shadow-2xl ${styles.bgClass} ${className}`}
      style={{ minHeight: '500px' }} // Ensure height on desktop
    >
      {/* Header */}
      <div className="flex flex-col items-center justify-center pt-4">
        <span className={`text-xs font-bold tracking-widest uppercase opacity-70 mb-2 ${styles.textClassEn}`}>
          {APP_CONFIG.year} PROMISE
        </span>
        <div className={`h-px w-12 ${styles.accentClass} bg-current opacity-30`}></div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center text-center space-y-6 z-10">
        <Quote className={`w-8 h-8 opacity-20 mb-2 ${styles.textClassKo}`} />
        
        {/* Korean Text - Primary */}
        <h1 className={`font-serif-kr text-2xl sm:text-3xl font-bold leading-relaxed break-keep px-2 ${styles.textClassKo}`}>
          {verse.korean_text}
        </h1>

        {/* English Text - Secondary */}
        <p className={`font-serif-en text-lg sm:text-xl italic leading-relaxed px-4 opacity-90 ${styles.textClassEn}`}>
          "{verse.english_text}"
        </p>
      </div>

      {/* Footer */}
      <div className="flex flex-col items-center justify-center pb-6 space-y-3 z-10">
        <div className={`flex flex-col items-center ${styles.accentClass}`}>
          <span className="font-serif-kr font-bold text-lg">{verse.reference_ko}</span>
          <span className="font-serif-en text-sm opacity-75">{verse.reference_en}</span>
        </div>
        
        <div className={`text-[10px] opacity-50 ${styles.textClassEn}`}>
          {verse.translation_ko} / {verse.translation_en}
        </div>

        <div className={`mt-4 text-xs font-semibold tracking-wide ${styles.textClassKo} opacity-80 border rounded-full px-3 py-1 border-current`}>
          {APP_CONFIG.churchName}
        </div>
      </div>

      {/* Decorative Overlay for Photo Blur */}
      {template === TemplateType.PHOTO_BLUR && (
        <div className="absolute inset-0 bg-black/20 pointer-events-none z-0"></div>
      )}
    </div>
  );
};