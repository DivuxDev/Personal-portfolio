import React from "react";
import Image from "next/image";

const WorkCard = ({ img, name, description, demo, url, onClick }) => {
  return (
    <div
      className="overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link cursor-pointer"
      onClick={onClick}
    >
      <div
        className="relative rounded-lg overflow-hidden transition-all ease-out duration-300"
        style={{ height: "150px" }}
      >
        <Image
          src={img}
          alt={name || "Project image"}
layout='fill'
          className="object-cover w-full h-full hover:scale-110 transition-all ease-out duration-300"
        />
      </div>

      <h1 className="mt-5 text-3xl font-medium">{name || "Project Name"}</h1>

      <h2 className="text-xl opacity-50">{description || "Description"}</h2>

      {/* Botones */}
      {(demo || url) && (
        <div className="mt-4 flex gap-3">
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex-1 rounded-md border border-white/20 px-4 py-2 text-center text-sm font-medium hover:bg-white/10 transition"
            >
              Demo
            </a>
          )}

          {url && (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex-1 rounded-md border border-white/20 px-4 py-2 text-center text-sm font-medium hover:bg-white/10 transition"
            >
              GitHub
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default WorkCard;
