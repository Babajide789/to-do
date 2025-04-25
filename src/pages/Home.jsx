import React, { useEffect, useState } from 'react';
import RadioOne from '../components/RadioOne';

import './Home.css';
import bgDark from '../assets/images/bg-desktop-dark.jpg';
import bgLight from '../assets/images/bg-desktop-light.jpg';
import CheckboxTwo from '../components/RadioTwo';


const Home = () => {
  const [theme, setTheme] = useState('dark');
  const [selectedItems, setSelectedItems] = useState([]);


  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  useEffect(() => {
    // Set default theme on initial load
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);


  const totalTasks = 6;
  const itemsLeft = totalTasks - selectedItems.length;

  const handleClearCompleted = () => {
    setSelectedItems([]);
};


    return (
        <>
            <div className='overview'>
                {/* Background Image Layer */}
                <div
                    className="background-image"
                    style={{
                        backgroundImage: `url(${theme === 'light' ? bgLight : bgDark})`,
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '250px',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center top',
                        zIndex: 0,
                    }}
                ></div>

                {/* Main content on top of image */}
                <div className='main-content'>
                    <div className='overview-top'>
                        <h3 className='to-do'>TO DO</h3>

                        <div className='contrtdioast'>
                            <button onClick={toggleTheme} className='theme-toggle'>
                            {theme === 'light' ? '🌙' : '🌞'}
                            </button>
                        </div>
                    </div>

                    <div className='radio-tag'>
                        <div className='radio-tag1'>
                            <RadioOne />
                        </div>

                        <div className='radio-tag2'>
                        

                            <CheckboxTwo
                                selectedItems={selectedItems}
                                setSelectedItems={setSelectedItems}
                            />

                        
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Home;
