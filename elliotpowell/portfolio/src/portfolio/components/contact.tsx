/* 
The react Component for the Contact Form
*/

import React, { useState } from "react";
import { useImmer } from "use-immer";
import { useScroll } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import getCookie from "../util/getCookie";

const csrftoken = getCookie("csrftoken");

export default function Contact() {
  const { width, height } = useThree((state) => state.size);
  const [form, setFrom] = useImmer({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [error, setError] = useState<string>("");
  const [status, setStatus] = useState<string>("");

  // Handle submitting the form to the api via a push require
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (csrftoken === null) return false;
    fetch("/api/contact", {
      method: "POST",
      headers: { "X-CSRFToken": csrftoken },
      body: JSON.stringify(form),
    })
      .then((x) => x.json())
      .then((m) => {
        // handle alerting users to errors otherwise clear form on success and alert
        if ("error" in m) {
          setStatus("error");
          setError(m.error);
        } else {
          setStatus("success");
          setFrom({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        }
      })
      .catch((e) => {
        console.log("error", e);
      });
  };

  return (
    <>
      <div className="form">
        <h2>Contact Me</h2>
        <div className="alert alert-danger" hidden={status !== "error"}>
          {error}
        </div>
        <div className="alert alert-success" hidden={status !== "success"}>
          Succesfully submitted form
        </div>
        <form onSubmit={submit}>
          <input
            required
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
            required
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
            required
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
            required
            placeholder="Message"
            className="form-control"
            rows={height <= 500 ? 3 : 5}
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
        {/* If the screen is small we instread show various contact and social links below our form instead of side bar */}
        {(height <= 500 || width <= 600) && (
          <>
            <br />
            <ul className={`navbar-nav navbar-contact ${height <= 550 && "list-group-horizontal"}`}>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/github"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open("https://github.com/e11i0t23", "_blank");
                  }}
                >
                  <span className="sh-symbol--circle sh-symbol sh-bullet"></span>
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
                  <span className="sh-symbol--circle sh-symbol sh-bullet"></span>
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
                  <span className="sh-symbol--circle sh-symbol sh-bullet"></span>
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
