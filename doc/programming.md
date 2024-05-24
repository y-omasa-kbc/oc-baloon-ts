# プログラムの書き方のポイント

## 文字の表示色
プログラムコードの表示に色がついていますが、これはプログラムを読みやすくするために自動的につけられる色です。色は変えられませんので、気に入らなくても我慢してくださいw

## セミコロン
プログラム中の行の最後に;(セミコロン)がついています。これは行がここで終わることを示します。どの行につけるかはルールで決まっていますが、つけ忘れても問題はありません。

## コメント
```
//風船の設計図
```
のような2つのスラッシュ(//)から後ろはコメントです。(緑色で表示されています)
プログラムの内容を分かりやすくするためのメモの役割をしますが、プログラムとしては無視されます。 この中身を書き換えてもコンピューターには全く伝わりません。

## 変数
プログラムで使用する数字などの情報を入れる容器の役割をします。プログラムのクラスは、クラスの中の情報である属性と、属性の情報を処理するメソッドでできています。
属性は変数の集まりです。メソッド（情報を処理する部分にあたります）の中で
```
this.changeX = 0;
```
と書くと、それはオブジェクト(this)にあるchangeXという変数に、数字0を入れるということです。= は同じにするという命令です。
その先で this.changeX と書くと、そこは0という数字に置き換わります。
一つの変数に何度でも違う数を入れなおせますが、最後に入れた数が使われます。

## 四則演算
|計算|記号|記述|
|:------:|:-:|:----------:|
| 足し算 | + | y = x + 2; |
| 引き算 | - | y = x - 2; |
| 掛け算 | * | y = x * 2; |
| 割り算 | / | y = x / 2; |

## 分岐
以下のように書かれた箇所がballoon6.tsのメソッドmove()にあります。
```
  if(this.y <= 0 && this.changeY < 0){
    this.changeY = this.changeY * -1; //数値を-1倍する(ということは...)
  }
```
ifは英語のifそのもので「もし」という意味になります。&&は英語のandです。二つの条件の両方がYesの場合にYesとなります。
つまり、この部分の内容を日本語で表すと、  
**もし this.y <= 0 (this.yが0以下) かつ this.changeY < 0(this.changeYが0未満)ならば、  
  this.changeY = this.changeY * -1; を行いなさい。**  
という意味になります。
