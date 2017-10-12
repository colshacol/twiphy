import { observable, action } from 'mobx';
import firebase from './init';
const roomName = window.location.pathname.match(/^\/(\w+)/)[1];
const roomGifs = firebase.database().ref(`${roomName}/gifs`);
import { injectGif } from '../utils';

const nowTime = Date.now();

roomGifs.on('child_added', (data) => {
  const gifData = data.val();
  if (Number(gifData.time) < nowTime) { return };
  injectGif(gifData);
});

roomGifs.on('child_removed', (data) => {
  // remove from dom?
});

type FirebaseGif = {
  user: string,
  src: string,
  time: string
}

export default new class {
  sendGif(gif: FirebaseGif) {
    roomGifs.push(gif);
  }
}
