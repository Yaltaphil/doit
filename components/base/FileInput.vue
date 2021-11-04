<template>
    <div>
        <label id="_uid">
            <slot></slot>
            <input
                id="_uid"
                v-bind="$attrs"
                type="file"
                class="custom-file-input"
                accept="image/*"
                @change="preview"
            />
        </label>

        <img ref="logoPreview" :src="logoUrl" alt="logo" />
    </div>
</template>

<script>
export default {
    name: 'FileInput',

    inheritAttrs: false,

    data() {
        return {
            logoUrl: require('@/assets/img/doit.svg'),
        }
    },

    methods: {
        preview(event) {
            const file = event.target.files[0]
            if (!file) return false
            const reader = new FileReader()
            reader.onload = (e) => {
                this.logoUrl = e.target.result
                this.$emit('logo-selected', file)
            }
            reader.readAsDataURL(file)
        },
    },
}
</script>


<style lang="scss" scoped>
img {
    margin: 1rem;
    width: 64px;
    height: 64px;
    object-fit: cover;
}
.custom-file-input {
    width: 100%;
    color: #627ca3;
    height: 40px;
    border: 1px solid #16263d;
    border-radius: 2px;
    outline: none;
    line-height: 175%;
}

.custom-file-input::-webkit-file-upload-button {
    visibility: hidden;
    width: 0;
}
.custom-file-input::before {
    content: 'CHOOSE';
    padding: 0.5rem 2.5rem;
    background: #1a222d;
    font-weight: bold;
    font-size: 10px;
    text-align: center;
    color: #f5f5f5;
    outline: none;
    white-space: nowrap;
    user-select: none;
    cursor: pointer;
    margin-left: 0.5rem;
    float: right;
}
.custom-file-input:hover::before {
    background: -webkit-linear-gradient(top, #252424, #022185);
}
.custom-file-input:active::before {
    background: -webkit-linear-gradient(top, #252424, #053bec);
}
</style>