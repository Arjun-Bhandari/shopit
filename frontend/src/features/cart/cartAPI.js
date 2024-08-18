export function fetchProduct(product) {
    return new Promise(async (resolve) => {
      const response = await fetch("http:localhose:8080");
      const data = await response.json();
      resolve(data);
    });
  }