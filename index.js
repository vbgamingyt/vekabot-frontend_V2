// Frontend voor VEKA BOT met Dark Mode, Level Animaties en Geluidseffecten

import { useState, useEffect } from "react";

export default function OefenExamen() {
    const [darkMode, setDarkMode] = useState(false);
    const [level, setLevel] = useState(1);
    const [progress, setProgress] = useState(0);
    const [beloning, setBeloning] = useState(null);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const playLevelUpSound = () => {
        const audio = new Audio("/sounds/level-up.mp3");
        audio.play();
    };

    const berekenLevel = (correcteVragen) => {
        const nieuwLevel = Math.floor(correcteVragen / 10) + 1;
        if (nieuwLevel > level) {
            setLevel(nieuwLevel);
            setBeloning(`🎁 Je hebt level ${nieuwLevel} bereikt!`);
            playLevelUpSound();
            setTimeout(() => setBeloning(null), 5000);
        }
    };

    return (
        <div className={`${darkMode ? 'bg-blue-900 text-white' : 'bg-white text-gray-900'} max-w-2xl mx-auto p-6 border rounded-lg shadow-xl transition-colors duration-500`}>
            <button onClick={toggleDarkMode} className="mb-4 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
                {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
            </button>
            <h2 className="text-2xl font-bold text-center mb-6">🚗 VEKA BOT - Oefenexamen</h2>
            <p className="text-lg font-semibold text-center mb-4">Level: {level}</p>
            {progress > 0 && (
                <div className="w-full bg-gray-300 rounded-full h-6 mb-6 overflow-hidden">
                    <div className="bg-green-500 h-6 rounded-full text-center text-white font-bold" style={{ width: `${progress}%` }}>
                        {Math.round(progress)}%
                    </div>
                </div>
            )}
            {beloning && (
                <div className="bg-blue-400 text-white p-3 rounded-lg text-center mb-4 animate-bounce">
                    {beloning}
                </div>
            )}
        </div>
    );
}
