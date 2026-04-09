'use client';

import { useEffect } from 'react';

interface NotesSectionProps {
  note: string;
  setNote: (val: string) => void;
}

export default function NotesSection({ note, setNote }: NotesSectionProps) {
  useEffect(() => {
    const savedNote = localStorage.getItem('calendar-note');
    if (savedNote) setNote(savedNote);
  }, [setNote]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newVal = e.target.value;
    setNote(newVal);
    localStorage.setItem('calendar-note', newVal);
  };

  return (
    <div className="flex flex-col h-full">
      <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3">
        Notes
      </h3>
      <textarea
        value={note}
        onChange={handleChange}
        placeholder="Jot down general memos..."
        className="flex-1 w-full p-0 text-xs border-none focus:ring-0 resize-none bg-transparent font-medium text-gray-500 leading-relaxed italic"
        style={{
          backgroundImage: 'linear-gradient(transparent, transparent 24px, #d1d5db 24px)',
          backgroundSize: '100% 25px',
          lineHeight: '25px',
        }}
      />
    </div>
  );
}