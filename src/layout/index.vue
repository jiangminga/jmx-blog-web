<style>
    .item-menu-h{
        height: 65px;
    }
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-logo{
        float: left;
        position: relative;
        left: 20px;
    }
    .layout-nav{
        float: right;
        margin: 0 auto;
        margin-right: 20px;
    }
    .layout-my{
        float: right;
        margin-right: 20px;
    }
    .layout-logo-text{
        /*
            文字阴影：
            text-shadow: 水平位移 垂直位移  模糊程度  阴影颜色;
        */
        font: 700 30px "Comic Sans MS";
        color: #737373;
        text-shadow: 0 0 15px #2d8cf0;
        cursor:pointer;
    }
    .layout-footer-center{
        text-align: center;
    }
</style>
<template>
    <div class="layout">
        <Header style="background: #fff">
            <Menu mode="horizontal" theme="light" active-name="1" class="item-menu-h">
            <div class="layout-logo">
                <span class="layout-logo-text">blog</span>
            </div>
            <Input prefix="ios-search" placeholder="搜索..." style="width: 280px;margin-left: 7%;" />
            <div class="layout-my">
                <Button size="small" type="text">登陆/注册</Button>
                <ButtonGroup>
                    <Button size="small" icon="logo-github"></Button>
                </ButtonGroup>
            </div>
            <div class="layout-nav">
                <MenuItem name="1" to="/">
                    博客
                </MenuItem>
                <MenuItem name="4">
                    关于作者
                </MenuItem>
            </div>
        </Menu>
        </Header>
        <Layout :style="{padding: '0 50px'}">
            <Breadcrumb :style="{margin: '16px 0'}">
                <BreadcrumbItem>Home</BreadcrumbItem>
                <BreadcrumbItem>Components</BreadcrumbItem>
                <BreadcrumbItem>Layout</BreadcrumbItem>
            </Breadcrumb>
            <Content :style="{padding: '24px 0', minHeight: '500px', background: '#fff'}">
                <router-view />
            </Content>
            <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
        </Layout>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>

</style>