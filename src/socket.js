import io from "socket.io-client"
import Echo from "laravel-echo";

const Socket = () => {

    // const socket = io('http://www.evilarkcluster.com:6001', {
    //     transports: ['websocket'],
    //     host: 'ws://www.evilarkcluster.com:6001',
    //     broadcaster: 'socket.io',
    //     enabledTransports: ['ws']
    // });
    //
    // const echo = new Echo({
    //     broadcaster: 'socket.io',
    //     client: socket,
    //     // Другие настройки Echo
    // });
    //
    // console.log(Echo)
    //
    // Echo = new Echo({
    //     transports: ['websocket'],
    //     host: 'ws://www.evilarkcluster.com:6001',
    //     broadcaster: 'socket.io',
    //     enabledTransports: ['ws']
    // });
    //
    // Echo.channel('evilark_database_roulette-history').listen('EventRouletteHistory', (data) => {
    //     console.log('123213')
    // })

    // const socket = io('http://www.evilarkcluster.com:6001');
    //
    // socket.on('connect', () => {
    //     console.log('Connected to socket server');
    // });
    //
    // socket.on('data', (data) => {
    //     console.log('Received data:', data);
    // });
    //
    // console.log(socket)

    // socket.emit('someEvent', { /* ваш объект данных */});

// socket.close();

};

export default Socket;