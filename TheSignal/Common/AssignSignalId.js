/*
◆各シグナル用イベントにランダムな一意の数字を付与
シグナル用イベントのリストをマップ画面に表示したいが、
ループ処理で表示させようとするとイベントID順に並ばせるしかない。
リストの順番はゲーム毎ランダムにしたいので、各イベントにランダムに一意のIDを付与する処理を作成。
本ツールには配列を保存できないので、順番に並べた変数を使うことで疑似的に配列を再現した。

イベントIDにランダムな数字を割り当てる際に、既に他のイベント割り当てた数字を避ける必要があるが、
この処理では強引に、既に割り当てた数字以外が出るまで再抽選を繰り返している。
シグナル用イベントの最大数が18固定なので、処理の負荷はほぼ無い。

◆変数_整数型
$gameVariables.value(1)：シグナル用イベントの最大数
$gameVariables.value(41～58)：疑似的な配列として使う変数
$gameVariables.value(59)：ランダム生成したIDの一時的な格納先

◆変数_論理型
$gameSwitches.value(1)：IDが確定したかどうか
$gameSwitches.value(1)：既に割り当て済みの数字かどうか
*/

for(let i = 1; i <= $gameVariables.value(1); i++){
	$gameSwitches.setValue(1,false);
	while($gameSwitches.value(1) == false){
		$gameSwitches.setValue(2,false);
		$gameVariables.setValue(59, Math.floor(Math.random() * $gameVariables.value(1)) + 1);
		for(let j = 1; j < $gameVariables.value(1) + 1; j++){
			if($gameVariables.value(j + 40) == $gameVariables.value(59)){
				$gameSwitches.setValue(2,true);
			}
		}
		if($gameSwitches.value(2) == false){
			$gameVariables.setValue(i + 40,$gameVariables.value(59));
			$gameSwitches.setValue(1,true);
		}
	}
}
