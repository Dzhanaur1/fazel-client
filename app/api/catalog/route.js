// import { NextResponse } from "next/server";
// import data from "./data.json";
// import mysql from "mysql";
// const connection = mysql.createConnection({
//   host: "158.160.109.244",
//   port: 3306,
//   user: "root",
//   password: "root",
//   database: "fazel",
// });
// export async function GET(req) {
//   connection.connect((err) => {
//     if (err) {
//       console.error("Ошибка подключения к базе данных: " + err.stack);
//       return;
//     }

//     console.log("Подключено к базе данных с ID " + connection.threadId);
//   });

//   const { searchParams } = new URL(req.url);
//   const categoryParams = searchParams.get("category");
//   const subCategoryParams = searchParams.get("subcategory");
//   console.log(searchParams);
//   let currentProducts = data.products;
//   let categories = data.categories;
//   let subCategories = data.subСategories;
//   if (categoryParams) {
//     let category = data.categories.find(
//       (category) => category.query == categoryParams
//     );
//     currentProducts = data.products.filter(
//       (product) => product.category === category?.id
//     );
//   }
//   const response = { categories, subCategories, currentProducts };

//   return NextResponse.json(response);
// }
