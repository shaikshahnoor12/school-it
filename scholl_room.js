

function btn1() {
      

      localStorage.setItem("dps");
      window.location = "dps.html"
}


function btn2() {
      

      localStorage.setItem("kendriya vidhayalai");
      window.location = "kv.html"
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}


