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
        setURL(p.work[0].url);
        setLoading(false);
      });
  }, []);
  return (
    <>
      <div style={{ width: "500px" }}>
        <h1 className="d-inline-block fw-bold">
          <span className="sh-symbol--rect sh-symbol sh-bullet"></span>
          Projects
        </h1>
        {!loading &&
          projects.map(function (x, i) {
            return (
              <div key={i}>
                <div>
                  <a
                    href=""
                    onClick={(e) => {
                      e.preventDefault();
                      setURL(x.url);
                      setSelected(i);
                      return false;
                    }}
                  >
                    <h5 className="inline-h5">
                      <span
                        className={` ${selected == i ? "sh-symbol--rect-short" : "sh-symbol"}  sh-symbol sh-bullet`}
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
