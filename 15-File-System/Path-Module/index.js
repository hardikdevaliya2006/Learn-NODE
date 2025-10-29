import express from "express";
import path from "path";
import { fileURLToPath } from "url";
const app = express();

app.use(
  express.static(path.join(path.dirname(fileURLToPath(import.meta.url)),'public'))
);

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});

app.get("/", (req, res) => {
  // const filePath = "user/hardik/docs/report.pdf";
  // console.log("Base Name : " + path.basename(filePath))
  // console.log("Directory Name : " + path.dirname(filePath))
  // console.log("BaExtensionse Name : " + path.extname(filePath))

  // const parsed = path.parse(filePath);
  // console.log(parsed)

  // const fullpath = path.join(
  //   path.dirname(fileURLToPath(import.meta.url)),
  //   "public",
  //   "images",
  //   "avtar.jpg"
  // );
  // console.log(fullpath);

  const abslutPath = path.resolve('uploads', 'image.jpg')
  console.log(abslutPath);
});
