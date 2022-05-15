
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
    
    
    `;
    this.content[2] = `
        <h4>演習:Step2</h4>
    
    
    `;

  }
}