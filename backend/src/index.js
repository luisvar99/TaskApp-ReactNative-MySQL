import app from './app'
import {config as dotenv} from 'dotenv';
dotenv();

app.listen(process.env.PORT , function(){
    console.log('server on port 3000');
})





