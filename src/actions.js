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

const signup = (email, password, name) => {
  firebaseApp
    .auth()
    .createUserWithEmailAndPassword(email, password)
    // NOTE res means response, req means request
    .then((res) => {
      firebaseApp
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((res) => {
          firebaseApp
            .database()
            .ref(`user/${res.user.uid}`)
            .set({
              email,
              name,
              id: res.user.uid,
            })
            .then(() => {
              firebaseApp
                .database()
                .ref(`user/${res.user.uid}`)
                .on("value", (data) => {
                  let user = { ...data.val(), id: res.user.uid };
                  user && localStorage.setItem("abcuser", JSON.stringify(user));
                });
            })
            .catch((err) => {
              console.warn(err);
            });
        });
    });
};
