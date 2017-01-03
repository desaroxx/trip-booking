export const currencyFilterFactoryFn: ng.Injectable<Function> = () => {
  return function formatCurrency(input) {
    const inputString = `${input}`;
    const {length} = inputString;

    let outString = '';
    let apostropheCounter = 1;
    for (let i = length; i > 0; i--) {
      const char = inputString.charAt(i - 1);
      const nextChar = inputString.charAt(i - 2);
      outString = `${char}${outString}`;
      if ((apostropheCounter % 3 === 0) && (nextChar !== '')) {
        outString = `'${outString}`
      }
      apostropheCounter++;
    }
    return outString;
  };
};
