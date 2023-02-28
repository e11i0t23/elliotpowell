import React, { useEffect, useState } from "react";
import { useImmer } from "use-immer";

export default function Work({ setUrl, ...props }) {
  const [projects, setProjects] = useImmer([]);
  const [selected, setSelected] = useState(0);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("api/work")
      .then((r) => {
        return r.json();
      })
      .then((p) => {
        setProjects(p.work);
        setLoading(false);
      });
  }, []);
  return (
    <>
      <div style={{ width: "500px" }}>
        <h2 style={{ display: "inline-block", fontSize: "50px" }}>
          <span
            className="sh-symbol--rect sh-symbol"
            style={{
              display: "inline-block",
              height: "14px",
              position: "relative",
            }}
          ></span>
          Projects
        </h2>
        {!loading &&
          projects.map(function (x, i) {
            return (
              <div style={{ display: "flex" }} key={i}>
                <a
                  href=""
                  onClick={(e) => {
                    e.preventDefault();
                    setUrl(x.url);
                    setSelected(i);
                    return false;
                  }}
                >
                  <h5 style={{ display: "inline-block", fontSize: "25px" }}>
                    <span
                      className={` ${
                        selected == i ? "sh-symbol--rect-short" : "sh-symbol"
                      }  sh-symbol`}
                      style={{
                        display: "inline-block",
                        height: "14px",
                        position: "relative",
                      }}
                    ></span>
                    {x.title}
                  </h5>
                </a>
                {!(x.codeUrl == null || x.codeUrl == "") && (
                  <a target="_blank" rel="noopener" href={x.codeUrl}>
                    View Code
                  </a>
                )}
              </div>
            );
          })}
      </div>
    </>
  );
}
