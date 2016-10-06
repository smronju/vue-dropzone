import Vue from 'vue';
import Dropzone from 'dropzone';

const DropzoneComponent = Vue.extend({
    props: {
        url: {
            type: String,
            default: 'SomeUrlToInitialize'
        },
        autoProcessQueue: {
            type: Boolean,
            default: false
        },
        createImageThumbnails: {
            type: Boolean,
            default: false
        },
        previewsContainer: {
            type: Boolean,
            default: false
        },
        clickable: {
            type: Boolean,
            default: false
        }
    },
    template: `
        <div v-el:dropzone>
            <p>Drag file here to upload</p>
        </div>
    `,
    methods: {
        getFiles () {
            console.log('Return dropzone dropped files');
            console.log(this.dropzone);
        }
    },
    ready () {
        console.log('Initialize dropzone');
        const dropzone = new Dropzone(this.$els.dropzone, {
            url,
            autoProcessQueue: false,
            createImageThumbnails: false,
            previewsContainer: false,
            uploadMultiple: false,
            clickable: false
        });
    },
    beforeDestroy () {
        console.log('Destroy component');
    },
    destroyed () {
        console.log('Destroyed');
    }
});

module.exports = Vue.component('vue-dropzone', DropzoneComponent);
