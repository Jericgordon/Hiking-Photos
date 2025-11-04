export default function LoginForm() {
  return (
    <>
      <h2>Login</h2>

      <form className="App" onSubmit={(event) => event.preventDefault()}>
        <input type="email" placeholder="Email" />

        <input type="password" placeholder="Password" />

        <input type="submit" style={{ backgroundColor: "#a1eafb" }} />
      </form>
    </>
  );
}
