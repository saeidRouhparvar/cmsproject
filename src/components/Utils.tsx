const GetIRNumber = (number: number) => {
  const NumberFormat = number.toLocaleString("en-US");
  const sepratedNumber = NumberFormat.replace(/$/g, "");
  return sepratedNumber;
};

export { GetIRNumber };
