<template>
    <div class="container">
        <div class="error">
            <div class="error__code">
                <span v-if="error.statusCode === 404" class="error_code"
                    >404</span
                >
                <span v-else>An error occurred</span>
            </div>
            <div class="error__text">
                <span>
                    Are you lost? <br />
                    Please back to the game
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    layout: 'default',
    props: {
        error: {
            type: Object,
            default: () => {},
        },
    },
}
</script>

<style lang="scss" scoped>
// TODO overflow xy
.container {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.error {
    width: 100%;
    height: 100vh;
    font-family: 'Roboto';
    font-style: normal;
    text-align: center;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    background: rgb(15, 18, 21);
    background: linear-gradient(
        180deg,
        rgba(15, 18, 21, 1) 0%,
        rgba(9, 9, 121, 1) 40%,
        rgba(0, 212, 255, 1) 100%
    );
}

.error__code {
    font-weight: bold;
    font-size: 100px;
    line-height: 100%;
    text-align: center;
    color: #ffffff;
    flex: 1 1 1;
}

.error__text {
    font-weight: normal; // nah 500 in mobile version?
    font-size: 30px;
    line-height: 130%;
    text-align: center;
    color: #0f1215;
    padding: 1rem;
    flex: 1 1 1;
}

@media only screen and (min-width: 769px) {
    .container {
        background: rgb(15, 18, 21);
    }

    .error {
        margin: 0 auto;
        max-width: 1170px;
        min-height: 334px;
        font-family: 'Roboto';
        font-style: normal;
        display: flex;
        flex-flow: row-reverse nowrap;
        justify-content: center;
        align-items: center;
        background: rgb(15, 18, 21);
    }

    .error__code {
        height: 334px;
        font-weight: bold;
        font-size: 116px;
        line-height: 100%;
        padding: 128px 147px 128px 84px;
        color: #0f1215;
        background: rgba(0, 212, 255, 1);
        background: linear-gradient(
            270deg,
            rgba(15, 18, 21, 1) 0%,
            rgba(9, 9, 121, 1) 15%,
            rgba(0, 212, 255, 1) 100%
        );
        padding-top: 109px;
    }

    .error__text {
        font-weight: normal; // 500 in mobile version?
        font-size: 30px;
        line-height: 130%;
        text-align: left;
        color: white;
        padding: 128px 3rem 0 5rem;
        height: 334px;
        border: 1px solid rgba(9, 9, 121, 1);
        border-image: linear-gradient(to right, #0a68f5 10%, transparent 90%);
        border-image-slice: 1;
    }
}
</style>