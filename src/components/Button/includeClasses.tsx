import React from "react";
import { ButtonClassesData } from "../../data";

const IncludeClassesButton = () => {
  let tempClassString = "";
  const addClass = (className: string) => (tempClassString += `${className} `);
  React.useEffect(() => {
    ButtonClassesData.forEach((classData) => {
      addClass(classData.class);
    });
  }, []);

  return (
    <button className="px-1.5 py-[5px] rounded text-xs px-2 py-1.5 rounded text-sm px-3 py-2 rounded-md border transition duration-100 delay-50 font-medium hover:bg-gray-100 focus:bg-gray-200 hover:bg-green-50 focus:bg-green-100 text-green-600 border-green-500 hover:bg-red-50 focus:bg-red-100 text-red-600 border-red-400 hover:bg-yellow-50 focus:bg-yellow-100 text-yellow-600 border-yellow-500 hover:bg-blue-50 focus:bg-blue-100 text-blue-600 border-blue-500 hover:bg-gray-50 focus:bg-gray-100 text-gray-500 border-gray-400 hover:bg-slate-600 focus:bg-slate-700 bg-gray-200 bg-green-200 bg-red-200 bg-yellow-200 bg-blue-200 bg-gray-100 bg-gray-200 bg-black text-white text-blue-500 hover:text-blue-400 focus:underline">
      Include Classes Button
    </button>
  );
};

export default IncludeClassesButton;
