<template>
    <article class="article">
        <h1 class="title">title</h1>
        <div style="display: flex;width: 100%">
            <a>
                <img class="head_img" src="https://upload.jianshu.io/users/upload_avatars/3113531/cabddb0c13f3?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"/>
            </a>
            <div style="margin-left: 13px;flex-direction: column;display: flex;;margin-top: 14px">
                <p style="display: flex;"><span class="author">姜明</span><Button size="small" style="margin-left: 10px" shape="circle">关注</Button></p>
                <p style="display: flex;"><span class="author">姜明</span><span class="author">姜明</span><span class="author">姜明</span><span class="author">姜明</span><span class="author">姜明</span><span class="author">姜明</span><span class="author">姜明</span><span class="author">姜明</span><span class="author">姜明</span><span class="author">姜明</span><span class="author">姜明</span><span class="author">姜明</span><span class="author">姜明</span><span class="author">姜明</span><span class="author">姜明</span><span class="author">姜明</span><span class="author">姜明</span></p>
            </div>
        </div>
        <div v-html="content"></div>
    </article>
</template>

<script>
    export default {
        name: "info",
        data() {
            return {
                id: '',
                content: '',
            }
        },
        methods: {}
    }
</script>

<style scoped>
    .author{
        font-size: 16px;
        color: #404040;
        font-weight: 500;
    }
</style>