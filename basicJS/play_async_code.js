setTimeout(() => {
    console.log('Timer is done!');
    
},2000);  // call by function



const fetchData =callback => {
    setTimeout(() =>{
        callback('Done!');
    },1500);
}


setTimeout(() => {
    console.log('Timer 2 is done');
    fetchData(text =>{
        console.log(text);
        
    });
},2000)
