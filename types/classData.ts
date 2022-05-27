interface ClassDataType {
  property: string;
  label: string;
  class: string;
  condition?: {
    property: string;
    value: string;
  };
}

export default ClassDataType;
