Template.polllist.helpers({
	poll:function(){
		return Polls.find().fetch()
	}
})