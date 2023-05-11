import './styles/input.css'

function Input({stats, setStats}){
    const handleChange = (e) =>{
        setStats({...stats,
                charCount: e.target.value.length,
                wordCount: e.target.value.split(/\s+/).length
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