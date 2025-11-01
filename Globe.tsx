import React from 'react';

// A small component to render a grid of dots for a cluster
const DotCluster: React.FC<{ dots: number[][]; style: React.CSSProperties }> = ({ dots, style }) => (
  <div className="absolute" style={style}>
    <div className="flex flex-col gap-1.5">
      {dots.map((row, rIndex) => (
        <div key={rIndex} className="flex gap-1.5">
          {row.map((dot, dIndex) => (
            <div
              key={dIndex}
              className="w-1.5 h-1.5 bg-white rounded-full"
              style={{ opacity: dot }}
            ></div>
          ))}
        </div>
      ))}
    </div>
  </div>
);

// Pre-defined dot clusters to match the reference image
const clusters = [
    {
        style: { top: '35%', left: '18%', transform: 'rotate(-15deg) scale(0.9)' },
        dots: [
            [0, 1, 1, 0],
            [1, 1, 1, 1],
            [1, 1, 1, 1],
            [0, 1, 1, 0],
        ]
    },
    {
        style: { top: '15%', left: '45%', transform: 'rotate(20deg) scale(0.8)' },
        dots: [
            [1, 1, 1],
            [1, 0, 1],
            [1, 1, 1],
        ]
    },
    {
        style: { top: '22%', left: '70%', transform: 'rotate(-5deg) scale(0.7)' },
        dots: [
            [1, 1, 0],
            [1, 1, 1],
            [0, 1, 1],
        ]
    },
     {
        style: { top: '65%', left: '75%', transform: 'rotate(25deg) scale(0.75)' },
        dots: [
            [1, 1, 1, 1],
            [0, 1, 1, 0],
        ]
    },
     {
        style: { top: '70%', left: '40%', transform: 'rotate(-10deg) scale(1)' },
        dots: [
            [0, 0, 1, 1],
            [1, 1, 1, 1],
            [1, 1, 0, 0],
        ]
    },
];


const Globe: React.FC = () => {
  return (
    <div className="relative w-80 h-80 sm:w-96 sm:h-96 flex items-center justify-center">
      <div 
        className="w-full h-full rounded-full bg-black relative overflow-hidden"
        style={{
          boxShadow: 'inset 10px -10px 40px rgba(0,0,0,0.9), 0 0 100px -30px rgba(255, 255, 255, 0.4)',
          transform: 'rotate(15deg)', // Tilt the entire globe
        }}
      >
        <div className="w-full h-full" style={{ transform: 'rotate(-15deg)' }}> 
            {/* Counter-rotate the inner content */}
            {clusters.map((cluster, index) => (
                <DotCluster key={index} {...cluster} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Globe;
