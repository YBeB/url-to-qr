import { useState } from 'react';

import { QRCodeCanvas } from 'qrcode.react'

import { Input , Box ,Card , CardContent,Typography} from '@mui/material';

function App() {
  const  [Url ,setUrl]=useState("")

  return (
    <>

<Box display="flex"
  justifyContent="center" 
  alignItems="center"
  height="100vh" 

>
 <Card sx={{ maxWidth: 300, p: 2, boxShadow: 3 }}>
 <CardContent>


  <QRCodeCanvas value={Url}/>
  <Input
        type="text"
        placeholder="Entrez votre url"
        value={Url}
        onChange={(e) => setUrl(e.target.value)} 
      />

  </CardContent>
  </Card>
  </Box>
    </>
  )
}

export default App
