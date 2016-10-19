var Vue = require('vue');
var Dropzone = require('dropzone');

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
            default: true
        },
        previewsContainer: {
            type: Boolean,
            default: false
        },
        clickable: {
            type: Boolean,
            default: true
        },
        files: {
            type: Array,
            default: [],
            twoWay: true
        }
    },
    template: `
        <div v-el:dropzone class="vue-dropzone">
            <p>Drag file here to upload</p>
        </div>
    `,
    ready () {
        const dropzone = new Dropzone(this.$els.dropzone, {
            url: this.url,
            autoProcessQueue: this.autoProcessQueue,
            createImageThumbnails: this.createImageThumbnails,
            previewsContainer: this.previewsContainer,
            uploadMultiple: this.uploadMultiple,
            clickable: this.clickable
        });

        dropzone.on('thumbnail', (file, thumbnail) => {
            this.files.push({ file, thumbnail });
        });
    },
    destroyed () {
        this.files = [];
    }
});

VueDropzone = Vue.component('vue-dropzone', DropzoneComponent);

module.exports = VueDropzone;
