import { useState } from 'react'

import Input from './Input'
import Stats from './Stats'
import List from './List'
import './styles/app.css'

function App() { 
    const [stats, setStats] = useState({
        charCount:0,
        wordCount: 0,
    });

    return(
        <div className='container'>
            <Stats stats={stats} />
            <main className='main'>
                <Input stats={stats} setStats={setStats} />
                <List />    
            </main>
        </div>
    )
}

export default App;
