const crypto = require('crypto')
const fs = require('fs')
const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer({ dest: 'build/public/img/uploads/' });
const User = require('../model/user');
const Unread = require('../model/unread');
const Message = require('../model/message');
const Tmessage = require('../model/tmessage');
const People = require('../model/people');
const Team = require('../model/team');
const Loginlist = require('../model/loginlist');
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const jsonParser = bodyParser.json();
const router = express.Router();



router.post('/getMoreMessage', urlencodedParser, (req,res)=>{
	var data = req.body;
	console.log(data);

	var receiveUid = data.receiveUid;
	var fromUid = data.fromUid;

	new Promise((resolve,reject)=>{
		if(data.type!=='team'){
			Message.find({uid:receiveUid}, null, {limit:1}, (err,mess) => {
				if(err) throw err;
				if(mess.length){
					console.log()
					resolve(mess[0]['mess'][fromUid]);
				}else{
					resolve(false);
				}
			});
		}else{
			Tmessage.find({uid:fromUid}, null, {limit:1}, (err,tmess) => {
				if(err) throw err;
				if(tmess.length){
					resolve(tmess[0].mess);
				}else{
					resolve(false);
				}
			});
		}
	}).then((messages) => {
		console.log(messages);
		res.send(messages);
	});
});

//used by main-methods.js
router.get('/getInfo', (req,res) => {

	var type = req.query.type;
	var uid = req.query.uid;

	console.log(type, uid);

	//如果是团队则会导致系统崩溃,为什么？

	if(type==='team'){
		Team.find({uid}, null, {limit:1}, (err,team)=>{
			res.send(team[0]);
		});
	}else{
		People.find({uid},null,{limit:1},(err,person)=>{
			res.send(person[0]);
		});
	}
});


router.post('/starOrUnstar', urlencodedParser, (req,res) => {
	var data = req.body.data;

	if(data.isStar){
		Loginlist.update({uid:data.uid}, {$pull:{star:data.to}}, (err) => {
			res.send(false);
		});
	}else{
		Loginlist.update({uid:data.uid}, {$addToSet:{star:data.to}}, (err) => {
			People.find({uid:data.to}, null, {limit:1}, (err,person) => {
				res.send(person[0]);
			});
		});
	}
})


router.post('/deleteRecentChat', urlencodedParser, (req,res) => {
	var data = req.body;
	var type = data.type;
	var uid = data.uid;
	var to = data.to;

	Loginlist.update({uid:data.uid}, {$pull:{recent_people:data.to}},(err) => {
		if(err) throw err;
		res.send(true);
	})
});


module.exports = router;