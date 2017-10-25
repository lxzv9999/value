var express = require('express');
var router = express.Router();
var fs=require('fs')

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// router.get('/dq', function(req, res, next) {
//     fs.readFile('public/lxz.txt', 'utf-8', function(err, data) {
//         var num = parseInt(data.split(':')[1]) + 1;
//         fs.writeFile('public/lxz.txt', '页面被访问的次数:' + num, function(err) {
//             res.render('index', { title: '页面被访问的次数:' + num });

//         })
//     })
// });

// router.post('/tj',function(req,res,next){
//     res.render('tj',{title:'TJ'})
// })



// router.post('/lxz1', function(req, res, next) {
//     res.header('Access-Control-Allow-Origin','*');
//     var temp=parseInt(req.body.abc)+1
//     res.send({name:temp});
//     console.log(req.body.abc);
// });

router.post('/input',function(req,res,next){
// res.header('Access-Control-Allow-Origin','*');
res.header('Access-Control-Allow-Origin','*');
fs.readFile('public/in.txt','utf-8',function(err,data){
    var str=JSON.parse(data);
    str.push({name:req.body.name});
    console.log(str);
    fs.writeFile('public/in.txt',JSON.stringify(str),function(err){
        fs.readFile('public/in.txt','utf-8',function(err,jx){
            var data=JSON.parse(jx);
            res.send({name:data})
        })
    })

})
})

module.exports = router;
