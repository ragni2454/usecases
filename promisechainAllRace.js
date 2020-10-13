window.onload=function()
{
    console.log('---welcome to promise func');

// promise chaining
    // addpostivienosAsync(10,30).then(response => 
    //     {
    //         console.log('Success ' ,response);
    //         return addpostivienosAsync(response ,10).then(response1 => {
    //           console.log('Success ' ,response1);
    //           return addpostivienosAsync(response1 ,30).then(response2 => {
    //             console.log('Success ' ,response2);
    //              }).catch(err1=> console.log("err ",err1));
    //     }  ).catch(err => console.log("err ",err));
    // }).catch(err2 => console.log("err ",err2));

        
    // promise all
// Promise.all([addpostivienosAsync(10,10),addpostivienosAsync(30,10),addpostivienosAsync(20,10)]).
// then(response => 
//     {
//     console.log("resp ",response);
// }).catch(err => console.log("err ",err));

//promise race
Promise.race([addpostivienosAsync(10,30),addpostivienosAsync(30,20),addpostivienosAsync(-20,10)]).
then(response => 
    {
    console.log("resp ",response);
}).catch(err => console.log("err ",err));

}

addpostivienosAsync=(a,b) =>
{
    let promise=new Promise((resolve,reject)=>
    {
        if(a>=0 && b>=0)
        {
            resolve(a+b);

        }
        else{
            reject("not positive num");
        }
    })
    return promise;
}