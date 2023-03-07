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
          Skills
        </h2>
        {!loading &&
          skills.map(function (x, i) {
            return (
              <div key={i}>
                <div style={{ display: "flex" }}>
                  <a
                    href=""
                    onClick={(e) => {
                      e.preventDefault();
                      // setSelected(i);
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
                {x.frameworks.length >= 1 &&
                  x.frameworks.map(function (y, j) {
                    return (
                      <div style={{ display: "flex" }} key={j}>
                        <a
                          href=""
                          onClick={(e) => {
                            e.preventDefault();
                            return false;
                          }}
                        >
                          <h5
                            style={{
                              display: "inline-block",
                              fontSize: "25px",
                            }}
                          >
                            <span
                              className={`sh-symbol`}
                              style={{
                                display: "inline-block",
                                height: "14px",
                                marginLeft: "28px",
                                position: "relative",
                              }}
                            ></span>
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
