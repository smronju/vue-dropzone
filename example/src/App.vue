<template>
    <div id="app">
        <vue-dropzone :files.sync="files" v-ref:dropzone></vue-dropzone>
        <hr/>
        <a @click="getFiles">Get dropped files</a>
        <ul class="file-list">
            <li v-for="file in files">
                <img :src="file.thumbnail" alt="" />
            </li>
        </ul>
    </div>
</template>

<script>
import Dropzone from 'vue-dropzone';

export default {
    name: 'App',
    components: { Dropzone },
    data () {
        return {
            files: []
        };
    }
};

</script>
