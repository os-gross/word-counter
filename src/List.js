import Word from './Word'

function List({words}){
    return <div className='list'>
        {words.length? 
            words.map(word =>{
                return <Word key={word} data={word} />
            })
        : ""        
        }
    </div>
}

export default List;