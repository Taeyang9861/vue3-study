<script setup>
// const props = defineProps(['title', 'content'])
defineProps({
    title: {
        type: String,
        default: '标题'
    },
    content: {
        type: String,
        default: '内容'
    }
})
</script>

<template>
    {{ title }}: {{ content }}
</template>