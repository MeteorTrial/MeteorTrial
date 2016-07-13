Template.pollinsert.events({
	'click #wow' : function(){
		alert("inserted successfully");
		var pollname = $("#poll").val();
		$("#poll").val("WOW");
		Polls.insert({question:pollname, yesvotes:0, novotes:0})
		
	}
})