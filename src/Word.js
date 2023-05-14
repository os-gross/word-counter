import { useEffect, useState } from "react";

function Word({data}){
    const [isVisible, setIsVisible] = useState(false);
    
    useEffect(() =>{
        setIsVisible(true);
    }, [])
    return <div className={'word' + (isVisible? ' word-visible':'')}>
        {data}
    </div>
}

export default Word;