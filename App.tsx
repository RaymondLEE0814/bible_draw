import React, { useState, useEffect } from 'react';
import { AppScreen, Verse, TemplateType } from './types';
import { drawRandomVerse, downloadVerseCard } from './services/drawService';
import { VerseCard } from './components/VerseCard';
import { Button } from './components/Button';
import { AdminDashboard } from './components/AdminDashboard';
import { Sparkles, Download, Share2, RefreshCw, ChevronLeft, Lock } from 'lucide-react';
import { APP_CONFIG } from './constants';

const App: React.FC = () => {
  const [screen, setScreen] = useState<AppScreen>(AppScreen.LANDING);
  const [verse, setVerse] = useState<Verse | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [template, setTemplate] = useState<TemplateType>(TemplateType.SIMPLE_MODERN);

  // Handle drawing a verse
  const handleDraw = async () => {
    setScreen(AppScreen.DRAWING);
    setIsAnimating(true);
    
    // Perform the "draw"
    const drawnVerse = await drawRandomVerse(2000); // 2 second suspense
    
    setVerse(drawnVerse);
    setIsAnimating(false);
    setScreen(AppScreen.RESULT);
  };

  const handleDownload = () => {
    downloadVerseCard('result-card', `${APP_CONFIG.churchName.replace(/\s+/g, '-')}-Verse-2026.png`);
  };

  const handleShare = async () => {
    // Basic Web Share API implementation
    if (navigator.share) {
      try {
        await navigator.share({
          title: APP_CONFIG.eventTitle,
          text: `[${APP_CONFIG.churchName}] 2026 내게 주신 말씀: ${verse?.reference_ko} / ${verse?.reference_en}`,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      alert('Sharing is not supported on this browser. Please take a screenshot!');
    }
  };

  // --- Render Functions ---

  const renderLanding = () => (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center max-w-md mx-auto animate-in fade-in duration-700">
      <div className="mb-8 relative">
        <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-20 rounded-full"></div>
        <div className="relative bg-white p-4 rounded-2xl shadow-xl rotate-3">
          <div className="w-32 h-44 bg-slate-900 rounded-xl flex items-center justify-center border-4 border-double border-yellow-500">
            <span className="text-4xl">🕊️</span>
          </div>
        </div>
      </div>
      
      <h1 className="text-3xl font-bold font-serif-kr text-slate-900 mb-2">
        {APP_CONFIG.year} 말씀뽑기
      </h1>
      <p className="text-slate-500 mb-8 font-serif-en italic">
        {APP_CONFIG.churchName}
      </p>

      <div className="bg-white p-6 rounded-2xl shadow-lg w-full mb-8 border border-slate-100">
        <p className="text-slate-600 mb-6 leading-relaxed font-serif-kr">
          새로운 한 해,<br/>
          주님이 주시는 은혜의 말씀을 기대하세요.
        </p>
        <Button fullWidth onClick={handleDraw} className="bg-slate-900 hover:bg-black text-lg py-4 shadow-xl shadow-slate-900/20 font-serif-kr">
            <Sparkles className="w-5 h-5 mr-2 text-yellow-400" />
            말씀 뽑기 (Draw)
        </Button>
      </div>

      <button 
        onClick={() => setScreen(AppScreen.ADMIN)}
        className="mt-8 text-xs text-slate-400 flex items-center gap-1 hover:text-slate-600 transition-colors"
      >
        <Lock className="w-3 h-3" /> 관리자 (Admin)
      </button>
    </div>
  );

  const renderDrawing = () => (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900 text-white p-6">
      <div className="relative w-48 h-72 perspective-1000">
        <div className="w-full h-full relative preserve-3d animate-[spin_2s_linear_infinite]">
             {/* Card Back visual for animation */}
             <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-2xl border-4 border-white/20 shadow-2xl flex items-center justify-center backface-hidden">
                <span className="text-4xl opacity-50">✝</span>
             </div>
        </div>
      </div>
      <p className="mt-8 text-xl font-medium animate-pulse font-serif-kr">
        기도하는 마음으로...
      </p>
      <p className="text-sm text-slate-400 mt-2 font-serif-en">
        Selecting your verse...
      </p>
    </div>
  );

  const renderResult = () => (
    <div className="min-h-screen bg-slate-100 pb-12">
      {/* Navbar */}
      <div className="bg-white px-4 py-3 shadow-sm flex items-center justify-between sticky top-0 z-50">
        <button onClick={() => setScreen(AppScreen.LANDING)} className="p-2 text-slate-600 hover:bg-slate-50 rounded-full">
            <ChevronLeft className="w-6 h-6" />
        </button>
        <span className="font-semibold text-slate-800 font-serif-kr">나의 말씀 카드</span>
        <div className="w-10"></div> {/* Spacer */}
      </div>

      <div className="max-w-md mx-auto p-4 animate-in slide-in-from-bottom-4 duration-500">
        
        {/* The Card Component */}
        <div className="mb-6 shadow-2xl rounded-sm overflow-hidden">
           {verse && <VerseCard id="result-card" verse={verse} template={template} />}
        </div>

        {/* Template Selector */}
        <div className="mb-6 overflow-x-auto pb-2 scrollbar-hide">
            <div className="flex gap-3 px-1">
                {Object.values(TemplateType).map((t) => (
                    <button
                        key={t}
                        onClick={() => setTemplate(t)}
                        className={`flex-shrink-0 px-4 py-2 rounded-full text-xs font-medium border transition-all ${
                            template === t 
                            ? 'bg-slate-900 text-white border-slate-900' 
                            : 'bg-white text-slate-600 border-slate-200 hover:border-slate-400'
                        }`}
                    >
                        {t === TemplateType.SIMPLE_MODERN ? '심플 모던' : 
                         t === TemplateType.PAPER_TEXTURE ? '종이 질감' : '감성 배경'}
                    </button>
                ))}
            </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3 mb-4">
            <Button onClick={handleDownload} variant="primary" className="font-serif-kr">
                <Download className="w-4 h-4 mr-2" /> 이미지 저장
            </Button>
            <Button onClick={handleShare} variant="secondary" className="font-serif-kr">
                <Share2 className="w-4 h-4 mr-2" /> 공유하기
            </Button>
        </div>

        <Button 
            onClick={() => setScreen(AppScreen.LANDING)} 
            variant="ghost" 
            fullWidth 
            className="text-slate-500 font-serif-kr"
        >
            <RefreshCw className="w-4 h-4 mr-2" /> 다시 뽑기 (Retry)
        </Button>
      </div>
    </div>
  );

  return (
    <div className="antialiased min-h-screen bg-slate-50">
      {screen === AppScreen.LANDING && renderLanding()}
      {screen === AppScreen.DRAWING && renderDrawing()}
      {screen === AppScreen.RESULT && renderResult()}
      {screen === AppScreen.ADMIN && <AdminDashboard onExit={() => setScreen(AppScreen.LANDING)} />}
    </div>
  );
};

export default App;