
export class Descriptions {
  public content: string[] = new Array(3);

  constructor() {
    this.content[0] = `
        <h4>完成目標</h4>
        <p>これが完成目標となるアニメーションです。１０個の風船がゆったりと表示エリアを漂っています。</p>
        <p>以下の点に注目して観察してください。
        <ul>
        <li>風船はスタート時点でランダムに配置されます。</li>
        <li>風船はそれぞれ異なる方向に動きます。</li>
        <li>風船はそれぞれ異なる速度で動きます。</li>
        <li>風船は表示エリアの端に来ると跳ね返ります。</li>
        </ul>
        </p>
    `;
    this.content[1] = `
        <h4>演習:Step1</h4>
        ソースコード: Balloon1.ts<br>
        <p>
        現状のアニメーションを観察してください。すぐに見えなくなるので「アニメーション再始動」ボタンで何回か見直してみてください。
        風船にしては動きが速すぎて不自然ですね。</p>
        <p>
        今の風船の動きは、ソースコード Balloon1.ts に書かれています。このソースコードを編集して、ゆっくり移動する風船にしてもらいます。
        </p>
        <P>演習に先立って、ソースコードの構造を確認します。<br>
        <a href="/sup101.html" class="btn btn-outline-primary" target="supplimental">ソースコードの構造</a><br>
        風船の設計図には、風船が持つ記憶と、その記憶に関する処理が書かれています。<br>
        アニメーションはパラパラ漫画のように、1秒間に約30回画面が変化します。その変化する画面１つを1フレームと呼びます。<br>
        アニメーションの最初にメソッドconstructorが動き、風船が描画されます。<br>
        以後1フレームごとに、メソッドmoveが動き、風船が描画されます。<br>
        風船は常に、自分の持つ記憶（imageX, imageY）の場所に出現します。<br>
        </p>
        <p>
        では、風船の動きがゆっくりになるようにファイルBalloon1.tsを編集してみましょう。
        </p>
    `;
    this.content[2] = `
        <h4>演習:Step2</h4>
        ソースコード: Balloon2.ts<br>
        <p>
        現状のアニメーションを観察してください。まっすぐ下がっていく風船を見ると気分まで悲しくなります。この風船をまっすぐ上に移動するようにしてください。
        </p>
        <p>
          Step1でやったことを思い出してください。風船は自分が記憶している場所（imageX, imageY）に出現します。風船が動いているように見えるためには、フレームごとに風船が表示される場所を変えます。
          (パラパラ漫画ですから。)  どのように変化させれば、上に上がるように見えるのでしょう。
        </p>
        <p>
          ちょっとしたヒントですが、風船を表示する場所（imageX, imageY）は座標です。これは青い四角の上の場所を示します。青い四角の左上が(0,0)で、右下が(600,600)です。
        </p>
        <p>
        では、風船が上に上がっていくようファイルBalloon2.tsを編集してみましょう。
        </p>
    `;
    this.content[3] = `
        <h4>演習:Step3</h4>
        ソースコード: Balloon3.ts<br>
        <p>
        現状のアニメーションを観察してください。風船が上がっていくのはいいのですが、始まりの位置が上すぎて、せっかくのアニメーションがあまり見えません。
        もっと低い位置から風船が動き始めるように変更してください。
        </p>
        <p>
        これまで同様、風船は自分が記憶している場所（imageX, imageY）に出現し、フレームごとに風船が表示される場所を変化させることで動いているように見せます。
        では最初の出現位置はどこで決まるのでしょう。わからなくなったときは、Step1で確認した「ソースコードの構造」をもう一度見てください。
        </p>
        <p>
        では、風船が低い位置から上がっていくようファイルBalloon3.tsを編集してみましょう。
        </p>
    `;
    this.content[4] = `
        <h4>演習:Step4</h4>
        ソースコード: Balloon4.ts<br>
        <p>
        風船が一つだけ、上に上がって言っているように見えます。これ、実は風船は2つあります。風船はいくつあっても、同じ設計図から生成されます。
        最初に出現する場所の指定が同じなら、全く同じ場所に重なって表示されます。今回の出現位置は(50,500)に設定されています。移動も同じ設定なので、2つは重なったまま動きます。
        </p>
        <p>
        今回は、同じ設計図から風船を作っても、別の場所に出現するようにします。そのためには、乱数というものを使用します。乱数は、使用するたびに違う数になるプログラムの機能です。
        <br>Math.random( )<br> と書くと、その部分が0以上1未満の数になりますが、毎回異なる数になります。1回目が0.283だとすると、2回目は0.825になるといった感じです。
        今回は出現時点の縦位置は同じで、横位置だけ毎回バラバラになるようにしてください。青い領域の幅は600です。
        </p>
        <p>
        位置の指定が少数になっても気にしないでください。例えば(230.643,500)のような位置を指定しても、自動的に(230,500)として処理されます。（小数点以下切り捨て）<br>
        では、風船が低い位置から上がっていくようファイルBalloon4.tsを編集してみましょう。
        </p>
    `;
    this.content[5] = `
        <h4>演習:Step5</h4>
        ソースコード: Balloon5.ts<br>
        <p>
        風船が5つ、ばらばらの場所からスタートして上に上がっています。次は風船ごとの移動方向と速度をばらばらにします。Step4で使った Math.random( ) を使用します。
        </p>
        <p>
        それぞれの風船は、同じ設計図から作られています。設計図に書かれているフィールドは風船の記憶に当たりますが、これは風船ごとに独立しています。Step1の「ソースコードの構造」を思い出してください。
        風船の移動に関する情報をフィールドに保存して、その情報から移動を計算すれば、風船はそれぞれ別の方向、速度で動いてくれます。
        </p>
        <p>
        移動の量は縦方向と横方向では別々に管理、計算されます。すでに書かれているプログラムをよく観察して、5つの風船が別々の方向、速度で動くようにしてみましょう。（Step2でやった変更も思い出してください。）
        </p>
    `;
    

  }
}