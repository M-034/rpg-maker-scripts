/*
◆正解と敵シグナルの座標をランダムに決定
シグナル用イベントのうち、イベントID[1]のゴールとなるイベントと、
敵として配置されるイベントの座標を決定する。

お互いが近くなりすぎないようにするため、
新たに決定した座標と既に決定済みの他の座標との間の距離が、(事前に設定した)最短距離より短かった場合は、
抽選を繰り返すようにした。

新たに座標を決定するのが不可能な場合は深刻な無限ループに陥るので、
n回試行して座標が決まらない場合は最短距離を妥協する等の対策を今後講じるかもしれない。


◆変数_整数型
$gameVariables.value(2)：敵シグナルの数
$gameVariables.value(3)：ヒントシグナルの数
$gameVariables.value(4)：その他シグナルの数
$gameVariables.value(11)：各イベント間の最短距離

◆変数_論理型
$gameSwitches.value(1)：座標が確定したかどうか
$gameSwitches.value(2)：他の座標に近すぎるかどうか
*/

//敵シグナルの数だけ処理を繰り返す
for(let i = 1; i <= $gameVariables.value(2); i++){
	$gameSwitches.setValue(1,false);
	while($gameSwitches.value(1) == false){
		$gameSwitches.setValue(2,false);
		character = this.character(i);
		//イベントIDが1(ゴール)の場合はプレイヤーの初期位置から離れた場所になるよう調整
		if(i == 1){
			character.locate(Math.floor(Math.random() * 242) + 4, Math.floor(Math.random() * 86) + 4);
		}else{
			character.locate(Math.floor(Math.random() * 242) + 4, Math.floor(Math.random() * 242) + 4);
		}
		//プレイヤーの初期位置に近すぎる場合は再抽選
		if($gameMap.distance($gameMap.event(i).x, $gameMap.event(i).y, 124, 249) < $gameVariables.value(11)){
			$gameSwitches.setValue(2,true);
		}
		for(let j = 1; j <= $gameVariables.value(2); j++){
			if(j != i){
				if($gameMap.distance($gameMap.event(i).x, $gameMap.event(i).y, $gameMap.event(j).x, $gameMap.event(j).y) < $gameVariables.value(11)){
					$gameSwitches.setValue(2,true);
				}
			}
		}
		for(let k = 11; k <= $gameVariables.value(3) + 10; k++){
			if($gameMap.distance($gameMap.event(i).x, $gameMap.event(i).y, $gameMap.event(k).x, $gameMap.event(k).y) < $gameVariables.value(11)){
				$gameSwitches.setValue(2,true);
			}
		}
		for(let l = 16; l <= $gameVariables.value(4) + 15; l++){
			if($gameMap.distance($gameMap.event(i).x, $gameMap.event(i).y, $gameMap.event(l).x, $gameMap.event(l).y) < $gameVariables.value(11)){
				$gameSwitches.setValue(2,true);
			}
		}
		if($gameSwitches.value(2) == false){
			$gameSwitches.setValue(1,true);
			character.setDirection(0);
		}
	}
}
