<template>
    <mavon-editor
            v-model="content"
            @change="mavonChange"
            :editable="is_editable"
            :subfield="is_subfield"
            :defaultOpen="defaultOpen"
            :codeStyle="codeStyle"
            :toolbars="toolbars"
            placeholder="写点啥呢..."
    />
</template>

<script>
    import codeStyle from "../../mavon/codeStyle";
    import toolbars from "../../mavon/toolbars";
    export default {
        name: "insert",
        data() {
            return {
                content: '',
                //是否允许编辑
                is_editable: true,
                //true： 双栏(编辑预览同屏)， false： 单栏(编辑预览分屏)
                is_subfield: false,
                //默认显示预览屏
                defaultOpen: 'edit',
                //编辑器配色方案
                codeStyle: JSON.stringify(codeStyle),
                //工具栏
                toolbars: toolbars
            }
        },
        methods: {
            mavonChange(value,render) {
                console.log(render)
            }
        }
    }
</script>

<style scoped>

</style>