<script lang="ts" setup>
import Records from './Records.vue';
import { blogsService } from './BlogsService'
import RecordToolBar from './RecordsToolBar.vue';
blogsService.serviceRigister()
</script>
<template>
    <div>
        <RecordToolBar />
        <a-divider />

        <Records />
    </div>
</template>
