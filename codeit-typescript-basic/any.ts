// 되도록이면 any를 사용하지 않는 것이 좋다.
// const product: any = {
//   id: "c001",
//   name: "코드잇 블랙 후디",
//   price: 129000,
//   sizes: ["M", "L", "XL"],
// };

const parsedProduct: {
  name: string;
  price: number;
} = JSON.parse('{"name": "코드잇 블랙 후디", "price": 129000}');

const parsedProduct2 = JSON.parse(
  '{"name": "코드잇 블랙 후디", "price": 129000}'
) as {
  name: string;
  price: number;
};
