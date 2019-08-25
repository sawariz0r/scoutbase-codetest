export const langString = (arr) => {
  //TODO: Simplify further?
  if (arr.length === 0) return "No Languages";
  let result = "Languages: ";

  for (let i = 0; i < arr.length; i++) {
    result += arr[i].name + "(" + arr[i].native + ") "
  }

  return result;
}