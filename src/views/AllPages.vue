<template>
	<nav>
		<section>

			<h2>家計簿</h2>
			<!-- register -->
			<h3>新規登録</h3>
			<router-link to="/register/mailaddress-form">メアド入力</router-link> <br />
			<router-link to="/register/mailaddress-form/complete">メール送信完了</router-link> <br />
			<router-link to="/register">入力画面</router-link> <br />
			<router-link to="/register/confirmation">入力確認</router-link> <br />
			<!-- login -->
			<h3>ログイン</h3>
			<router-link to="/login">ログインフォーム</router-link> <br />
			<router-link to="/login/mailaddress-form">メアド入力</router-link> <br />
			<router-link to="/login/mailaddress-form/complete">メール送信完了</router-link> <br />
			<router-link to="/login/resetting-password">パスワード再設定</router-link> <br />
			<!-- mypage -->
			<h3>マイページ</h3>
			<router-link to="/mypage/:id">マイページ</router-link> <br />
			<router-link to="/mypage/:id/edit">編集</router-link> <br />
			<router-link to="/mypage/:id/edit/confirmation">編集確認</router-link> <br />
			<!-- record -->
			<h3>記録画面</h3>
			<router-link to="/record">記録</router-link> <br />
			<!-- analysis -->
			<h3>分析画面</h3>
			<router-link to="/analysis/:id">分析</router-link> <br />
			<!-- input-list -->
			<h3>入力一覧</h3>
			<router-link to="/input-list/:id">入力一覧</router-link> <br />
		</section>
		<section>
			<h2>HP制作</h2>
			<router-link to="/home-page/hogetitle/hogepath">ホームページ1</router-link> <br />
		</section>


	</nav>
</template>