import React from 'react';
import hackfest2024Image from './assets/hackfest2024.JPG';
import cs50x2024Image from './assets/cs50x2024.png';
const awards = [
  {
    image: hackfest2024Image,
    title: '2nd Runner-Up @ Google\'s Hackfest 2024 Hackathon',
    description: 'We developed a finely-tuned AI app to simulate emotional intelligence and facilitate empathetic interactions, effectively bridging the gap between technology and human emotions. Product pitched at the Google Jakarta Office and ranked among the top 3 out of 650+ teams nationwide.'
  },
  {
    image: cs50x2024Image,
    title: 'CS50x Puzzle Day 2024',
    description: 'Solved 9 out of 9 puzzles and becoming the highest ranking Indonesian team at Harvard University’s 2024 CS50x Puzzle Day.'
  },
  // Add more awards here
];

const Awards = () => {
  const [currentAward, setCurrentAward] = React.useState(0);

  const handlePrevAward = () => {
    setCurrentAward(Math.max(0, currentAward - 1));
  };

  const handleNextAward = () => {
    setCurrentAward(Math.min(awards.length - 1, currentAward + 1));
  };

  return (
    <div style={{ marginLeft: "75px" }}>
      <h2 style={{ marginBottom: 10 }}>My Awards 🏆</h2>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div>
          <img src={awards[currentAward].image} alt={awards[currentAward].title} style={{ width: '70%', height: 'auto' }} />
          <h3 style={{ margin: '10px 0' }}>{awards[currentAward].title}</h3>
          <p>{awards[currentAward].description}</p>
          <button style={{ float: 'left' }} onClick={handlePrevAward}>
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path fill="none" stroke="currentColor" strokeWidth="2" d="M15.41 16.59L10.83 12L15.41 7.41L14 6L8 12L14 18L15.41 16.59Z" />
            </svg>
          </button>
          <button style={{ float: 'right' }} onClick={handleNextAward}>
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path fill="none" stroke="currentColor" strokeWidth="2" d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Awards;