import React from "react";
import { useImmer } from "use-immer";

function getCookie(name: string) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== "") {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      // Does this cookie string begin with the name we want?
      if (cookie.substring(0, name.length + 1) === name + "=") {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

const csrftoken = getCookie("csrftoken");

export default function Contact() {
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
      <h2>Contact Me</h2>
      <form onSubmit={submit}>
        <input
          type="text"
          placeholder="Name"
          className="form-control"
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
          className="form-control"
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
          className="form-control"
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
          rows={5}
          value={form.message}
          onChange={(e) => {
            setFrom((d) => {
              d.message = e.target.value;
            });
          }}
        />
        <br />
        <input type="submit" className="form-control" />
      </form>
    </>
  );
}
