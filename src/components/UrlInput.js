
import { useState } from "react"
import Box from '@mui/material/Box';
import SendIcon from '@mui/icons-material/Send';
import LoadingButton from '@mui/lab/LoadingButton';
import validator from 'validator'
import TextField from '@mui/material/TextField';

const UrlInput = ({setInputValue, loading, setLoading}) => {
    const [value, setValue] = useState({
        "url": "",
        "alias": ""
    });
    const [urlOK,setUrlOK] = useState(true)
    const [aliasOK,setAliasOK] = useState(true)

    const inputTips = {
        "URLsuccess": "Paste a link to tiny it",
        "URLfailed": "Incorrect URL",
        "AliasSuccess": "type your alias (optional)",
        "AliasFailed":"Incorrect alias",
    };


    // const [loading, setLoading] = useState(false);

    function handleClick(){
        var ok = true;
        if (!validator.isURL(value.url)){
            setUrlOK(false);
            ok = false;
        }
        if (value.alias && value.alias.length >= 12){
            setAliasOK(false);
            ok = false;
        }
        if (ok){
            setLoading(true);
            setInputValue(value);
        }
    }

    

    return(
        <div className="relative">
            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
                <Box gridColumn="span 12">
                    <TextField
                    required
                    label="URL"
                    variant="standard"
                        type="text"
                        placeholder={inputTips.URLsuccess}
                        helperText= {urlOK? "" : inputTips.URLfailed}
                        error = {!urlOK}
                        fullWidth={true}
                        value={value.url}
                        onChange={
                            e => {setValue({ ...value, url: e.target.value })
                            setUrlOK(true);}
                        }
                        />
                </Box>
                <Box gridColumn="span 4">
                    <TextField
                    variant="standard"
                        type="text"
                        label="Domain/"
                        placeholder="url.21tiny.com/"
                        InputProps={{
                            readOnly: true,
                          }}
                        />
                </Box>
                <Box gridColumn="span 6">
                <TextField
                    variant="standard"
                    label="alias"
                        type="text"
                        placeholder={inputTips.AliasSuccess}
                        helperText= {aliasOK? "" : inputTips.AliasFailed}
                        error = {!aliasOK}
                        fullWidth={true}
                        value={value.alias}
                        onChange={
                            e => {setValue({ ...value, alias: e.target.value })
                            setAliasOK(true);}
                        }
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