import firebase from 'firebase';

export default (() => {
	const firebaseConfig = {
		apiKey: 'AIzaSyAdVlgXMOl1ukTyJwpy4QVwTRWHCXU32U0',
		authDomain: 'twiphy-3d64b.firebaseapp.com',
		databaseURL: 'https://twiphy-3d64b.firebaseio.com',
		projectId: 'twiphy-3d64b',
		storageBucket: 'twiphy-3d64b.appspot.com',
		messagingSenderId: '641681307107',
	};

	firebase.initializeApp(firebaseConfig);

	// const roomName = window.location.pathname.match(/^\/(\w+)/)[1];
  // const roomGifs = firebase.database().ref(`${roomName}/gifs`);

	// roomGifs.on('child_added', snapshot => {
	// 	Firebase.onGifReceived(snapshot.val());
  // });

  // setTimeout(() => {

  // }, 5000);
	// // room.set({
	// //   users: '...'
	// // });

	// // const users = room.ref('users');
	// // const gifs = room.ref('users');
	// // room.on('value', (snapshot) => {
	// //   console.log(snapshot.val())
	// // });

	return firebase;
})();

