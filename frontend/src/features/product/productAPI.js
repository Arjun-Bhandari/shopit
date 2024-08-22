
export function fetchAllProduct() {
  return new Promise(async (resolve) => {
    // Todo i wil not hard code server URL here
    const response = await fetch("http://localhost:8080/products");
    const data = await response.json();
    resolve(data);
  });
}
