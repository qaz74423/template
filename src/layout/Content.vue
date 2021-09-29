<script lang="ts" setup></script>

<template>
    <a-layout-content :style="{ margin: '2px 16px 0', overflow: 'initial', overflowX: 'hidden' }">
        <div :style="{ padding: '24px', background: '#fff', textAlign: 'center' }">
            <router-view />
        </div>
    </a-layout-content>
</template>