import { useState } from "react";

function SignIn({ signIn, setSignIn }) {
  const handleSignIn = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get("username");
    const password = formData.get("password");
    console.log("Username:", username);
    console.log("Password:", password);
    e.target.reset();
  };
  return (
    <div className="sign-in">
      <h3>Please sign in to continue.</h3>
      <form onSubmit={handleSignIn}>
        <input type="text" name="username" placeholder="Username" />
        <p>#no need to provide email</p>
        <input type="password" name="password" placeholder="Password" />
        <button type="submit">Sign In</button>
      </form>
      <p>
        Don't have an account?
        <button onClick={() => setSignIn(!signIn)}>Sign Up</button>
      </p>
    </div>
  );
}
function SignUp({ signIn, setSignIn }) {
  const handleSignUp = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    const income = formData.get("income");
    const source = formData.get("source");
    console.log("Username:", formData.get("username"));
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Monthly Income:", income);
    console.log("Income Source:", source);
    e.target.reset();
  };
  return (
    <div className="sign-up">
      <h3>Register Your Account</h3>
      <form onSubmit={handleSignUp}>
        <input type="text" name="username" placeholder="Username" /><br/>
        <input type="text" name="email" placeholder="Email" /><br/>
        <input type="password" name="password" placeholder="Password" /><br/>
        <select name="source">
            <option value="">Select Income Source</option>
            <option value="salary">Salary</option>
            <option value="business">Business</option>
            <option value="freelance">Freelance</option>
            <option value="investments">Investments</option>
            <option value="other">Other</option>
        </select><br/>
        <input type="text" name="income" placeholder="Monthly Income" /><br/>
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account?
        <button onClick={() => setSignIn(!signIn)}>Sign In</button>
      </p>
    </div>
  );
}

function Auth() {
  const [signIn, setSignIn] = useState(true);
  return (
    <div className="auth-page">
      <h1>Welcome to CashExpress</h1>
      <p>Track Money with Ease</p>
      {signIn ? (
        <SignIn signIn={signIn} setSignIn={setSignIn} />
      ) : (
        <SignUp signIn={signIn} setSignIn={setSignIn} />
      )}
    </div>
  );
}
export default Auth;
