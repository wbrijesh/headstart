const ButtonClassesData = [
  { property: "size", label: "sm", class: "px-1.5 py-[5px] rounded text-xs" }, // prettier-ignore
  { property: "size", label: "md", class: "px-2 py-1.5 rounded text-sm" }, // prettier-ignore
  { property: "size", label: "lg", class: "px-3 py-2 rounded-md" }, // prettier-ignore
  { property: "variant", label: "outline", class: "border transition duration-100 delay-50 font-medium" }, // prettier-ignore
  { property: "variant", label: "outline", class: "hover:bg-gray-100 focus:bg-gray-200", condition: { property: "color", value: "primary" } }, // prettier-ignore
  { property: "variant", label: "outline", class: "hover:bg-green-50 focus:bg-green-100 text-green-600 border-green-500", condition: { property: "color", value: "success" } }, // prettier-ignore
  { property: "variant", label: "outline", class: "hover:bg-red-50 focus:bg-red-100 text-red-600 border-red-400", condition: { property: "color", value: "danger" } }, // prettier-ignore
  { property: "variant", label: "outline", class: "hover:bg-yellow-50 focus:bg-yellow-100 text-yellow-600 border-yellow-500", condition: { property: "color", value: "warning" } }, // prettier-ignore
  { property: "variant", label: "outline", class: "hover:bg-blue-50 focus:bg-blue-100 text-blue-600 border-blue-500", condition: { property: "color", value: "info" } }, // prettier-ignore
  { property: "variant", label: "outline", class: "hover:bg-gray-50 focus:bg-gray-100 text-gray-500 border-gray-400", condition: { property: "color", value: "light" } }, // prettier-ignore
  { property: "variant", label: "outline", class: "hover:bg-slate-600 focus:bg-slate-700", condition: { property: "color", value: "dark" } }, // prettier-ignore
  { property: "variant", label: "fill", class: "bg-gray-200", condition: { property: "color", value: "primary" } }, // prettier-ignore
  { property: "variant", label: "fill", class: "bg-green-200", condition: { property: "color", value: "success" } }, // prettier-ignore
  { property: "variant", label: "fill", class: "bg-red-200", condition: { property: "color", value: "danger" } }, // prettier-ignore
  { property: "variant", label: "fill", class: "bg-yellow-200", condition: { property: "color", value: "warning" } }, // prettier-ignore
  { property: "variant", label: "fill", class: "bg-blue-200", condition: { property: "color", value: "info" } }, // prettier-ignore
  { property: "variant", label: "fill", class: "bg-gray-100", condition: { property: "color", value: "light" } }, // prettier-ignore
  { property: "variant", label: "fill", class: "bg-gray-200", condition: { property: "color", value: "dark" } }, // prettier-ignore
  { property: "variant", label: "fill", class: "bg-black text-white", condition: { property: "color", value: "black" } }, // prettier-ignore
  { property: "variant", label: "link", class: "text-blue-500 hover:text-blue-400 focus:underline" }, // prettier-ignore
];

export default ButtonClassesData;
