import React from "react";

export default function ProjectCard({ props }) {
  //console.log(props.id);
  return (
    <div className="w-full h-96 mx-3 rounded-lg relative">
      {/* <div className="works-card-overlay absolute bg-yellow-800 rounded-lg w-full h-96 mx-3"></div> */}
      <img src={props.img_cover} className="rounded-lg" alt="" />
      {props.name}
    </div>
  );
}
