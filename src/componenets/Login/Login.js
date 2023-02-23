import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import LoginContext from "../Context/LoginContext";
import UserContext from "../Context/UserContext";

function Login() {
  const userdata = useContext(UserContext);
  const logindata = useContext(LoginContext);

  const navigate = useNavigate();
  return (
    <section className="vh-100 mt-5 pt-3">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img
              src="https://img.freepik.com/free-vector/book-readers-concept_74855-6263.jpg?w=740&t=st=1671800212~exp=1671800812~hmac=9c7371033977aaf41a67fe3f9601c138d5645b1765da945f9265bc559faee485"
              className="img-fluid"
              alt="Sample"
            />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form>
              {/* <!-- Email input --> */}
              <div className="form-outline mb-3">
                <input
                  type="text"
                  id="form3Example3"
                  className="form-control form-control-lg"
                  placeholder="Enter a username"
                  onChange={(event) => userdata.setUsername(event.target.value)}
                />
                <label className="form-label" >
                  Username
                </label>
              </div>

              {/* <!-- Password input --> */}
              <div className="form-outline mb-3">
                <input
                  type="password"
                  id="form3Example4"
                  className="form-control form-control-lg"
                  placeholder="Enter password"
                />
                <label className="form-label" >
                  Password
                </label>
              </div>

              <div className="d-flex justify-content-between align-items-center">
                {/* <!-- Checkbox --> */}
                <div className="form-check mb-0">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    value=""
                    id="form2Example3"
                  />
                  <label className="form-check-label" >
                    Remember me
                  </label>
                </div>
              </div>

              <div className="d-flex ms-3">
                <button
                  onClick={() => {
                    logindata.setLibrarianVisible(true);
                    navigate("/portal/dashboard");
                  }}
                  type="button"
                  className="btn   mt-2"
                  style={{ paddingRight: "2.5rem" }}
                >
                  <div
                    className="card"
                    style={{ width: "8rem", height: "8rem" }}
                  >
                    <img
                      className="card-img-top pb-5"
                      src="https://www.toledo.lib.ia.us/application/files/4715/8412/5412/000100-0079-001048.jpg"
                      alt="librarian"
                    />
                  </div>
                  <p>Login as a Librarian</p>
                </button>
                <button
                  onClick={() => {
                    logindata.setLibrarianVisible(false);
                    navigate("/portal/book");
                  }}
                  type="button"
                  className="btn   mt-2"
                  style={{ paddingRight: "2.5rem" }}
                >
                  <div
                    className="card"
                    style={{ width: "8rem", height: "8rem" }}
                  >
                    <img
                      className="card-img-top pb-5"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUWEZP4bQ0pBlAi8jHqnJuty-pVDhckSuxTg&usqp=CAU"
                      alt="reader"
                    />
                  </div>
                  <p>Login as a Reader</p>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
