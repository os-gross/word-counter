import './styles/stats.css'

function Stats({stats}){
    return <div className='stats'>
        <p>Word count: {stats.wordCount}</p>
        <p>Charecters: {stats.charCount}</p>
    </div>
}

export default Stats;