
var firebaseConfig = {
    apiKey: "AIzaSyC3slWmxTncDSbsRq8m1QZs7GnwVEwNTGI",
    authDomain: "kwitter-9baa2.firebaseapp.com",
    databaseURL: "https://kwitter-9baa2-default-rtdb.firebaseio.com",
    projectId: "kwitter-9baa2",
    storageBucket: "kwitter-9baa2.appspot.com",
    messagingSenderId: "711312997604",
    appId: "1:711312997604:web:a3875d2711a49ce620c0f1",
    measurementId: "G-2ZJQW2B4CE"
  };

  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="welcome"+user_name;

  function addRoom(){
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose:"adding Room Name"
    });
   localStorage.setItem("room_name",room_name);
   window.location="kwitter_page.html";
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log(Room_names);
    row="<div class='room_name' id="+Room_names+ "onclick='redirecttoroomnames(this.id)'>"+Room_names+"</div><hr>";
    document.getElementById("output").innerHTML +=row;
    //End code
    });});}
getData();

function redirecttoroomnames(name){
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location="kwitter_page.html";
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}