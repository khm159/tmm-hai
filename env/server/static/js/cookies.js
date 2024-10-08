// gets a cookie
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      let r = c.substring(name.length, c.length);
      console.log("Current stage cookie:", r);
      return r;
    }
  }
  return "";
}

// sets a cookie
function setCookie(cname, cvalue, exdays) {
  console.log("Setting cookie", cname, cvalue, "--", document.cookie);
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function clearCookie() {
  setCookie("lastStage", "", "30");
  console.log(
    "Cleared the last stage cookie, currently",
    getCookie("lastStage"),
  );
}
