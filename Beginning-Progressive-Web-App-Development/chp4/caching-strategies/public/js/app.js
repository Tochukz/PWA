(() => {
    if( 'serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker
                     .register('service-worker.js')
                     .then(registration => {
                         console.info('Registered sucessfully: ', registration);
                     })
                     .catch(err => {
                         console.error(err);
                     });
        });
        

    } else {
        console.info('Your browser does not support service workker');
    }
})();


const getAnimals = () => {
    fetch( `${window.origin}/animals`)
    .then(res => res.json())
    .then(data => {
        let content = ''
        data.forEach(animal => {
        content +=  `<p><strong>${animal.name}</strong> <em>${animal.type}</e></p>`                                              
        })
        document.getElementById('content').innerHTML = content;
    })
    .catch(err => console.error(err));
}

window.addEventListener('load', getAnimals);

const refetchAnimals = () => {
    document.getElementById('content').innerHTML = '';
    setTimeout(getAnimals, Math.random()*10);
}