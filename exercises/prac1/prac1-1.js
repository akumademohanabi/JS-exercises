"user strict";


let i = window.prompt("身長を入力");
let y = window.prompt(null);



if(i >= 100){

    let x = window.confirm("プレミアムチケットは持っていますか？");

    if(x === true){
        window.alert("プレミアムシートに乗車可能です");
    }else{
        window.alert("通常シートに乗車可能です");
    }

}else if(i >= 90){
    window.alert("付き添いありで乗車可能です");
}else if(i < 90){
    window.alert("乗車できません");
}else if(i === y){
    window.alert("判定不可");

}
