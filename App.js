import React from "react";
import firebase from "./firebase";
import Loading from "./Loading";
import Login from "./Login";

console.log(firebase);

// // 관찰자
// firebase.auth().onAuthStateChanged((user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/firebase.User
//     var uid = user.uid;
//     // ...
//   } else {
//     // User is signed out
//     // ...
//   }
// });

// // 현재 로그인한 사용자 가져오기
// firebase.auth().onAuthStateChanged((user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/firebase.User
//     var uid = user.uid;
//     // ...
//   } else {
//     // User is signed out
//     // ...
//   }
// });

export default class extends React.Component {
  state = {
    isLoading: true,
  };
  componentDidMount() {
    this.setState({ isLoading: false });
  }
  render() {
    const { isLoading } = this.state;
    return isLoading ? <Loading /> : <Login />;
  }
}
