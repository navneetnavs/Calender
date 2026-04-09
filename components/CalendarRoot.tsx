'use client';

import { useState } from 'react';
import HeroImage from './HeroImage';
import DateGrid from './DateGrid';
import NotesSection from './NotesSection';

export default function CalendarRoot() {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [note, setNote] = useState('');

  const handleDateClick = (date: Date) => {
    if (!startDate || (startDate && endDate)) {
      setStartDate(date);
      setEndDate(null);
    } else if (date < startDate) {
      setStartDate(date);
    } else {
      setEndDate(date);
    }
  };

  return (
    <div className="relative bg-white max-w-3xl mx-auto transition-all duration-300">
      <div className="absolute -top-16 left-1/2 -translate-x-1/2 z-20">
        <div className="absolute top-8 left-1/2 -translate-x-1/2 w-0.5 h-12 bg-gray-400" />
        <div className="absolute top-8 left-1/2 -translate-x-1/2 w-0.5 h-12 bg-gray-400 rotate-12 origin-top" />
        <div className="absolute top-8 left-1/2 -translate-x-1/2 w-0.5 h-12 bg-gray-400 -rotate-12 origin-top" />
        
        <div className="w-4 h-4 bg-gradient-to-br from-gray-300 to-gray-500 rounded-full shadow-lg border border-gray-400" />
        <div className="absolute top-1 left-1 w-2 h-2 bg-white rounded-full opacity-50" />
      </div>

      <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-full flex justify-center gap-3 z-10">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="relative">
            <div className="w-3 h-6 border-2 border-gray-400 rounded-full bg-gradient-to-b from-gray-300 to-gray-500 shadow-sm" />
            <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1 h-4 bg-gray-700 rounded-full" />
          </div>
        ))}
      </div>
      
      <HeroImage />

      <div className="flex flex-col lg:flex-row px-8 py-6 gap-8">
        <div className="flex-1 lg:pr-6 min-h-[200px]">
          <NotesSection note={note} setNote={setNote} />
        </div>

        <div className="flex-[1.8]">
          <DateGrid 
            startDate={startDate} 
            endDate={endDate} 
            onDateClick={handleDateClick} 
          />
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-black/10 to-transparent" />
    </div>
  );
}