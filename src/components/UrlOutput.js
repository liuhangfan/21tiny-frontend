
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Button from '@mui/material/Button';
import axios from "axios";
import { useEffect, useState } from "react"
import CopyToClipboard from "react-copy-to-clipboard";


const UrlOutput = ({inputValue, setInputValue, loading, setLoading}) => {
    const [shortenLink, setShortenLink] = useState("");
    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState("")

    useEffect(() => {
        const fetchData = async () => {
            try {
            const tiny = { url: inputValue.url, alias: inputValue.alias, domain: "url.21tiny.com"};
            const response = await axios.post(`https://url.21tiny.com/`,tiny);
              setShortenLink(response.data.tinyUrl);
              setError(false)
            } catch(err) {
              console.log(err.response)
              setErrorMsg(err.response.data.message)
              setError(err)
              setShortenLink("")
            } finally {
              setLoading(false);
              setInputValue({
                "url": "",
                "alias": ""
            });
            }
        }
        if(loading) {
          fetchData();
        }
      }, [inputValue]);
    
    return (
        <div>
            {shortenLink && !error &&
            <div className="relative pt-2 mx-auto">
            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={1}>
                <Box gridColumn="span 10">
                    <Alert severity="success">{shortenLink}</Alert>       
                </Box>
                <Box gridColumn="span 2">
                    <CopyToClipboard
                    text={shortenLink}>
                        <Button variant="text" endIcon={<ContentCopyIcon />}>
                            COPY
                        </Button>
                    </CopyToClipboard>
                </Box>
            </Box>
                                     
            </div>}
            {error && !shortenLink &&
             <div className="relative pt-2 mx-auto">
             <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={1}>
                 <Box gridColumn="span 12">
                     <Alert severity="warning">{errorMsg}</Alert>       
                 </Box>
             </Box>               
            </div>}
        </div>
    )
   
}

export default UrlOutput