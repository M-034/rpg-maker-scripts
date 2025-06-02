/*
◆イベントの最大数に応じた各イベント間の最短距離決定
ここの調整を間違えると(最短距離が大きすぎると)座標が永遠に決まらずに無限ループする。
イベントの最大数は5～18の間でランダム。
マップの大きさは250*250。

◆変数_整数型
$gameVariables.value(1)：マップ上に表示されるイベントの最大数
*/

if($gameVariables.value(1) <= 9){
	$gameVariables.setValue(11,100);
}
if($gameVariables.value(1) >= 14){
	$gameVariables.setValue(11,65);
}else{
	$gameVariables.setValue(11,80);
}