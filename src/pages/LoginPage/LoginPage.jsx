// LoginPage.jsx

import SignUpForm from "../../components/SignUpForm/SignUpForm";

const loginStyle = {
  backgroundImage: "url(https://i.pinimg.com/originals/af/75/7c/af757c4e011b6ee734d53bfd8ed2b1d4.jpg)",
  backgroundSize: "cover",
  width: "100vw",
  height: "100vh",
}

export default function LoginPage({newUser}) {
    return (
      <main style={loginStyle}>
          <h1>Welcome to the Movies!</h1>
          <SignUpForm newUser = {newUser}/>
      </main>
    );
  }