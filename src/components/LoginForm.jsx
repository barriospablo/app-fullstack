import { useState } from "react";

/**
 *
 * @name LoginForm
 * @description This componente is in charge of render LoginForm
 */
export default function LoginForm(props) {
  const [loginVisible, setLoginVisible] = useState(false);

  const hideWhenVisible = { display: loginVisible ? "none" : "" };

  const showWhenVisible = { display: loginVisible ? "" : "none" };

  return (
    <div>
      <div style={hideWhenVisible}>
        <button onClick={() => setLoginVisible(true)}>Show login</button>
      </div>
      <div style={showWhenVisible}>
        <form onSubmit={props.handleSubmit}>
          <div>
            <input
              type="text"
              value={props.username}
              name="Username"
              placeholder="Username"
              onChange={props.handleUsernameChange}
            />
          </div>
          <div>
            <input
              type="password"
              value={props.password}
              name="Password"
              placeholder="Password"
              onChange={props.handlePasswordChange}
            />
          </div>

          <button>Login</button>
        </form>

        <button onClick={() => setLoginVisible(false)}>Cancel</button>
      </div>
    </div>
  );
}
