const OtherPerson = {
	template:`
<div
	id='people'>

	<div class="title">
		个人信息
	</div>

	<button
		id='backToMainPage-btn'
		v-on:click='backToMainPage'
		class="btn btn-default"
	>返回主页
	</button>
	
	<div
		id='peopleHeadForm'
	>
		<h4>更新头像:</h4>
		<div>
			<input
				id='avatorInput'
				name="avator"
				type="file"
				class="btn btn-default"
				v-on:change='checkImg'
			>
			<button
				class="btn btn-success"
				v-on:click='headImageUpdate'
			>保存
			</button>
			<button
				class="btn btn-danger"
				v-on:click='hideHeadForm'
			>取消
			</button>
			<br clear='both'>
		</div>
		<img
			id='checkImg'
		/>
	</div>
		
	<div class="row">

		<div class="col-md-4">
			<img
				id='headImg'
				v-on:click='showPersonHeadForm'
				title="点击更新头像"
				v-bind:src= 'personHeadImage' 
			>
		</div>

		<div class="col-md-8">
			<div id='personInfo'>
				<div>
					<b>ID:</b>
					<span><%= uid %></span>
				</div>
				<div>
					<b>昵称:</b>
					<input
						v-model.trim='name'
					>
				</div>
				<div>
					<b>性别:</b>
					<input
						v-model.trim='sex'
					>
				</div>
				<div>
					<b>爱好:</b>
					<input
						v-model.trim='hobby'
					>
				</div>
				<div>
					<b>生日:</b>
					<input
						v-model.trim='birthday'
					>
				</div>
				<h4>叨叨:</h4>
				<textarea
					v-model.trim='introduce'
				><%= introduce %>
				</textarea>
				
				<div>
					<button
						style='margin-top:5px;'
						v-on:click='textUpdate'
						class="btn btn-primary"
					>{{subBtnText}}
					</button>
				</div>

			</div>
		</div>
	</div>
</div>

	<script>
		var name = '<%=name%>';
		var sex = '<%=sex%>';
		var PersonHeadImage = '<%=headImg%>';
		var introduce = '<%=introduce%>';
		var hobby = '<%=hobby%>';
		var birthday = '<%=birthday%>';
	</script>

	`,
} 
