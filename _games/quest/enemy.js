import './core.js';
import {stoneData, enemyData, moveData} from './enemy.loader.js';

function fillSelector(){
	let html = '';
	$.each( enemyData, function( key, data ){
		var name = pmBase.util.getPokemonName(data.monsterNo);
		html += `<option value="${key}">${data.monsterNo} ${name} (${data.hpBasis})</option>`;
	});
	$('.c-enemySelector').html(html);
	$('.c-enemySelector').change(function(){
		selectenemy( $(this).val() )
	});
	
}

function parseHash(){
	let key = pmBase.hash.get();
	if ( key.length > 0 ) {
		$('.c-enemySelector').val(key);
		$('.c-enemySelector').trigger('change');
	}
}

window.addEventListener("popstate", parseHash);

function selectenemy( key ){
	pmBase.hash.set(key);
	let data = enemyData[key];
	let name = pmBase.util.getPokemonName(data.monsterNo);
	
	$('.c-enemyData__icon').html( pmBase.sprite.get('quest-pokemon',data.monsterNo) );
	$('.c-enemyData__name').html( name );
	$('.c-enemyData__hp').html( data.hpBasis );
	$('.c-enemyData__atk').html( data.attackBasis );
	
	let html = '';
	$.each( data.skillIDs, function( i, skillID ) {
		if ( skillID == -1 ) return;
		let sData = moveData[skillID];
		html += `
				<tr>
					<td>${pmBase.sprite.get('quest-skill',sData.icon)}</td>
					<td>${sData.name}</td>
					<td>${sData.desc}</td>
					<td>${Math.round(sData.damage * 100)}</td>
					<td>${sData.charge}</td>
		`;
		let attrs = [];
		for ( let j=0; j<=2; j++ ){
			let stoneID = data.skillStoneIDs[i*3+j];
			if ( stoneID > -1 ) attrs.push(...stoneData[stoneID].filter(Boolean));
		}
		attrs.sort();
		html += '<td class="small text-nowrap">';
		html += attrs.join('<br>');
		html += '</td>';
		html += '</tr>';
	});
	if ( html.length == 0 ) html = '<td colspan="100">没有招式</td>';
	$('.c-enemyData__skills tbody').html( html );
	
	html = '';
	for ( let i=0; i<=3; i++ ){
		let stoneID = data.passiveStoneIDs[i];
		if ( stoneID == -1 ) {
			html += '<td>-</td>';
		} else {
			html += `<td>${stoneData[stoneID].join('<br>')}</td>`;
		}
	}
	$('.c-enemyData__passive tbody').html( html );
}

pmBase.hook.on( 'init', function(){
	fillSelector();
	parseHash();
});