import firebase from "firebase"

const signIn = (e) => {
    auth
        .signInWithPopup(provider)
        .then((result) => {
            console.log(result);
            dispatch({
             type: actionTypes.SET_USER,
             user: result.user,
            });
        })
        .catch(error => {
            alert(error.message);
        });
 };