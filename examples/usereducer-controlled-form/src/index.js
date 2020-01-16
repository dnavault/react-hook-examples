import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const initialFormState = {
  email: "",
  password: "",
  checkbox: false,
  disabled: true
};

function formReducer(prevState, { type, payload }) {
  switch (type) {
    case "updateForm":
      const { name, value } = payload;
      const newState = { ...prevState, [name]: value };

      if (
        newState.email.length > 0 &&
        newState.password.length > 4 &&
        newState.checkbox === true
      ) {
        newState.disabled = false;
      } else {
        newState.disabled = true;
      }

      return newState;
    case "reset":
      return initialFormState;
    default:
      return prevState;
  }
}

function App() {
  const [formState, dispatchFormState] = React.useReducer(
    formReducer,
    initialFormState
  );

  function updateForm(e) {
    const { name, type, checked } = e.target;
    let { value } = e.target;
    if (type === "checkbox") value = checked;

    dispatchFormState({
      type: "updateForm",
      payload: {
        name,
        value
      }
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(JSON.stringify(formState));
    console.log(formState);
  }

  return (
    <section className="hero is-primary is-fullheight">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-5-tablet is-4-desktop is-3-widescreen">
              <form action="" className="box">
                <div className="field">
                  <label htmlFor="" className="label">
                    Email
                  </label>
                  <div className="control has-icons-left">
                    <input
                      name="email"
                      type="email"
                      placeholder="e.g. bobsmith@gmail.com"
                      className="input"
                      required
                      value={formState.email}
                      onChange={updateForm}
                    />
                    <span className="icon is-small is-left">
                      <i className="fa fa-envelope" />
                    </span>
                  </div>
                </div>
                <div className="field">
                  <label for="" className="label">
                    Password
                  </label>
                  <div className="control has-icons-left">
                    <input
                      name="password"
                      type="password"
                      placeholder="*******"
                      className="input"
                      required
                      value={formState.password}
                      onChange={updateForm}
                    />
                    <span className="icon is-small is-left">
                      <i className="fa fa-lock" />
                    </span>
                  </div>
                </div>
                <div className="field">
                  <label for="" className="checkbox">
                    <input
                      name="checkbox"
                      type="checkbox"
                      onChange={updateForm}
                    />
                    I agree to all terms
                  </label>
                </div>
                <div className="field">
                  <button
                    disabled={formState.disabled}
                    className="button is-success"
                    onClick={handleSubmit}
                  >
                    Login
                  </button>

                  <button
                    className="button pull-right"
                    onClick={() => dispatchFormState({ type: "reset" })}
                  >
                    Reset
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
