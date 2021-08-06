const path = require('path'); 
const express = require('express');

const app = express();
app.use(express.json());

app.use( express.static( `${__dirname}/../build` ) );

    app.get('*', (_, res)=>{
        res.sendFile(path.join(__dirname, '../build/index.html'));
    });

app.listen(3002, () => console.log(`server port 3002 is on and ready to copy`));