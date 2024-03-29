<template>
    <div v-if="user" class="profile-bar">
        <div class="badge" @click="isOpen = !isOpen">
            <img :src="user.avatarUrl" alt="ava" />
            <div class="short-info">
                <div class="nick">{{ user.nickName }}</div>
                <div class="balance">{{ balance }}</div>
            </div>
            <div class="control">
                <img
                    src="~/assets/img/ico_dropdown.svg"
                    alt="dropdown"
                    :class="{ rotated: isOpen }"
                />
            </div>
        </div>

        <transition name="fade">
            <div v-show="isOpen" class="badge-drawer">
                <div class="badge-drawer__level">
                    <span class="lvl">LVL {{ user.level }} </span>
                    <div class="line">
                        <div class="scale"></div>
                        <div ref="levelRate" class="rate"></div>
                    </div>
                </div>
                <div class="badge-drawer__links">
                    <nuxt-link
                        v-for="(item, i) in items"
                        :key="i"
                        :to="item.to"
                        class="link"
                        @click.native="isOpen = false"
                    >
                        <span>
                            {{ item.title }}
                            <img
                                src="~/assets/img/ico_dropdown.svg"
                                alt="dropdown"
                            />
                        </span>
                    </nuxt-link>
                </div>
                <div class="badge-drawer__extras"></div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: null,
            isOpen: false,
            balance: '40BTC / 16DTC',
            items: [
                {
                    title: 'MY PROFILE',
                    to: '/player',
                },
                {
                    title: 'MY TEAM',
                    to: '/player/teams',
                },
                {
                    title: 'WITHDRAW',
                    to: '/',
                },
                {
                    title: 'DEPOSIT',
                    to: '/',
                },
                {
                    title: 'PREMIUM',
                    to: '/player/premium',
                },
                {
                    title: 'STATISTICS',
                    to: '/',
                },
                {
                    title: 'Support',
                    to: '/',
                },
                {
                    title: 'Settings',
                    to: '/',
                },
                {
                    title: 'Logout',
                    to: '/player/logout',
                },
            ],
        }
    },

    async fetch() {
        this.user = await this.$db.read('/users/' + this.$auth.user.localId)
    },

    watch: {
        isOpen(newValue) {
            if (newValue) {
                setTimeout(() => {
                    this.$refs.levelRate.style.width = `${this.user.level}%`
                }, 0)
            }
        },
    },
}
</script>

<style lang="scss" scoped>
.profile-bar {
    position: absolute;
    width: 226px;
    height: 60px;
    top: 1.5rem;
    right: 0;
    background: #161a1f;
    display: flex;
    flex-direction: column;
    z-index: 101;
    .badge {
        padding: 0.5rem;
        width: 226px;
        height: auto;
        display: flex;
        position: absolute;
        background: inherit;
        img {
            width: 40px;
            height: 40px;
            flex: 0 0 auto;
            object-fit: cover;
            padding: 1px;
        }
        .short-info {
            flex: 1 0 auto;
            .nick {
                padding: 0.25rem 0.5rem;
            }
            .balance {
                color: #55aaff;
                padding: 0.2rem 0.5rem;
            }
        }

        .control {
            flex: 0 0 1rem;
            justify-self: flex-end;
            transform: rotate(180deg);
        }
    }

    .badge-drawer {
        padding: 0.5rem;
        position: absolute;
        top: 61px;
        width: 226px;
        background: inherit;
        overflow: hidden;

        .badge-drawer__level {
            height: 1rem;
            font-size: 10px;
            display: flex;
            background: inherit;
            .lvl {
                flex: 0 0 40px;
                padding: 0.2rem;
            }
            .line {
                flex: 0 0 160px;
                position: relative;
                height: 100%;
                .scale {
                    position: absolute;
                    bottom: 1px;
                    left: 0;
                    height: 2px;
                    width: 100%;
                    background: inherit;
                }
                .rate {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    height: 4px;
                    width: 0;
                    background: white;
                    border-radius: 2px;
                    z-index: 1;
                    transition: width 0.75s ease-out 1s;
                    box-shadow: 0 0 3px;
                }
            }
        }

        .badge-drawer__links {
            width: 100%;
            padding: 0.75rem 0.5rem;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            .link {
                color: #f5f5f5;
                width: 100%;
                text-decoration: none;
                font-size: 12px;
                line-height: 175%;

                img {
                    float: right;
                    transform: rotate(90deg);
                }
                &:visited {
                    color: #f5f5f5;
                }
                &:hover {
                    font-size: 13px;
                    span {
                        filter: drop-shadow(0 0 1px rgb(0, 60, 255));
                    }
                }
                &:first-child {
                    padding-top: 1rem;
                    border-top: 1px solid #0f1215;
                }
                &:last-child {
                    color: #969ba3;
                }
                &:nth-last-child(2) {
                    color: #969ba3;
                }
                &:nth-last-child(3) {
                    color: #969ba3;
                    padding-top: 1rem;
                    border-top: 1px solid #0f1215;
                }
            }
        }

        .badge-drawer__extras {
            background: #2b353f;
        }
    }
}

.rotated {
    transform: rotate(-180deg);
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>