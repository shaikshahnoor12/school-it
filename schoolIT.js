 // For Firebase JS SDK v7.20.0 and later, measurementId is optional

firebase.initializeApp(firebaseConfig);
 function adduser(){

    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name",user_name);
    firebase.database().ref("/").child(user_name).update({
        purpose:"addinguser"
    });
    window.location = "school_room.html";


}