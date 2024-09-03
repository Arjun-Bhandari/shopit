
export function fetchAllProduct() {
  return new Promise(async (resolve) => {
    // Todo i wil not hard code server URL here
    const response = await fetch("http://localhost:8080/products");
    const data = await response.json();
    resolve(data);
  });
}


export function fetchProductByFilter(filter) {
// filter = {"barnd":"Apple"}
let queryString ='';
for(let key in filter){
  queryString+=`${key}=${filter[key]}&`//brand=Glamour Beauty
  console.log(queryString)
}
  return new Promise(async (resolve) => {
    // Todo i wil not hard code server URL here
    const response = await fetch(`http://localhost:8080/products?${queryString}`);
    console.log(queryString)
    const data = await response.json();
    resolve(data);
  });
}