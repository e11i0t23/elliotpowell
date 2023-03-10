import { useTexture } from "@react-three/drei";
import React, { useEffect, useState } from "react";
import { useImmer } from "use-immer";
import { RepeatWrapping, Texture } from "three";

export default function Skills({ texture, setTexture, ...props }: portfolio.SkillsProps) {
  const [skills, setSkills] = useImmer<portfolio.skill[]>([]);
  const [selected, setSelected] = useState(-1);
  const [loading, setLoading] = useState(true);
  const textures = useTexture([
    "/static/portfolio/public/logos/python.png",
    "/static/portfolio/public/logos/typescript.png",
    "/static/portfolio/public/logos/css.png",
    "/static/portfolio/public/logos/django.png",
    "/static/portfolio/public/logos/express.png",
    "/static/portfolio/public/logos/git.png",
    "/static/portfolio/public/logos/html.png",
    "/static/portfolio/public/logos/javascript.png",
    "/static/portfolio/public/logos/markdown.png",
    "/static/portfolio/public/logos/react.png",
    "/static/portfolio/public/logos/sql.png",
    "/static/portfolio/public/logos/threejs.png",
  ]);
  for (texture of textures) {
    texture.wrapS = RepeatWrapping;
    texture.wrapT = RepeatWrapping;
    texture.repeat.set(0.1, 0.1);
    texture.rotation = (Math.PI * 3) / 4;
    texture.flipY = false;
    texture.offset.set(0.1, 0.1);
  }

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
        <h1 className="d-inline-block fw-bold">
          <span className="sh-symbol--rect sh-symbol sh-bullet"></span>
          Skills
        </h1>

        <ul style={{ listStyleType: "none" }}>
          {!loading &&
            skills.map(function (x, i) {
              return (
                <li key={i}>
                  <a
                    href={x.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => {
                      setTexture(textures[x.texture]);
                    }}
                    onMouseLeave={() => {
                      setTexture(blankTexture);
                    }}
                  >
                    <h5 className="inline-h5">
                      <span
                        className={` ${selected == i ? "sh-symbol--rect-short" : "sh-symbol"}  sh-symbol sh-bullet`}
                      ></span>
                      {x.title}
                    </h5>
                  </a>
                  {x.frameworks.length >= 1 && (
                    <ul style={{ listStyleType: "none" }}>
                      {x.frameworks.map(function (y, j) {
                        return (
                          <li key={j}>
                            <a
                              href={y.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              onMouseEnter={() => {
                                setTexture(textures[y.texture]);
                              }}
                              onMouseLeave={() => {
                                setTexture(blankTexture);
                              }}
                            >
                              <h5 className="inline-h5">
                                <span className={`sh-symbol sh-bullet`}></span>
                                {y.title}
                              </h5>
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
}

const blankTexture = new Texture();
