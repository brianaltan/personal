import React, { useState, useEffect } from 'react';
import Exp from './Experience';
import Cmg from './ComingSoon';
import hackfest2024Image from './assets/hackfest2024.JPG';
import cs50x2024Image from './assets/cs50x2024.png';
import avirenapp from './assets/avirenapp.png';

const Home = () => {
  const emojis = [
    '💼', '🚀', '🏆',
    '🔜', '🔜', '🔜',
  ];

  const descriptions = [
    'Experience', 'Projects', 'Awards',
    '???', '???', '???',
  ];

  const [selectedPage, setSelectedPage] = useState(null);
  const [clickedIndex, setClickedIndex] = useState(null);
  const [pages, setPages] = useState([]);

  useEffect(() => {
    const newPages = [
      <Exp key="exp" />,
      <Prj key="prj" />,
      <Awards key="awd" />,
      <Cmg key="cmg" />,
      <Cmg key="cmg" />,
      <Cmg key="cmg" />,
    ];

    setPages(newPages);
  }, []);

  const handleClick = (i, j) => {
    const index = i * 3 + j;
    if (index === clickedIndex) {
      setSelectedPage(null);
      setClickedIndex(null);
    } else {
      setSelectedPage(pages[index]);
      setClickedIndex(index); 
    }
  };

  const styles = {
    boardContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '70vh',
      marginBottom: '50px'
    },
    leftContent: {
      width: '50%', 
      padding: '20px',
      textAlign: 'center',
      marginTop: '10px'
    },
    rightContent: {
      width: '50%', 
      padding: '20px',
    },
    board: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 200px)', 
      gridTemplateRows: 'repeat(2, 200px)', 
    },
    square: (isWhite, isClicked) => ({
      width: '200px', 
      height: '200px', 
      backgroundColor: isClicked ? '#d3d3d3' : (isWhite ? '#f0d9b5' : '#b58863'),
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '3rem', 
      transition: 'background-color 0.3s ease',
      cursor: 'pointer',
    }),
    text: (size) => ({
      fontSize: size,
      color: 'black',
      marginTop: '0.5rem',
      fontWeight: 'bold',
    }),
    arrowButton: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '10px',
      transition: 'transform 0.3s ease',
      outline: 'none',
    },
    arrowIcon: {
      width: '24px',
      height: '24px',
    },
    arrowContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '70%',
      margin: '10px auto 0',
    },
  };

  const renderSquare = (i, j) => {
    const isWhite = (i + j) % 2 === 0;
    const emoji = emojis[i * 3 + j];
    const description = descriptions[i * 3 + j];
    const descriptionSize = '1.5rem'; 
    const isClicked = clickedIndex === (i * 3 + j);

    return (
      <div
        key={`${i}-${j}`}
        style={styles.square(isWhite, isClicked)}
        onClick={() => handleClick(i, j)}
      >
        <div style={{ fontSize: '3rem' }}>{emoji}</div>
        <div style={styles.text(descriptionSize)}>{description}</div>
      </div>
    );
  };

  const renderBoard = () => {
    const squares = [];
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 3; j++) {
        squares.push(renderSquare(i, j));
      }
    }
    return squares;
  };

  const awards = [
    {
      image: hackfest2024Image,
      title: "2nd Runner-Up @ Google's Hackfest 2024 Hackathon",
      description:
        'We developed a finely-tuned AI app to simulate emotional intelligence and facilitate empathetic interactions, effectively bridging the gap between technology and human emotions. Product pitched at the Google Jakarta Office and ranked among the top 3 out of 650+ teams nationwide.',
    },
    {
      image: cs50x2024Image,
      title: 'CS50x Puzzle Day 2024',
      description:
        'Solved 9 out of 9 puzzles and becoming the highest ranking Indonesian team at Harvard University’s 2024 CS50x Puzzle Day.',
    },

  ];

  const Awards = () => {
    const [currentAward, setCurrentAward] = useState(0);

    const handlePrevAward = () => {
      setCurrentAward((currentAward - 1 + awards.length) % awards.length);
    };

    const handleNextAward = () => {
      setCurrentAward((currentAward + 1) % awards.length);
    };

    return (
      <div style={{ marginLeft: '75px' }}>
        <h2 style={{ marginBottom: '15px' }}>My Awards 🏆</h2>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img
            src={awards[currentAward].image}
            alt={awards[currentAward].title}
            style={{ width: '70%', height: 'auto', borderRadius: '10px' }}
          />
          <h3 style={{ margin: '10px 0' }}>{awards[currentAward].title}</h3>
          <p style={{ textAlign: 'center' }}>{awards[currentAward].description}</p>
          <div style={styles.arrowContainer}>
            <button style={styles.arrowButton} onClick={handlePrevAward}>
              <svg
                style={styles.arrowIcon}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  d="M15.41 16.59L10.83 12L15.41 7.41L14 6L8 12L14 18L15.41 16.59Z"
                />
              </svg>
            </button>
            <button style={styles.arrowButton} onClick={handleNextAward}>
              <svg
                style={styles.arrowIcon}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  };

  const projects = [
    {
      image: avirenapp,
      title: 'Aviren - AI Mental Wellbeing Application',
      description: 'Aviren is an application designed to tackle the challenges of depression and suicide among younger generations. We provide services that harness handcrafted models and personalize LLMs to adapt to each user\'s unique behavioral patterns, ensuring a tailored approach to mental health support.',
    },
  ];

  const Prj = () => {
    const [currentPrj, setCurrentPrj] = useState(0);

    const handlePrevPrj = () => {
      setCurrentPrj((currentPrj - 1 + projects.length) % projects.length);
    };

    const handleNextPrj = () => {
      setCurrentPrj((currentPrj + 1) % projects.length);
    };

    return (
      <div style={{ marginLeft: '75px' }}>
        <h2 style={{ marginBottom: '15px' }}>My Projects 🚀</h2>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img
            src={projects[currentPrj].image}
            alt={projects[currentPrj].title}
            style={{ width: '70%', height: 'auto', borderRadius: '10px' }}
          />
          <h3 style={{ margin: '10px 0' }}>{projects[currentPrj].title}</h3>
          <p style={{ textAlign: 'center' }}>{projects[currentPrj].description}</p>
          <div style={styles.arrowContainer}>
            <button style={styles.arrowButton} onClick={handlePrevPrj}>
              <svg
                style={styles.arrowIcon}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  d="M15.41 16.59L10.83 12L15.41 7.41L14 6L8 12L14 18L15.41 16.59Z"
                />
              </svg>
            </button>
            <button style={styles.arrowButton} onClick={handleNextPrj}>
              <svg
                style={styles.arrowIcon}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div style={styles.boardContainer}>
      <div style={styles.leftContent}>
        {selectedPage || <p>Select a square to view information about me!</p>}
      </div>
      <div style={styles.rightContent}>
        <div style={styles.board}>{renderBoard()}</div>
      </div>
    </div>
  );
};

export default Home;
