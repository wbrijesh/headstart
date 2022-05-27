interface ClassDataType {
  property: string;
  label: string;
  class: string;
  condition?: {
    property: string;
    value: string;
  };
}

const generateClasses = (data: ClassDataType[], config: any) => {
  let classStringTemp = "";
  const addClass = (className: string) => (classStringTemp = classStringTemp + className + " "); // prettier-ignore

  data.forEach((classData) => {
    if (config[classData.property] === classData.label && classData.label) {
      if (classData.condition) {
        if (
          config[classData.condition.property] === classData.condition.value
        ) {
          addClass(classData.class);
        }
      } else {
        addClass(classData.class);
      }
    }
  });

  return classStringTemp;
};

export default generateClasses;
