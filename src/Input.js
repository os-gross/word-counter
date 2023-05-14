function Input({onChange}){
    return(
        <textarea
            onChange={onChange}
            className='input'
            placeholder='Paste your text here'
        />
    )
}

export default Input;