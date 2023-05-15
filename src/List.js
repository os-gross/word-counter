import Word from './Word'

function List({words}){
    const frequnce = {};
    words.map((word) =>{
        if(frequnce[word]) frequnce[word]++;
        else frequnce[word] = 1;
    })
    words = Object.keys(frequnce);
    return <div className='list'>
        {words.length? 
            words.map(word =>{
                return <Word key={word} data={word} frequency={frequnce[word]} />
            })
        : ""        
        }
    </div>
}

export default List;