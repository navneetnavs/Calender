export default function HeroImage() {
    return (
      <div className="relative h-56 overflow-hidden">
        <img 
          src="/calenderhero.png" 
          alt="Mountain Climbing" 
          className="w-full h-full object-cover object-center"
        />
        
        <div 
          className="absolute bottom-0 right-0 w-2/5 h-full bg-sky-500"
          style={{
            clipPath: 'polygon(40% 100%, 100% 100%, 100% 0%, 0% 0%)',
          }}
        />
        
        <div 
          className="absolute bottom-0 left-0 w-1/2 h-24 bg-white"
          style={{
            clipPath: 'polygon(0% 100%, 100% 100%, 60% 0%, 0% 0%)',
          }}
        />
        
        <div className="absolute bottom-4 right-8 text-white text-right z-10">
          <div className="text-2xl font-light tracking-wider">2022</div>
          <div className="text-3xl font-bold tracking-wide">JANUARY</div>
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10" />
      </div>
    );
  }