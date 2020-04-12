import axios from 'axios';
import constants from './constants';

const app={
    current:(path,payload)=>{
        return new Promise((res,rej)=> {
            console.log("dosao");
            axios.get(constants.BASE_URL+constants.CHECK_STATUS)
            .then(result=> {
                console.log(JSON.stringify(result.data));
                res(result.data)
            })
            .catch(err=> {
                console.log(`U err ${JSON.stringify(err)}`);
                res(err);
            });
        });
       
    }
    
}

export default app;