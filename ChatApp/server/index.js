var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

/*
const fcm = require('fcm-notification');
const FCM = new fcm("./chatappkurs-firebase-adminsdk-wgxr6-dc135fe620.json");
const AndroidToken = "dDJu_NWpQtmdRdPssw7-4f:APA91bFlcr4jJhk-ZUXPcO_bnuT3wIkv_lLy6syzVcYAjwciVabr28T17vJrOxg_9RiTMNBHFzSR0O-vxqZjzQhOqjtJaFFFn2MW_K-5QuLaRop8vTcbw_iglj1-vatqHvBEJ65CqLK5";
const IOSToken = "e4Qbj9a-UEHXvYUgeqmNah:APA91bFsrEzg3DrJX2QJ4CVbKrDrBbBuGKBhWWjcO36shEcDtGhQmB9v9RdGpxj4yYDZ7J4CwLQ_0sx_avJz8EfZz3SpW3oTRkIlR5-7Sva_nPdUNteUVSY13SIx--Xgb16lvmUpbzYI";
var Tokens = [ AndroidToken, IOSToken];
var message = {
    notification:{
        title : 'Title of notification',
        body : 'Body of notification'
    },
};
FCM.sendToMultipleToken(message,Tokens, function(err, response) {
    if (err) {
        console.log('error found', err);
    } else {
        console.log('response here', response);
    }
});
 */
app.get('/',function (req,res) {
    res.send('Hello');
});
let connectionRoomCount = {};

io.on('connection',function (socket) {
   socket.on('connection-room',(data)=>{
       socket.join(data.roomId)
       connectionRoomCount[data.roomId] =(typeof connectionRoomCount[data.roomId] == 'undefined' ? 0 :connectionRoomCount[data.roomId] ) +1
       io.to(data.roomId).emit('connection-room-view',{ count: connectionRoomCount[data.roomId]});
       console.log(connectionRoomCount);
   });

   socket.on('leave-room',(data)=>{
       console.log(data);
       socket.leave(data.roomId);
       connectionRoomCount[data.roomId] =(typeof connectionRoomCount[data.roomId] == 'undefined' ? 0 :connectionRoomCount[data.roomId] -1 )
       io.to(data.roomId).emit('connection-room-view',{ count: connectionRoomCount[data.roomId]});
       console.log(connectionRoomCount);
   });
});


server.listen(3000);
