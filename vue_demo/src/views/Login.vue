<template>
    <div class="login">
        <el-form ref="loginForm" :label-position="labelPosition" label-width="80px" class="login-box">
            <img class="login-logo" src="//www.baidu.com/img/bd_logo1.png?where=super" width="270" height="129" usemap="#mp">
            <map name="mp" id="s_mp"><area style="cursor:pointer;outline:none;" shape="rect" coords="0,0,270,129" href="//www.baidu.com/s?wd=%E4%BB%8A%E6%97%A5%E6%96%B0%E9%B2%9C%E4%BA%8B&amp;tn=SE_Pclogo_6ysd4c7a&amp;sa=ire_dl_gh_logo&amp;rsv_dl=igh_logo_pc" target="_blank" title="点击一下，了解更多" onmousedown="return ns_c({'fm':'behs','tab':'bdlogo'})"></map>
            <el-form-item class="login-item">
                <!-- <img class="login-img" :src="imgURL.account"> -->
                <el-input prefix-icon="el-icon-mobile-phone" class="login-input" v-model="form.account" placeholder="请输入账号"></el-input>
            </el-form-item>
            <el-form-item>
                <!-- <img class="login-img" :src="imgURL.password"> -->
                <el-input prefix-icon="el-icon-mima" class="login-input" v-model="form.password" placeholder="请输入密码" show-password></el-input>
            </el-form-item>
            <el-form-item class="login-btn">
                <el-button class="login-submit" size="medium" type="primary" @click="handleSubmit" :loading="isLoading">登录</el-button>
                <a href="javascript:void(0)">忘记密码</a>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
const accountImg = require('@/assets/img/icon_zh.png')
const passwordImg = require('@/assets/img/icon_mm.png')
import { Message } from 'element-ui'
import JsEncrypt from 'jsencrypt'
export default {
    data () {
        return {
            form: {
                account: '',
                password: ''
            },
            labelPosition: 'top',
            imgURL: {
                account: accountImg,
                password: passwordImg
            },
            isLoading: false
    }},
    methods: {
        handleSubmit () {
            this.isLoading = true
            if (this.form.account.trim() == '' || this.form.password.trim() == '') {
                this.$message({
                    message: '账号或密码不能为空',
                    center: true,
                    type: 'warning'
                })
                this.isLoading = false
                return false
            }
            this.$router.push({ name: 'home' })
        }
    },
    mounted: function() {
        window.onresize = () => {
            const windowWidth = document.body.clientWidth
            const windowHeight = document.body.clientHeight
            const windowAspectRatio = windowHeight / windowWidth
            let bgWidth
            let bgHeight
            if (windowAspectRatio < 0.5625) {
                bgWidth = windowWidth
                bgHeight = bgWidth * 0.5625
                this.fixStyle = {
                    height: windowWidth * 0.5625 + 'px',
                        width: windowWidth + 'px',
                    'margin-bottom': (windowHeight - bgHeight) / 2 + 'px',
                    'margin-left': 'initial'
                }
            } else {
                bgHeight = windowHeight
                bgWidth = bgHeight / 0.5625
                this.fixStyle = {
                    height: windowHeight + 'px',
                    width: windowHeight / 0.5625 + 'px',
                    'margin-left': (windowWidth - bgWidth) / 2 + 'px',
                    'margin-bottom': 'initial'
                }
            }
        }
        window.onresize()
    }
}
</script>
<style scoped>
.login {
    position: relative;
    /* 使得背景全铺页面 */
    height: 100vh;
    width: 100%;
    overflow: auto;
    /* background: url(../assets/img/img_bg.jpg) no-repeat; */
    /* background-size: 100% 100%; */
    /* background:mediumturquoise; */
}
.login-box {
    /* position: relative; */
    /* top: 180px; */
    width: 350px;
    border: 1px solid #DCDFE6;
    margin: 180px auto;
    padding: 35px 65px 15px 35px;
    box-shadow: 0 0 25px #909399;
    background: rgb(255, 255, 255)
}
.login-input {
    margin-left: 30px;
    color: #b3b3b3;
    font-family: SourceHanSansCN-Regular;
    font-size: 0.3rem;
}
.login-btn{
    margin-left: 30px;
}
.login-logo {
    position: relative;
    margin-left: -114px;
    left: 50%;
}
.login-item {
    height: 60px;
}
a {
    padding: 10px;
    text-decoration: #909399;
    color:#909399
}
.login-img {
    width: 20px;
    height: 23.24px;
    position: relative;
    top: 47px;
}
.login-submit {
    width: 150px;
}
</style>
