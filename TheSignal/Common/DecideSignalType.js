/*
◆イベントの最大数に応じて各シグナルタイプの数を決定
イベントの最大数は5～18の間でランダム。
各シグナルの種類は敵、ヒント、その他の三種類。

◆変数_整数型
$gameVariables.value(1)：マップ上に表示されるイベントの最大数
$gameVariables.value(2)：敵シグナルの数
$gameVariables.value(3)：ヒントシグナルの数
$gameVariables.value(4)：その他シグナルの数
*/

$gameVariables.setValue(2,Math.ceil($gameVariables.value(1) / 2));
$gameVariables.setValue(3,Math.ceil($gameVariables.value(2) / 2));
$gameVariables.setValue(4,$gameVariables.value(1) - ($gameVariables.value(2) + $gameVariables.value(3)));