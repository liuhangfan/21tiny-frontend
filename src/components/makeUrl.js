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
            <div className=" bg-[#dbe9f6] rounded-lg overflow-hidden sm:mr-10 p-10 items-end  relative">
            <UrlInput setInputValue={setInputValue} loading={loading} setLoading={setLoading}/>
            <UrlOutput inputValue={inputValue} loading={loading} setLoading={setLoading}/>
            </div>
    )
}

export default MakeUrl