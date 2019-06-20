/** Definning a function that returns a promise */
function score() {
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            let score = Math.floor(Math.random()*10)
            if(score > 5){
                resolve(score)
            }else {
                reject(score)
            }
        }, Math.random()*1000)
    });
}

/** Consuming a promise */
score().then(function(passed){
    console.info('1 Passed:', passed);
}).catch(function(failed){
    console.error('1 Failed: ', failed);
});

/** Chaining promises */
function over100(score){
    return Promise.resolve(score*10);
}

score().then(over100)
       .then(function(score){
         if(score < 50){
             return Promise.reject(score)
         }
         console.info('2 Passed:', score)
       })
       .catch(function(score){
           console.error("2 Failed:", score)
       });

/*
 * Notice the shorthand: you didn’t have to new up a promise just to resolve it; you can just call the resolve method on a static promise object.
 */