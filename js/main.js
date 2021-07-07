'use strict'

{
  function createColumn(col) {

    // const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    
   //配列をコンパクトに書き換え
    const source = [];
    for (let i = 0; i < 15; i++) {
      //1...15
      // source[i] = i + 1;
      //16...30
      // source[i] = i + 1 + 15 * 1;
      //31...45
      source[i] = i + 1 + 15 * col;

    }
    //Math.floor(Math.random() * (14 + 1))
    //Math.floor(Math.random() * source.length)
    // const b = [];//B列の配列を宣言
    // b[0] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
    // b[1] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
    // b[2] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
    // b[3] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
    // b[4] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
    const column = [];
    for (let i = 0; i < 5; i++) {
      column[i] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
    }
    return column;
    // console.log(b);
  }

  function createColumns() {
    const  columns = [];
    // columns[0] = createColumn(0);//B
    // columns[1] = createColumn(1);//I
    // columns[2] = createColumn(2);//N
    // columns[3] = createColumn(3);//G
    // columns[4] = createColumn(4);//O

    for (let i = 0; i < 5; i++) {
      columns[i] = createColumn(i);
    }
    columns[2][2] ='FREE';
      return columns;
    }

  // function createBingo(colums) {
  //   // console.table(columns);//配列の配列のようなデータ表示
  //   const bingo =[];
  //   for (let row = 0; row < 5; row++) {
  //     bingo[row] = [];
  //     for (let col = 0; col < 5; col++) {
  //       bingo[row][col] = columns[col][row];//反転させる処理
  //     }
  //   }
  //   //console.table(bingo);//配列の配列のようなデータ表示
  //   return bingo;
  // }


  function renderBingo(columns){

    for(let row = 0; row < 5; row++) {
      const tr = document.createElement('tr');//tr要素を生成してビンゴの行を生成する
      for (let col = 0; col < 5; col++) {//列を作成するためのループ処理
        const td = document.createElement('td');//ビンゴの列を作成
        // td.textContent =bingo[row][col]; //数字を配列に代入
        td.textContent =columns[col][row]; //数字を配列に代入
        tr.appendChild(td);//trの子要素のtdを格納
      }
      document.querySelector('tbody').appendChild(tr);//tbodyの中にtrを格納
  
    }
  }

  const columns = createColumns();
  //const bingo = createBingo(colums);
  renderBingo(columns);
}