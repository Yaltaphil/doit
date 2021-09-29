<template>
    <div class="page-content">
        <div class="user-info">
            <ProfileAvatar>
                <img src="~/assets/img/photo-player.png" alt="photo" />
            </ProfileAvatar>
            name nik team
        </div>

        <div class="profile-table">
            <p class="section-header">Profile</p>
        </div>

        <div class="user-awards">
            <p class="section-header">Level and awards</p>
            <ProfileProgressBar />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.page-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    & .user-info {
        background: green;
        width: 200px;
        height: 200px;
        display: flex;
        flex-direction: row;
    }
    & .profile-table {
        background: purple;
        width: 200px;
        height: 200px;
    }
    & .user-awards {
        background: tomato;
        width: 200px;
        height: 200px;
    }
}

@media only screen and (min-width: 769px) {
    .page-content {
        flex-direction: row;
        align-items: flex-start;
        & .user-info {
            flex-direction: column;
        }
    }
}
</style>