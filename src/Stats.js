import './styles/stats.css'

function Stats({stats}){
    return <div className='stats'>
        <div className='stats__item'>Sentence count
            <div className='stats__number'>{stats.sentenceCount}</div>
        </div>
        <div className='stats__item'>Word count
            <div className='stats__number'>{stats.wordCount}</div>
        </div>
        <div className='stats__item'>Charecters
            <div className='stats__number'>{stats.charCount}</div>
        </div>
        <div className='stats__item'>Average length
            <div className='stats__number'>{stats.averageWordLength}</div>
        </div>
    </div>
}

export default Stats;