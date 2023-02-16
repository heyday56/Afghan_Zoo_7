$(document).ready(function (){
		$("tr:even").css("backgroundColor","rosybrown");
		$("thead tr").css("backgroundColor","#eee");
		$("tr:odd").css("backgroundColor","sandybrown");
		$("tr").hover(function(){
			$(this).css("backgroundColor","lightblue");
			$("thead tr").css("backgroundColor","#eee");
		},function(){
			$("tr:even").css("backgroundColor","rosybrown");
			$("thead tr").css("backgroundColor","#eee");
			$("tr:odd").css("backgroundColor","sandybrown");
		});
});