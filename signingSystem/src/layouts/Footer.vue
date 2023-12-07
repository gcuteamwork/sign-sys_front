<script setup lang="ts">
</script>

<template>
    <div class="footer">
        <ul>
            <li>签到发起</li>
            <li>个人</li>
        </ul>
    </div>
</template>
<style scoped>
.footer {
    position: fixed;
    bottom: 0;
    width: 85%;
    height: 60px;
    border-radius: 10px;
    background: rgba(41, 103, 204, 1);
    display: flex;
    justify-content: space-around;
    align-items: center;
    left: 50%;
    transform: translateX(-50%);
}

.footer ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    width: 50%;
    /*这个可能后面要改一下 */
}

.footer ul li {
    color: white;
}
</style>