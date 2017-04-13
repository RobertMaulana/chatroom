$(document).ready(function(){

  let config = {
    apiKey: "AIzaSyAzaPe6KweBtaePSp8gskeewn-bcVI0Yl0",
    authDomain: "chatroom-8a73e.firebaseapp.com",
    databaseURL: "https://chatroom-8a73e.firebaseio.com",
    projectId: "chatroom-8a73e",
    storageBucket: "chatroom-8a73e.appspot.com",
    messagingSenderId: "297779442243"
  };

  firebase.initializeApp(config);

  $('#chat').on("click",function(){
    send();
    $('#chatText').val('');
    var textarea = document.querySelector('.chat_area');
    textarea.scrollTop = textarea.scrollHeight;
    // console.log(textarea.scrollTop);
  })

  function send(){
    firebase.database().ref('hacktiv/').set({
      content_chat: $("#chatText").val(),
      timeStamps: (new Date().getTime()).toString(),
      // user: req.body.user
    });
  }

  var starCountRef = firebase.database().ref('hacktiv/');
  starCountRef.on('value', function(snapshot) {
    $('#chatroom').append($(`
      <li class="left clearfix">
        <span class="chat-img1 pull-left">
          <img src="https://upload.wikimedia.org/wikipedia/en/1/14/Donkey_from_Shrek.jpg" alt="User Avatar" class="img-circle">
        </span>
        <div class="chat-body1 clearfix">
          <p>${snapshot.val().content_chat}</p>
          <div class="chat_time pull-right">09:40PM</div>
        </div>
      </li>
      `));
  });
});
