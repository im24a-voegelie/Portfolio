'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { translations } from '@/data/translations';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('de');

  useEffect(() => {
    const stored = window.localStorage.getItem('language');
    if (stored === 'de' || stored === 'en') {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- syncing from localStorage after mount to avoid SSR/client hydration mismatch
      setLanguage(stored);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('language', language);
    document.documentElement.lang = language;
    document.title = translations[language].meta.title;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', translations[language].meta.description);
    }
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'de' ? 'en' : 'de'));
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

export function useTranslation() {
  const { language } = useLanguage();
  return { t: translations[language], language };
}
