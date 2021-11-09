<template>
    <div>
        <div id="_uid" class="input-wrapper">
            <input
                id="_uid"
                ref="file"
                v-bind="$attrs"
                type="file"
                class="custom-file-input"
                accept="image/*"
                @change="preview"
            />
            <BaseInput
                disabled="true"
                :value="file ? file.name : `No file choosen`"
                ><slot></slot
            ></BaseInput>

            <BaseButton
                class="secondary white"
                style="height:40px;"
                @click.prevent="$refs.file.click()"
                >Choose</BaseButton
            >
        </div>

        <img :src="logoUrl" alt="logo" />
    </div>
</template>

<script>
export default {
    name: 'FileInput',

    inheritAttrs: false,

    props: {
        url: {
            type: String,
            default: null,
        },
    },

    data() {
        return {
            logoUrl: require('@/assets/img/doit.svg'),
            file: null,
        }
    },

    mounted() {
        if (this.url) this.logoUrl = this.url
    },

    methods: {
        preview(event) {
            const file = event.target.files[0]
            if (!file) return false
            const reader = new FileReader()
            reader.onload = (e) => {
                this.logoUrl = e.target.result
                this.file = file
                this.$emit('logo-choosen', file)
            }
            reader.readAsDataURL(file)
        },
    },
}
</script>


<style lang="scss" scoped>
img {
    margin: 1rem;
    width: 128px;
    height: 128px;
    object-fit: contain;
}
.custom-file-input {
    width: 100%;
    color: #627ca3;
    border: 1px solid #16263d;
    border-radius: 2px;
    outline: none;
    line-height: 175%;
}

input[type='file'] {
    visibility: hidden;
    width: 0;
}

.input-wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    gap: 1rem;
}
</style>