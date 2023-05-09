import Input from './Input'
import Stats from './Stats'
import List from './List'

import './styles/app.css'
function App() { 
    return(
        <div className='container'>
            <Stats />
            <main className='main'>
                <Input />
                <List />    
            </main>
        </div>
    )
}

export default App;
