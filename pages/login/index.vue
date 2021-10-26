<template>
	<view class="login-page">
        <view class="login-title">登录</view>
        <view class="login-tip">你好，欢迎来到APP！</view>

        <u-cell-group>
			<u-field
				v-model="username"
				label="用户名"
				placeholder="请填写手机号"
			>
			</u-field>
			<u-field
				v-model="password"
				label="密码"
				placeholder="请填写验证码"
			>
			</u-field>
		</u-cell-group>
        <u-button type="primary" @click="handleLogin">主要按钮</u-button>
        <u-top-tips ref="uTips"></u-top-tips>
        <!-- <view class="login-tip right"><navigator url="./forget">忘记密码</navigator></view> -->
        <!-- <button type="primary" class="primary" @tap="handleLogin">登录</button> -->
    </view>
</template>

<script>
import md5Libs from "uview-ui/libs/function/md5";
export default {
	data() {
		return {
			username: '',
            password: ''
		}
	},
	computed: {
		
	},
	methods: {
		handleLogin() {
                this.$u.post('common/loginUser', {
				username: this.username,
				password: md5Libs.md5(this.password)
			}).then(res => {
				// res为服务端返回的数据
                if (res.code ===1) {
                    this.$u.route({
					    url: 'pages/index/index'
				    })
                } else if(res.code ===2) {
                    this.$refs.uTips.show({
				        title: res.message,
				        type: 'error',
				        duration: '2300'
			        })
                }
			})
		
		}
	}
};
</script>

<style lang="scss" scoped>
.login-page {
	padding: 30rpx;
    min-height: 100%;
    background: $u-bg-color;;
	.login-title {
		color: red;
		font-weight: 500;
		font-size: 44rpx;
		padding: 0 20rpx;
		margin-bottom: 20rpx;
	}
	
	.login-tip {
		color: red;
		padding: 0 20rpx;
		margin: 40rpx 0 80rpx 0;
		&.right {
			text-align: right;
		}
	}
    
    .login-tip-flex {
        display: flex;
        justify-content: space-between;
        color: $u-border-color ;
        margin: 40rpx 0 40rpx 0;
    }

	.input-row {
		display: flex;
		border-bottom: 1px solid $u-border-color;
		margin-top: 30rpx;
		
		m-input {
			flex-grow: 1;
		}
	}
	
	.iconfont {
        font-size: 40rpx;;
		margin: 0 20rpx 0 20rpx;
        color: $u-type-primary-dark;
	}
}
</style>
