import React, { useEffect, useState } from "react";

const BlogCard = ({ nombre, apellidos, partido, imagen }) => (
  <div className="bg-white rounded-lg border p-4">
    <img src={imagen} alt="Blog Cover" className="w-full h-48 rounded-md object-cover" />
    <div className="px-1 py-4">
      <div className="font-bold text-xl mb-2">{partido}</div>
      <p className="text-gray-700 text-base">{nombre} {apellidos}</p>
    </div>
    <div className="px-1 py-4">
    </div>
  </div>
);

const CardCandidatos = () => {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    fetch("mi_api")
      .then(response => response.json())
      .then(data => setBlogData(data))
      .catch(error => console.error("Error fetching data:", error));
  }, []); 

  return (
    <div className="bg-gradient-to-bl from-blue-50 to-violet-50 flex items-center justify-center lg:h-screen">
      <div className="container mx-auto mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
          {blogData.map((blog, index) => (
            <BlogCard
              key={index}
              title={blog.nombre}
              image={blog.apellidos}
              content={blog.partido}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardCandidatos;
