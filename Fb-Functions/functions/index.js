
// const nodemailer=require('nodemailer');
// /****EMAIL*****/
// const gmailEmail='mobileappstings1@gmail.com';
//     const gmailPassword='123[]456';
    




// 	const mailTransport =nodemailer.createTransport({
// 		service:'gmail',
// 		auth:{
// 			user:gmailEmail,
// 			pass:gmailPassword,
// 		},
//     });
    
// const APP_NAME='HanifiaApp';

// /*************************************/
// exports.EmaillingService=functions.database.ref('orders/{orderId}').onCreate((snapshot,context)=>{

// 	let client=snapshot.val();
// 	console.log(context.params.orderId);

// 	return orderEmail(client);
// });

// function orderEmail(client){
// 	let mailOptions={
// 		from:` ${APP_NAME} 	<mobileappstings1@gmail.com>`,
//         to:client.email,
//         html: `<strong>Hey <img src="data:image/jpeg;base64,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"/>. You have a new follower!!!</strong>`,
// 	};
// //	console.log(client_email);
// 	mailOptions.subject='Order Recieved';
// 	// console.log(client.address);
// 	// console.log(client.cart[0].cakeName);
// 	// var items;
// 	// var itemno=1;
	

// 	client.cart.forEach(function(value){
// 		//console.log('\n ${itemno}) : Cake Name: ${value.cakeName} : Cake Price : ${value.cakePrice} : Qty : ${value.cakeCount}');
// 		items=items+'\n '+itemno+' : Cake Name: '+value.cakeName+' : Cake Price : '+value.cakePrice+' : Qty : '+value.cakeCount;
// 		itemno++;
// 	})
// 	console.log('After loop '+items);
// 	if(client.address ===null){
// 	mailOptions.text=`Hey ${client.name || ''}! \n Welcome to ${APP_NAME}. I hope you will enjoy our service.\n * * * Order Details * * *\n * * * Your Cart * * * \n ${items} \n - - - TOTAL - - -\n \n ~ ~ ~ ${client.total_amount} ~ ~ ~\n Name : ${client.name} \n Email : ${client.email} \n Phone : ${client.phone} \nDelivery Date : ${client.delivery_date} \n Delivery Time : ${client.delivery_time} \n Delivery Type : ${client.deliverytype} \n Branch : ${client.branch}`;
// }else{
// 	mailOptions.text=`Hey ${client.name || ''}! \n Welcome to ${APP_NAME}. I hope you will enjoy our service.\n * * * Order Details * * *\n ${items} \n - - - TOTAL - - -\n \n ~ ~ ~ ${client.total_amount} ~ ~ ~\n Name : ${client.name} \n Email : ${client.email} \n Phone : ${client.phone} \nDelivery Date : ${client.delivery_date} \n Delivery Time : ${client.delivery_time} \n Delivery Type : ${client.deliverytype} \n Address : ${client.address} \n Branch : ${client.branch}`;
// }
// 	return (mailTransport.sendMail(mailOptions).then(()=>{
// 		console.log('Email sent to :',client.email);
// 	}))
// }


// exports.FeedBackEmail=functions.database.ref('Feedback/{Id}').onCreate((snapshot,context)=>{

// 	let UserDetails=snapshot.val();
// 	console.log(context.params.Id+'Id');

// 	return feedback(UserDetails);
// });

// function feedback(UserDetails){

// 	let mailOptions={
// 		from:` ${APP_NAME} 	<mobileappstings1@gmail.com>`,
// 		to:UserDetails.Email,
// 	    text:`Complaint Send From ${UserDetails.ClientName} ! \n Complainer Details\n Name: ${UserDetails.ClientName}\n
// 	 Email: ${UserDetails.Email}\n MobileNumber: ${UserDetails.MobileNumber} \n Message: ${UserDetails.Message} `
// ,
//         html: `<strong>Send From Hanifia App`,
// 	};
// //	console.log(client_email);
// 	mailOptions.subject='Complaint';
	// console.log(client.address);
	// console.log(client.cart[0].cakeName);
	// var items;
	// var itemno=1;
	

	// client.cart.forEach(function(value){
	// 	//console.log('\n ${itemno}) : Cake Name: ${value.cakeName} : Cake Price : ${value.cakePrice} : Qty : ${value.cakeCount}');
	// 	items=items+'\n '+itemno+' : Cake Name: '+value.cakeName+' : Cake Price : '+value.cakePrice+' : Qty : '+value.cakeCount;
	// 	itemno++;
	// })
	// console.log('After loop '+items);
// 	if(client.address ===null){
// 	mailOptions.text=`Hey ${client.name || ''}! \n Welcome to ${APP_NAME}. I hope you will enjoy our service.\n * * * Order Details * * *\n * * * Your Cart * * * \n ${items} \n - - - TOTAL - - -\n \n ~ ~ ~ ${client.total_amount} ~ ~ ~\n Name : ${client.name} \n Email : ${client.email} \n Phone : ${client.phone} \nDelivery Date : ${client.delivery_date} \n Delivery Time : ${client.delivery_time} \n Delivery Type : ${client.deliverytype} \n Branch : ${client.branch}`;
// }else{
// 	mailOptions.text=`Hey ${client.name || ''}! \n Welcome to ${APP_NAME}. I hope you will enjoy our service.\n * * * Order Details * * *\n ${items} \n - - - TOTAL - - -\n \n ~ ~ ~ ${client.total_amount} ~ ~ ~\n Name : ${client.name} \n Email : ${client.email} \n Phone : ${client.phone} \nDelivery Date : ${client.delivery_date} \n Delivery Time : ${client.delivery_time} \n Delivery Type : ${client.deliverytype} \n Address : ${client.address} \n Branch : ${client.branch}`;
// }
// 	return (mailTransport.sendMail(mailOptions).then(()=>{
// 		console.log('Email sent to :');
// 	}))
// }


// exports.FeedbackEmail=functions.database.ref('Feedback/{UnknownId}').onCreate((snapshot,context)=>{
// let FeedBackMsgDetail=snapshot.val();
// return feedbackmail(FeedBackMsgDetail);
// });



// function feedbackmail(FeedBackMsgDetail){
// 	let mailOptions={
// 		from:` ${APP_NAME} 	<mobileappstings1@gmail.com>`,
// 		to:'mobileappstings1@gmail.com'
//         // html: `<strong>Hey <img src="data:image/jpeg;base64,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"/>. You have a new follower!!!</strong>`,
// 	};
// 	mailOptions.subject='Complaint from Hanifia App';

// 	return (mailTransport.sendMail(mailOptions).then(()=>{
// 		console.log('Email sent to :',ClientName.Email);
// 	}))
// }




// HanifiaApp
// Order Mail


var nodemailer = require('nodemailer');
const functions = require('firebase-functions');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'hanifiaresturant@gmail.com',
    pass: 'bnstallions123'
  }
});

exports.EmaillingService=functions.database.ref('orders/{orderId}').onCreate((snapshot,context)=>{

	let client=snapshot.val();
	console.log(context.params.orderId);

	return orderEmail(client);
});

function orderEmail(){


var mailOptions = {
  from: 'youremail@gmail.com',
  to: 'myfriend@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!',
  html: '<h1>Welcome</h1><p>That was easy!</p>'
};

 return (transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}));
}

