export class Calculator {
  public add(number1: number, number2: number) {
    return number1 + number2;
  }

  public subs(number1: number, number2: number) {
    return number1 - number2;
  }

  public multy(number1: number, number2: number) {
    return number1 * number2;
  }

  public div(number1: number, number2: number) {
    if (number2 !== 0) {
      return number1 / number2;
    } else {
      throw new Error('Can not divide between 0');
    }
  }
}
