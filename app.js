$(document).ready(function(){
	
     $('input').on('change', function() {
     	removeAlert();
     	dynamicCols = [];
     	dynamicRows = [];
     	$('tbody').empty();
     	dynamicBoard($('input').val())
        $.each(dynamicCols, function(i, val) {
        	$('tbody').append(val);
        });
        $.each(dynamicRows, function(i, val) {
        	$('tr').append(val);
        });
        $('tr:even').addClass('trBlack');
        $('tr:odd').addClass('trWhite');
    }); 

    //Add Pieces
    $('button').on('click', function(){
    	removeAlert();
    	if($('.pieces').length){
    		$('.pieces').remove();
    	}
    	if($('tr').length !== 8){
    		$('body').append('<h2>You need an 8 X 8 board to add peices. Please change board size.</h2>');
    	} else {
    		$(".trBlack > td:even").slice(0, 8).append("<img class='pieces' src='http://i.imgur.com/7Jq9LWR.png'>");
    		$(".trWhite > td:odd").slice(0, 4).append("<img class='pieces' src='http://i.imgur.com/7Jq9LWR.png'>");
    		$(".trBlack > td:even").slice(12).append("<img class='pieces' src='http://i.imgur.com/SdW1fXc.png'>");
    		$(".trWhite > td:odd").slice(8).append("<img class='pieces' src='http://i.imgur.com/SdW1fXc.png'>");
    	}
    });  
});

var dynamicCols = [];
var dynamicRows = [];
var tdNode = '<td></td>';
var trNode = '<tr></tr>';

function dynamicBoard(inputNum){
	for(var i = 0; i < inputNum; i++){
		dynamicCols.push(trNode);
		dynamicRows.push(tdNode);	
	}
}

function removeAlert(){
	if($('<h2>').length){
     		$('h2').remove();
     	}
}