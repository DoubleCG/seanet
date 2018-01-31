const SuccessDismissTeam = {
	template:`
const Success


<!DOCTYPE html>
<html lang="zh-CN">
<head>
	<meta charset="UTF-8">
	<title>Seanet-Dismissteam successfully</title>
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
	<!-- <link href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet"> -->
	<link href="bootstrap/css/bootstrap.min.css" rel="stylesheet">
	<style>
	    @media (max-width: 970px) {
	        body{
	            background-size:1000px 100%;
	        }
	    }
		#container{
			border:solid 2px #8619cc;
			border-radius: 0.5em;
			margin:10% auto;
			width:400px;
			height:240px;
			display: block;
		}
	</style>
</head>
<body>
	<div id="container">
		<h3>已经成功解散团队！</h3>
		<h4>接下来要：</h4>
		<button id='back'>返回主页</button>
		<button id='build'>另建团队</button>
	</div>
	<%include frameuse.ejs%>
	<script>
		document.getElementById('back').onclick = function(){
			zPost('/main');
		}
		document.getElementById('build').onclick = function(){
			zPost('/DealWithTeam');
		}
	</script>
</body>
</html>
	`,
}