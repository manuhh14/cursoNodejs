const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('event', ()=>{
    console.log('Evento disparado .......!');
});


emitter.emit('event');

emitter.on('eventWithArguments', (arg)=>{
    console.log('Un evento con los siguientes argumentos ha ocurrido: '+ 
        arg.id
        + '  ' 
        + arg.numero);
});

emitter.emit('eventWithArguments', {id:1, numero: 24});