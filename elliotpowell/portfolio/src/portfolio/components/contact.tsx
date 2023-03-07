import React from "react";
import { useImmer } from "use-immer";
import { useScroll } from "@react-three/drei";
import getCookie from "../util/getCookie";

const csrftoken = getCookie("csrftoken");

export default function Contact() {
  const cScroll = useScroll();
  const [form, setFrom] = useImmer({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const submit = (e) => {
    e.preventDefault();
    if (csrftoken === null) return false;
    fetch("/api/contact", {
      method: "POST",
      headers: { "X-CSRFToken": csrftoken },
      body: JSON.stringify(form),
    }).then((x) => {
      console.log(x);
    });
  };

  return (
    <>
      <div className="form">
        <h2>Contact Me</h2>
        <form onSubmit={submit}>
          <input
            type="text"
            placeholder="Name"
            className="form-control form-control-sm"
            value={form.name}
            onChange={(e) => {
              setFrom((d) => {
                d.name = e.target.value;
              });
            }}
          />
          <input
            type="email"
            placeholder="Email"
            className="form-control form-control-sm"
            value={form.email}
            onChange={(e) => {
              setFrom((d) => {
                d.email = e.target.value;
              });
            }}
          />
          <input
            type="text"
            placeholder="Subject"
            className="form-control form-control-sm"
            value={form.subject}
            onChange={(e) => {
              setFrom((d) => {
                d.subject = e.target.value;
              });
            }}
          />
          <textarea
            placeholder="Message"
            className="form-control"
            rows={cScroll.el.clientHeight <= 500 ? 3 : 5}
            value={form.message}
            onChange={(e) => {
              setFrom((d) => {
                d.message = e.target.value;
              });
            }}
          />
          <br />
          <input type="submit" className="form-control form-control-sm" />
        </form>
        {(cScroll.el.clientHeight <= 500 || cScroll.el.clientWidth <= 600) && (
          <>
            <br />
            <ul className={`navbar-nav navbar-contact ${cScroll.el.clientHeight <= 550 && "list-group-horizontal"}`}>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/github"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open("https://github.com/e11i0t23", "_blank");
                  }}
                >
                  <span
                    className="sh-symbol--circle sh-symbol"
                    style={{
                      display: "inline-block",
                      height: "14px",
                      position: "relative",
                    }}
                  ></span>
                  Github
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/email"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open("mailto:elliot2810@gmail.com", "_blank");
                  }}
                >
                  <span
                    className="sh-symbol--circle sh-symbol"
                    style={{
                      display: "inline-block",
                      height: "14px",
                      position: "relative",
                    }}
                  ></span>
                  Email
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/resume"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open("/static/portfolio/public/elliot-powell-resume.pdf", "_blank");
                  }}
                >
                  <span
                    className="sh-symbol--circle sh-symbol"
                    style={{
                      display: "inline-block",
                      height: "14px",
                      position: "relative",
                    }}
                  ></span>
                  Resume
                </a>
              </li>
            </ul>
          </>
        )}
      </div>
    </>
  );
}
