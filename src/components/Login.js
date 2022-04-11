import React, { useRef, useState } from "react";
import styled from "styled-components";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import { apiUrl, saveToSession } from "../utills";
import {} from "react-router-dom";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState(null);

  async function handleLogin(e) {
    e.preventDefault();
    const resp = await fetch(apiUrl + "/auth/login?type=admin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailRef.current.value,
        password: passwordRef.current.value,
      }),
    });
    const data = await resp.json();

    if (data.status == "success") {
      setError(null);
      saveToSession("auth-token", data.token);
      window.history.pushState({}, undefined, "/");
      window.location.reload();
      console.log(data, "successfully -----------");
    } else if (data.status == "error") {
      setError(data.message);
    } else {
      console.log("something went wrong");
    }
  }

  return (
    <Container>
      <div className="content">
        <div className="login-subcontent relative">
          <h3 style={{ color: "black", fontWeight: "800" }}>MOTOR TAXI</h3>
          <form onSubmit={handleLogin} action="" className="login-form">
            {error && <p className="error">{error}</p>}
            <div className="box relative">
              <span className="acc">
                <AccountCircleIcon />
              </span>
              <input ref={emailRef} type="text" placeholder="email" />
            </div>
            <div className="box relative">
              <span className=" acc absolute">
                <LockIcon />
              </span>
              <input ref={passwordRef} type="password" placeholder="password" />
            </div>
            <div className="log-btn">
              <button type="submit" className="">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
      <h6>&copy; 2022 all right reserved</h6>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  position: relative;

  .error {
    color: red;
    padding: 4px;
    border: 1px solid red;
    opacity: 0.5;
    font-weight: 700;
    font-size: 14px;
  }

  h6 {
    position: absolute;
    bottom: 0.11rem;
    align-items: center;
    text-align: center;
    right: 0;
    left: 0;
  }
  .content {
    display: flex;
    align-items: center;
    top: 50%;
    position: absolute;
    justify-content: center;
    left: 50%;
    transform: translate(-50%, -50%);
    .login-subcontent {
      width: 340px;
      height: 340px;
      background-image: #ffffff;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      border-radius: 20px;
      margin: 0.222rem 0;
      padding-top: 1.555rem;
      box-shadow: 4px 8px 16px rgba(0, 0, 0, 0.2);

      h3 {
        margin-bottom: 2rem;
        color: white;
        text-align: center;
        text-transform: capitalize;
      }
      .login-form {
        align-items: center;
        margin-bottom: 3rem;

        .box {
          padding: 0.5889rem 0;
          width: 100%;
          align-items: center;
          position: relative;
          .acc {
            position: absolute;
            margin: 0.32rem 0.3rem;
          }
          input {
            max-width: 300px;
            padding: 9px 32px;
            border-radius: 5px;
            border: none;
            outline: none;
            align-items: center;
            &::placeholder {
              font-size: 0.933em;
              font-weight: 300;
              text-transform: capitalize;
            }
          }
        }
      }
      .log-btn {
        border-radius: 5px;
        background-image: linear-gradient(#333, #222);
        margin: 1.22rem 0;
        button {
          padding: 5px 32px;
          display: inline-block;
          margin: 2px 4px;
          border: none;
          align-items: center;
          text-align: center;
          outline: none;
          color: white;
          font-size: 1.33rem;
          border-radius: 5px;
          width: 100%;
          transition: all 0.4s ease-in-out;
          &:hover {
            opacity: 0.7;
            transform: scale(1);
          }
        }
      }
    }
  }
`;
export default Login;