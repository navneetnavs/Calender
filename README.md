# Interactive Wall Calendar

A beautiful, interactive wall calendar component inspired by physical wall calendars. Features a mountain climbing theme with a realistic hanging mechanism, spiral binding, and intuitive date range selection.

![Calendar Preview](public/calenderhero.png)

## ✨ Features

- **Wall Calendar Aesthetic**: Designed to look like a real wall calendar hanging on a nail with spiral binding
- **Interactive Date Selection**: Click any date to select a range (start and end dates)
- **Visual Feedback**: Clear highlighting for selected dates, weekends, and the range in between
- **Persistent Notes**: Jot down notes that automatically save to localStorage
- **Responsive Design**: Works beautifully on desktop and mobile devices
- **January 2022 Theme**: Mountain climbing hero image with diagonal blue accents

## How to Use

1. **Select Dates**: Click on a date to set the start date, then click another date to set the end date
2. **Take Notes**: Use the notes section on the left to write memos - they're automatically saved
3. **Clear Selection**: Click any date again to start a new selection

## Project Structure

```
calendar-challenge/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with fonts
│   ├── page.tsx           # Main page with wall background
│   └── globals.css        # Global styles & Tailwind
├── components/            # React components
│   ├── CalendarRoot.tsx   # Main calendar container
│   ├── DateGrid.tsx       # Calendar grid with date selection
│   ├── HeroImage.tsx      # Hero section with diagonal design
│   └── NotesSection.tsx   # Note-taking component
├── public/               # Static assets
│   └── calenderhero.png   # Mountain climbing image
└── Configuration files
```

## Design Highlights

- **Hanging Mechanism**: Visual nail and wire holding the calendar
- **Spiral Binding**: Realistic spiral rings at the top
- **Diagonal Design**: Dynamic hero section with blue accent
- **Weekend Highlighting**: Saturdays and Sundays in light blue
- **Lined Paper Notes**: Authentic notebook feel for the notes section

