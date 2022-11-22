// LoginPage.jsx

import SignUpForm from "../../components/SignUpForm/SignUpForm";


export default function LoginPage({newUser}) {
    return (
      <main>
          <h1>Login Page</h1>
          <SignUpForm newUser = {newUser}/>
      </main>
    );
  }