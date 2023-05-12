import './styles/input.css'

function Input({stats, setStats}){
    const handleChange = (e) =>{
        const sentenceCount = e.target.value.trim().split(/[.?!]+/g).length;
        const charCount = e.target.value.length;
        const words = e.target.value.replace(/[^\w\s\d]/g, "").trim().split(/\s+/);
        const wordCount = words.length;
        const averageWordLength = words.reduce((res, word) => res + word.length, 0)/ wordCount;
        setStats({...stats,
            sentenceCount, charCount, wordCount, averageWordLength
            });
    }
    return(
        <textarea
            onChange={handleChange}
            className='input'
            placeholder='Paste your text here'
        />
    )
}

export default Input;