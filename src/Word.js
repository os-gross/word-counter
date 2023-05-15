import { useEffect, useState } from "react";

function Word({data, frequency}){
    const [isVisible, setIsVisible] = useState(false);
    
    useEffect(() =>{
        setIsVisible(true);
    }, [])
    return <div className={'word' + (isVisible? ' word-visible':'')}>
        {data.substring(0, 10) + (data.length>10?"...":"")}   {frequency}
    </div>
}

export default Word;