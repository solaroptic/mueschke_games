import { useState } from "react";
import styles from "./components/Main/main.module.css";
import HomeFront from "./components/Main/HomeFront";
import AuthContext from "./components/Main/authContext";

function App() {
  const [valid, setValid] = useState(false);
  const [currentUser, setCurrentUser] = useState("guest");

  const submitHandler = function (e) {
    e.preventDefault();
    console.log(e.target.uname.value, e.target.pass.value);
    let nizzle = e.target.uname.value.toLowerCase();
    let pizzle = e.target.pass.value.toLowerCase();
    setCurrentUser((prevState) => {
      return e.target.uname.value.toLowerCase();
    });
    if (!nizzle) {
      alert("Username required!");
    } else if (!pizzle) {
      alert("Password required!");
    } else if (
      pizzle === "td" &&
      (nizzle === "guest" ||
        nizzle === "m1" ||
        nizzle === "d2" ||
        nizzle === "n3" ||
        nizzle === "j4" ||
        nizzle === "d5" ||
        nizzle === "d6" ||
        nizzle === "s7")
    ) {
      e.target.uname.value = "";
      e.target.pass.value = "";
      setValid(true);
    } else {
      alert("Wrong Username/Password!");
    }
  };

  return (
    <>
      <AuthContext.Provider value={{ currentUser: currentUser }}>
        {!valid && (
          <div className={styles.App}>
            <img
              src="LoginPageFront.jpg"
              className={styles.loginphoto}
              alt="Mueschke Shield logo surrounded by players"
            />
            <div className={styles.container}>
              <form className={styles.inputs} onSubmit={submitHandler}>
                <input type="text" name="uname" placeholder="Username" />
                <input type="password" name="pass" placeholder="Password" />
                <button type="submit">LOGIN</button>
              </form>
            </div>
          </div>
        )}
        {valid && <HomeFront />}
      </AuthContext.Provider>
    </>
  );
}

export default App;
