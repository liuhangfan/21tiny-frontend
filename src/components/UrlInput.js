
import { useState } from "react"
import Box from '@mui/material/Box';
import { Input } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import LoadingButton from '@mui/lab/LoadingButton';
const UrlInput = ({setInputValue, loading, setLoading}) => {
    const [value, setValue] = useState({
        "url": "",
        "alias": ""
      });
    // const [loading, setLoading] = useState(false);

    function handleClick(){
        //TODO check input
        setLoading(true);
        setInputValue(value);
        // setValue({
        //     "url": "",
        //     "alias": ""
        // });
    }

    return(
        <div className="relative">
            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
                <Box gridColumn="span 12">
                    <Input
                        type="text"
                        placeholder="Paste a link to tiny it"
                        fullWidth={true}
                        value={value.url}
                        onChange={e => setValue({ ...value, url: e.target.value })}
                        />
                </Box>
                <Box gridColumn="span 4">
                    <Input
                        type="text"
                        placeholder="www.url.21tiny.com/"
                        readOnly = {true}
                        />
                </Box>
                <Box gridColumn="span 6">
                    <Input
                            type="text"
                            placeholder="alias (optional)"
                            value={value.alias}
                            fullWidth={true}
                            onChange={e => setValue({ ...value, alias: e.target.value })}
                            />
                </Box>
                <Box gridColumn="span 2">
                    <LoadingButton
                        variant="text"
                        loading={loading}
                        onClick={handleClick}
                        loadingPosition="end"
                        endIcon={<SendIcon />}
                        >
                        MAKE
                    </LoadingButton>
                </Box>
            </Box>                                      


            
        </div>

        
    )
}

export default UrlInput