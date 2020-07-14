<style>
    .layout {
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }

    .layout-logo {
        float: left;
        position: relative;
        left: 20px;
    }

    .layout-nav {
        float: right;
        margin: 0 auto;
        margin-right: 20px;
    }

    .layout-my {
        float: right;
        margin-right: 20px;
    }

    .layout-logo-text {
        /*
            文字阴影：
            text-shadow: 水平位移 垂直位移  模糊程度  阴影颜色;
        */
        font: 700 30px "Comic Sans MS";
        color: #737373;
        text-shadow: 0 0 15px #2d8cf0;
        cursor: pointer;
    }

    .layout-footer-center {
        text-align: center;
    }
</style>
<template>
    <div class="layout">
        <Layout>
            <Header :style="{position: 'fixed', width: '100%',background: '#fff'}">
                <Menu mode="horizontal" theme="light" active-name="1">
                    <div class="layout-logo">
                        <span class="layout-logo-text">blog</span>
                    </div>
                    <div class="layout-nav">
                        <MenuItem name="1" to="/">
                            博客
                        </MenuItem>
                        <MenuItem name="4">
                            关于
                        </MenuItem>
                    </div>
                </Menu>
            </Header>
            <Layout style="padding: 0 30px;">
                <Content :style="{margin: '88px 20px 0', background: '#fff'}">
                    <Layout>
                        <Sider v-if="true" style="background: #fff;border-right: 1px solid  #d7dde4;">
                            <div :class="{'left-menu-is-fixed' : isFixed}">
                                <Menu active-name="1" theme="light" width="auto" :open-names="['1']" style="height: 595px;overflow-y: auto;">
                                    <MenuGroup title="内容管理">
                                        <MenuItem name="1">
                                            <Icon type="md-document" />
                                            文章管理
                                        </MenuItem>
                                        <MenuItem name="2">
                                            <Icon type="md-chatbubbles" />
                                            评论管理
                                        </MenuItem>
                                    </MenuGroup>
                                    <MenuGroup title="统计分析">
                                        <MenuItem name="3">
                                            <Icon type="md-heart" />
                                            用户留存
                                        </MenuItem>
                                        <MenuItem name="4">
                                            <Icon type="md-leaf" />
                                            流失用户
                                        </MenuItem>
                                    </MenuGroup>
                            </Menu>
                            </div>
                        </Sider>
                        <Content style="padding: 24px;background: #fff;min-width: 600px" :class="{'l-content-c' : isFixed}">
                            <router-view/>
                        </Content>
                        <div id="boxFixed" :class="{'right-menu-is-fixed' : isFixed}">
                            <Sider :style="{background: '#fff'}" style="height: 595px;margin-left: 20px;text-align: center;">
                                <img class="right_head_img" src=""/><br>
                                <Button size="small" type="success" >登录</Button>
                                <Button size="small" style="margin-left: 10px">注册</Button>
                                <Divider>文章推荐</Divider>
                                <p>123</p>
                                <p>123</p>
                                <p>123</p>
                                <p>123</p>
                                <p>123</p>
                                <p>123</p>
                                <p>123</p>
                                <p>123</p>
                                <Divider>作者推荐</Divider>
                                <p>123</p>
                                <p>123</p>
                                <p>123</p>
                                <p>123</p>
                                <p>123</p>
                                <p>123</p>
                                <p>123</p>
                            </Sider>
                        </div>
                    </Layout>
                </Content>
            </Layout>
            <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
        </Layout>
    </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                isFixed: false,
                offsetTop:10
            }
        },
        mounted(){
            window.addEventListener('scroll',this.initHeight);
            this.$nextTick( () => {
                this.offsetTop = document.querySelector('#boxFixed').offsetTop;
            })
        },
        methods:{
            initHeight () {
                var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                this.isFixed = scrollTop > 28 ? true : false;
            },
        },
        destroyed () {
            window.removeEventListener('scroll', this.handleScroll)
        }
    }
</script>

<style lang="less" scoped>
    @deep: ~'>>>';
    @{deep}.ivu-layout-header {
        height: 61px !important;
        z-index: 1001;
        border-bottom: 1px #dcdee2 solid;
    }

    @{deep}.ivu-menu-item {
        /*height: 59px !important;*/
    }
    @{deep}.ivu-menu-light:after {
        width: 0;
    }

    .l-content-c{
        padding: 24px;
        background: #fff;
        margin-right: 220px
    }
    .right-menu-is-fixed{
        width: 220px;
        position: fixed;
        right: 51px;
        top: 65px;
        bottom: 80px;
    }
    .left-menu-is-fixed{
        width: 199px;
        position: fixed;
        left: 51px;
        top: 65px;
        bottom: 80px;
    }
    .right_head_img{
        height: 60px;
        width: 60px;
        border-radius:50%;
        -webkit-border-radius:50%;
        -moz-border-radius:50%;
        margin-top: 15px;
    }
</style>