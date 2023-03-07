import React, { useEffect, useState } from "react";
import { useImmer } from "use-immer";

export default function Work({ setURL }: portfolio.WorkProps) {
  const [projects, setProjects] = useImmer<portfolio.project[]>([]);
  const [selected, setSelected] = useState(0);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("api/work")
      .then((r) => {
        return r.json();
      })
      .then((p) => {
        setProjects(p.work as portfolio.project[]);
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
              <div key={i}>
                <div style={{ display: "flex" }}>
                  <a
                    href=""
                    onClick={(e) => {
                      e.preventDefault();
                      setURL(x.url);
                      setSelected(i);
                      return false;
                    }}
                  >
                    <h5 style={{ display: "inline-block", fontSize: "25px" }}>
                      <span
                        className={` ${selected == i ? "sh-symbol--rect-short" : "sh-symbol"}  sh-symbol`}
                        style={{
                          display: "inline-block",
                          height: "14px",
                          position: "relative",
                        }}
                      ></span>
                      {x.title}
                    </h5>
                  </a>
                </div>
                {selected == i && (
                  <div className="work-selected-content">
                    {x.description}
                    <br />
                    <a target="_blank" rel="noopener" href={x.url}>
                      Visit Site
                    </a>
                    {!(x.codeUrl == null || x.codeUrl == "") && (
                      <a target="_blank" rel="noopener" href={x.codeUrl} style={{ marginLeft: "10px" }}>
                        View Code
                      </a>
                    )}
                  </div>
                )}
              </div>
            );
          })}
      </div>
    </>
  );
}
