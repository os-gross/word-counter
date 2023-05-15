import { useState } from 'react'

import Input from './Input'
import Stats from './Stats'
import List from './List'
import './styles/app.css'

function App() { 
    const [stats, setStats] = useState({
        sentenceCount:0,
        charCount:0,
        wordCount: 0,
        averageWordLength: 0,
    });
    const [words, setWords] = useState([]);

    const updateStatsAndWords = (text) => {
        const sentenceCount = text.trim().split(/[.?!]+/g).filter(item => item !== "").length;
        const charCount = text.length;
        const words = text.replace(/[^\w\s\d]/g, "").trim().split(/\s+/).filter(item => item !== "");
        const wordCount = words.length;
        const averageWordLength = words.reduce((res, word) => res + word.length, 0) /wordCount;
        setStats({
            sentenceCount,
            charCount,
            wordCount,
            averageWordLength,
        });
        setWords(words);
    };


    const handleChange = (e) =>{
        updateStatsAndWords(e.target.value);
    }

    return(
        <div className='container'>
            <Stats stats={stats} />
            <main className='main'>
                <Input onChange={handleChange}/>
                <List words={words} />    
            </main>
        </div>
    )
}

export default App;
