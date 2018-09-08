import poketoru from './core.js';
import skillData from './data/skills.js';
import { typeEffects } from './data/misc.js';

let superEffects = [];
let typePokemonCount = [];
let sePokemonCount = [];

function fillSelector(){
  let html = '';
  
  $('.c-pktl-sort').change( filter );
  
  html = '';
  html += `<option value="-1">-</option>`;
  $.each( pmBase.data.typenames, function( i, t ) {
    html += `<option value="${i}">${t}</option>`;
  });
  html += `<option value="-1">-</option>`;
  $.each( pmBase.data.typenames, function( i, t ) {
    html += `<option value="${i+100}">克制${t}</option>`;
  });
  $('.c-pktl-type').html(html);
  $('.c-pktl-type').change( filter );
  
  let sortedSkillList = skillData.slice().sort( (a, b) => a.order - b.order );
  html = '';
  $.each( sortedSkillList, function( i, v ) {
    html += `<option value="${v.index}">${v.name}</option>`;
  });
  $('.c-pktl-skill').html(html);
  $('.c-pktl-skill').change( filter );


	for(var i=0;i<18;i++ ){
		superEffects[i]=[];
		typePokemonCount[i]=0;
		sePokemonCount[i]=0;
		for(var j=0;j<18;j++ ){
			if( typeEffects[j][i]==2 ) superEffects[i].push(j);
		}
	}
}

function filter() {
  let sort = parseInt($('.c-pktl-sort').val(),10);

  let selectedType = parseInt($('.c-pktl-type').val(),10);
  let selectedSkill = parseInt($('.c-pktl-skill').val(),10);
  let selectedPower = -1;
  let selectedRml = -1;
  let isSuperEffect = selectedType >= 100;
  if ( isSuperEffect ) {
    selectedType -= 100;
    var se = superEffects[selectedType];
  }
  var tbody = '';
  var result = [];
  $.each( poketoru.pokemonList, function( pkmnID, pkmn ) {
    if ( isSuperEffect ) {
      if ( !se.includes(pkmn.type) ) return;
    } else {
      if ( selectedType >= 0 && pkmn.type != selectedType ) return;
    }
		if ( selectedSkill > 0 && !pkmn.skills.includes(selectedSkill) ) return;
    result.push(pkmn);
  });
  
  if ( result.length > 500 ) return;
  
  if ( sort == 1 ) {
    result.sort(function(pkmn1, pkmn2) {
      return pkmn2.maxLevel - pkmn1.maxLevel;
    });
  } else if ( sort == 2 ) {
    result.sort(function(pkmn1, pkmn2) {
      return pkmn2.maxPower - pkmn1.maxPower;
    });
  } else if ( sort == 3 ) {
    result.sort(function(pkmn1, pkmn2) {
      return pkmn1.type - pkmn2.type;
    });
  }
  
  $.each( result, function( i, pkmn ) {
    let pkmnID = pkmn.id;
    let pkmnNumber = pkmnID.split('.')[0];
    let pkmnSkill = '';
    let maxPower = 0;
    let skills = pkmn.skills.map( s => skillData[s].name ).join('<br>');
		let url = pmBase.url.createUrlHash( 'pktl-pokemon', pkmnID );
    tbody += `
      <tr>
        <td>${pmBase.sprite.get('pktl-pokemon',pkmn.icon,48)}</td>
        <td>${pkmn.dex}</td>
        <td><a href="${url}">${pkmn.info.name}</a></td>
        <td>${pmBase.builder.create('type',pkmn.type)}</td>
        <td>${pkmn.power} - ${pkmn.maxPower}</td>
        <td>${pkmn.rml}</td>
        <td>${skills}</td>
      </tr>
    `;
  });
  $(".c-pktl-result tbody").html(tbody);

};

function parseHash(){
  let params = pmBase.url.getSearch();
  let b = false;
  if ( params.skill ) {
    $('.c-pktl-skill').val( ~~params.skill );
    b = true;
  }
  if ( b ) filter();
}

pmBase.hook.on( 'init', function(){
  fillSelector();
  parseHash();
});