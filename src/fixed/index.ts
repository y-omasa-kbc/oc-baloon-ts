// Bootstrapのスタイルシート側の機能を読み込む
import "bootstrap/dist/css/bootstrap.min.css";

// BootstrapのJavaScript側の機能を読み込む
import "bootstrap";

import { Page, PageF, Page1, Page2, Page3, Page4 } from "./pages";
import { Descriptions } from "./descriptions";

const img = new Image();    //画像オブジェクト作成
let page: Page;
const pages: Page[] = [new PageF(), new Page1(), new Page2(), new Page3(), new Page4()];

const descriptions = new Descriptions();

window.addEventListener("load", (e) => {
  console.log(img)
  var sky = <HTMLCanvasElement> document.getElementById("sky");
  var skyx = sky.getContext("2d");
  
  let args = new URL(document.URL);
  let param = args.searchParams.get('p');  
  if(param == null){
    param = "0";
  }

  page = pages[Number(param)];
  document.getElementById("description").innerHTML = descriptions.content[Number(param)];
  img.src = "img/baloon.gif";
  img.onload = function() {
    page.init(img);
    page.render(skyx);
    window.requestAnimationFrame(draw);
  }
});

function draw() {
  var sky = <HTMLCanvasElement> document.getElementById("sky");
  var skyx = sky.getContext("2d");
  skyx.clearRect(0, 0, sky.width, sky.height);

  page.nextFrame();
  page.render(skyx);
  window.requestAnimationFrame(draw);
}
