$(document).ready(function(){
  $('#chat').on("click",function(){
    $('#chatroom').append($(`
      <li class="left clearfix">
        <span class="chat-img1 pull-left">
          <img src="https://upload.wikimedia.org/wikipedia/en/1/14/Donkey_from_Shrek.jpg" alt="User Avatar" class="img-circle">
        </span>
        <div class="chat-body1 clearfix">
          <p>${$('#chatText').val()}</p>
          <div class="chat_time pull-right">09:40PM</div>
        </div>
      </li>
      `));
  })
});
