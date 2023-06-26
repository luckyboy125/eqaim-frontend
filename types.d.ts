declare module '*module.css' {
  const styles: {
    [className: string]: string
  }
  export default styles
}

declare interface StepDataType {
  [step: string]: {
    carryString: string;
    sumString: string;
  };
}