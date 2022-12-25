import UrlInput from "./UrlInput"
import UrlOutput from "./UrlOutput"
import { useState } from 'react';
const MakeUrl = () => {
    const [inputValue, setInputValue] = useState({
        "url": "",
        "alias": ""
    });
    const [loading, setLoading] = useState(false)

    return(
        <div className="container mx-auto p-5 flex md:flex-row flex-col">
            <div className="lg:w-1/2 md:w-1/2 bg-[#dbe9f6] rounded-lg overflow-hidden sm:mr-10 p-10 items-end  relative">
            <UrlInput setInputValue={setInputValue} loading={loading} setLoading={setLoading}/>
            <UrlOutput inputValue={inputValue} loading={loading} setLoading={setLoading}/>
            </div>
        </div>
        
    )
}

export default MakeUrl