function validate() {
  let username = document.getElementById("usrname").value;
  let psw = document.getElementById("password").value;

  if (username === "" && psw === "") {
    alert("harap di isi dahulu")
  } else {
    if (username === "mahariaman" && psw === "123") {
      alert("welcome to my website");
    } else {
      alert("username atau password anda salah");
    }
  }
}


function register() {
  let username = document.getElementById("usrname").value;
  let psw = document.getElementById("psw").value;
  let cpsw = document.getElementById("cpsw").value;
  let nama = document.getElementById("nama").value;

  let userRegex = /^[^\W_]{5,48}$/g;
  let pswRegex = /^[^\W_]{5,48}$/g;
  let resUsername = userRegex.test(username);
  let resPassword = pswRegex.test(psw);

  if (!resUsername) {
    alert("Username minimal 5 karakter harus berupa huruf, angka dan tanpa simbol");
  } else if (!resPassword) {
    alert("password minimal 5 karakter harus berupa huruf, angka dan tanpa simbol");
  } else if (cpsw !== psw) {
    alert("password anda tidak cocok");
  } else {
    alert("Anda berhasil membuat akun baru");
  }

}