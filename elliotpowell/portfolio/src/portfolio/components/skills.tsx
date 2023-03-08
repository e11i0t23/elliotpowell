import React, { useEffect, useState } from "react";
import { useImmer } from "use-immer";

export default function Skills({ ...props }) {
  const [skills, setSkills] = useImmer<portfolio.skill[]>([]);
  const [selected, setSelected] = useState(-1);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("api/skills")
      .then((r) => {
        return r.json();
      })
      .then((p) => {
        setSkills(p.skills as portfolio.skill[]);
        setLoading(false);
      });
  }, []);
  return (
    <>
      <div>
        <h2 style={{ display: "inline-block", fontSize: "50px" }}>
          <span className="sh-symbol--rect sh-symbol sh-bullet"></span>
          Skills
        </h2>
        {!loading &&
          skills.map(function (x, i) {
            return (
              <div key={i}>
                <div>
                  <a
                    href=""
                    onClick={(e) => {
                      e.preventDefault();
                      // setSelected(i);
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
                {x.frameworks.length >= 1 &&
                  x.frameworks.map(function (y, j) {
                    return (
                      <div key={j}>
                        <a
                          href=""
                          onClick={(e) => {
                            e.preventDefault();
                            return false;
                          }}
                        >
                          <h5 className="inline-h5">
                            <span className={`sh-symbol sh-bullet sh-indent`}></span>
                            {y.title}
                          </h5>
                        </a>
                      </div>
                    );
                  })}
              </div>
            );
          })}
      </div>
    </>
  );
}
