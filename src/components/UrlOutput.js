
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Button from '@mui/material/Button';
import axios from "axios";
import { useEffect, useState } from "react"
import CopyToClipboard from "react-copy-to-clipboard";

const successRes = (msg) => {
    return (
        <div className="relative pt-2 mx-auto">
        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={1}>
            <Box gridColumn="span 10">
                <Alert severity="success">{msg}</Alert>       
            </Box>
            <Box gridColumn="span 2">
                <CopyToClipboard
                text={msg}>
                    <Button variant="text" endIcon={<ContentCopyIcon />}>
                        COPY
                    </Button>
                </CopyToClipboard>
            </Box>
        </Box>
                                 
    </div>
    )
}


const failedRes = (msg) => {
    return (
        <div className="relative pt-2 mx-auto">
            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={1}>
                <Box gridColumn="span 12">
                    <Alert severity="warning">{msg}</Alert>       
                </Box>
            </Box>               
        </div>
    )
}



const UrlOutput = ({inputValue, loading, setLoading}) => {
    const [shortenLink, setShortenLink] = useState("");
    const [copied, setCopied] = useState(false);
    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState("")

    useEffect(() => {
        const fetchData = async () => {
            try {
              const tiny = { url: inputValue.url, alias: inputValue.alias};
              const response = await axios.post(`https://url.21tiny.com/`,tiny);
              setShortenLink(response.data.tinyUrl);
            } catch(err) {
              console.log(err.response)
              setErrorMsg("Please check your URL or try another alias")
              setError(err);
            } finally {
              setLoading(false);
            }
        }
        if(loading) {
          fetchData();
        }
      }, [inputValue]);
    
    if(shortenLink){
        return successRes(shortenLink);
    }  
    if(error){
        return failedRes(errorMsg);
    }
    return (
        <></>
    )
   
}

export default UrlOutput