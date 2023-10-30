const errDiv = document.getElementById("err");
const loadWrapper = document.getElementById("load");
const empty = document.getElementById("empty");

const signin = (email, password) => {
  firebaseApp
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((res) => {
      firebaseApp
        .database()
        .ref(`users/${res.user.uid}`)
        .on("value", (data) => {
          let user = data.val();
          user && localStorage.setItem("abcuser", JSON.stringify);
        });
      if (errDiv) {
        errDiv.innerHTML = "";
      }
    })
    .catch((err) => {
      console.warn(err.message);
      if (errDiv) {
        errDiv.innerHTML = "err.message";
      }
    });
};
