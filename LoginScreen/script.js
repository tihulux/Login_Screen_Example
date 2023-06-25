document.getElementById("giris").addEventListener("click", function() {
    var rumuz = document.getElementById("nickName").value;
    var sifre = document.getElementById("passWord").value;
    if (rumuz === "Tihulu" && sifre ==="1317") {
      window.location.href = "anasayfa.html";
    } else {
      alert("Login Failed. Please check your Nickname or Password!");
    }
  });

  document.getElementById("sifre").addEventListener("click", function(){
    alert("Visit our help page.");
  });

 
  