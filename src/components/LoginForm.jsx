import Togglable from "./Togglable";
import PropTypes from "prop-types";

/**
 *
 * @name LoginForm
 * @description This componente is in charge of render LoginForm
 */
export default function LoginForm(props) {
  return (
    <div>
      <Togglable buttonLabel={"SHOW LOGIN"}>
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
      </Togglable>
    </div>
  );
}
LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
};
