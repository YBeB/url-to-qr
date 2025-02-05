import { useState, useRef } from "react";

import { QRCodeCanvas } from "qrcode.react";
import "./style.css";
import { Input, Box, Card, CardContent, Button } from "@mui/material";

function App() {
  const [Url, setUrl] = useState("");
  const [qrValue, setQrValue] = useState("");
  const downloadRef = useRef(null);

  function downloadQR() {
    const qrRefContent = downloadRef.current;
    if(!qrValue || !qrRefContent ){

alert("Veuillez entrer une URL");
return

    }else{
    const imgUrl = qrRefContent.toDataURL("image/png");
    let temporaryLink = document.createElement("a");


    temporaryLink.href = imgUrl;
    temporaryLink.download = "qrcode.png";
    document.body.appendChild(temporaryLink);
    temporaryLink.click();
    temporaryLink.remove();
  }
  
  }
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Card sx={{ maxWidth: 300, p: 2, boxShadow: 3 }}>
        <CardContent>
          <div className="Qrcode">
            <QRCodeCanvas value={qrValue} ref={downloadRef} />
          </div>
          <Input
            type="text"
            placeholder="Entrez votre url"
            value={Url}
            onChange={(e) => setUrl(e.target.value)}
            sx={{ my: 2, width: "100%" }}
          />
          <Button onClick={() => setQrValue(Url)}>Generate</Button>
          <Button onClick={() => downloadQR()}>Download</Button>
        </CardContent>
      </Card>
    </Box>
  );
}

export default App;
