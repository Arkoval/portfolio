import React from "react";

function Project({ data, active, isMobile }) {

  return (
    <>
      {data.map((project, i) => {
        return (
            isMobile ?
          <div
            key={i}
            className={`project-slide`}
          >
            <div className="project-details">
              <h2>{project.name}</h2>
              <p>{project.description}</p>
              <div className="project-links">
                <a href={project.live}>LIVE</a>
                <a href={project.code}>CODE</a>
              </div>
            </div>
            <div className="project-image">
              <img
                src={require(`../images/${project.img}.jpg`)}
                alt={project.name + " photo"}
              />
            </div>
          </div>
          :
          <div
            key={i}
            className={`project-slide ${active === i ? "active" : "inactive"}`}
            style={{ transform: `translateX(${-active * 100}%)` }}
          >
            <div className="project-details">
              <h2>{project.name}</h2>
              <p>{project.description}</p>
              <div className="project-links">
                <a href={project.live}>LIVE</a>
                <a href={project.code}>CODE</a>
              </div>
            </div>
            <div className="project-image">
              <img
                src={require(`../images/${project.img}.jpg`)}
                alt={project.name + " photo"}
              />
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Project;
