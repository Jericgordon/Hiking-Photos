export default function RegisterForm() {
  return (
    <>
      <h2>Register</h2>

      <form className="App" onSubmit={(event) => event.preventDefault()}>
        <input type="text" placeholder="Username" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="submit" style={{ backgroundColor: "#a1eafb" }} />
      </form>
    </>
  );
}
