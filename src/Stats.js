import './styles/stats.css'

function Stats({stats}){
    return <div className='stats'>
        <p>Sentence count: {stats.sentenceCount}</p>
        <p>Word count: {stats.wordCount}</p>
        <p>Charecters: {stats.charCount}</p>
        <p>Average length: {stats.averageWordLength}</p>
    </div>
}

export default Stats;