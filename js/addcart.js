export function getExistingProducts() {
  const inCart = localStorage.getItem("jackets");

  if (inCart === null) {
    return [];
  } else {
    return JSON.parse(inCart);
  }
}
