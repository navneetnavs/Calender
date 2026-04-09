interface DateGridProps {
    startDate: Date | null;
    endDate: Date | null;
    onDateClick: (date: Date) => void;
  }
  
  export default function DateGrid({ startDate, endDate, onDateClick }: DateGridProps) {
    const weekDays = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    const isWeekendDay = (day: string) => day === 'SAT' || day === 'SUN';
    

    const getCalendarDates = () => {
      const year = 2022;
      const month = 0;
      
      const firstDay = new Date(year, month, 1);
      const firstDayOfWeek = (firstDay.getDay() + 6) % 7; 
      
      const prevMonth = month === 0 ? 11 : month - 1;
      const prevYear = month === 0 ? year - 1 : year;
      const daysInPrevMonth = new Date(prevYear, prevMonth + 1, 0).getDate();
      const prevMonthDates = Array.from({ length: firstDayOfWeek }, (_, i) => 
        new Date(prevYear, prevMonth, daysInPrevMonth - firstDayOfWeek + i + 1)
      );
      
      const daysInCurrentMonth = new Date(year, month + 1, 0).getDate();
      const currentMonthDates = Array.from({ length: daysInCurrentMonth }, (_, i) => 
        new Date(year, month, i + 1)
      );
      
      const totalCells = 42;
      const remainingCells = totalCells - prevMonthDates.length - currentMonthDates.length;
      const nextMonthDates = Array.from({ length: remainingCells }, (_, i) => 
        new Date(year, month + 1, i + 1)
      );
      
      return [...prevMonthDates, ...currentMonthDates, ...nextMonthDates];
    };
  
    const getDayStatus = (day: Date) => {
      const dayOfWeek = day.getDay();
      const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
      const isCurrentMonth = day.getMonth() === 0 && day.getFullYear() === 2022;
      
      if (isCurrentMonth && isWeekend) {
        return 'bg-sky-100 text-sky-600';
      }
      
      if (startDate && day.getTime() === startDate.getTime()) return 'bg-blue-600 text-white rounded-l-md';
      if (endDate && day.getTime() === endDate.getTime()) return 'bg-blue-600 text-white rounded-r-md';
      if (startDate && endDate && day > startDate && day < endDate) return 'bg-blue-100';
      
      if (!isCurrentMonth) return 'text-gray-400';
      
      return '';
    };
  
    const calendarDates = getCalendarDates();
  
    return (
      <div className="pt-2">
        <div className="grid grid-cols-7 gap-y-1">
          {weekDays.map(day => (
            <div 
              key={day} 
              className={`text-center text-[10px] font-bold pb-2 ${
                isWeekendDay(day) ? 'text-sky-500' : 'text-gray-400'
              }`}
            >
              {day}
            </div>
          ))}
          
          {calendarDates.map((day) => (
            <button
              key={day.toISOString()}
              onClick={() => onDateClick(day)}
              className={`py-2 text-sm font-medium transition-colors hover:bg-gray-50 rounded-sm ${getDayStatus(day)}`}
            >
              {day.getDate()}
            </button>
          ))}
        </div>
      </div>
    );
  }