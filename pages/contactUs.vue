<template>
    <section class="contact">
        <h1 class="header">Contact us</h1>
        <p class="line">
            <img
                class="line__icon"
                src="~/assets/img/mdi_location_on.svg"
                alt="location icon"
            />
            <span class="line__text">
                2440, Daisy Dr undefined Pembroke Pines, Arizona
            </span>
        </p>
        <p class="line">
            <img
                class="line__icon"
                src="~/assets/img/mdi_local_phone.svg"
                alt="phone icon"
            />
            <span class="line__text">
                Headquater
                <a class="line__text_highlight" href="tel:48517429774">
                    (+48) 517 429 774
                </a></span
            >
        </p>
        <p class="line">
            <img
                class="line__icon"
                src="~/assets/img/mdi_envelope.svg"
                alt="envelop icon"
            />
            <span class="line__text">
                <p>
                    <a href="mailto:support@doit.gg">
                        <span class="line__text_highlight">Support </span>
                        @doit.gg
                    </a>
                </p>
                <p>
                    <a href="mailto:organizer@doit.gg">
                        <span class="line__text_highlight"> Organizer </span
                        >@doit.gg
                    </a>
                </p>
                <p>
                    <a href="mailto:sponsorship@doit.gg">
                        <span class="line__text_highlight"> Sponsorship</span
                        >@doit.gg
                    </a>
                </p>
            </span>
        </p>
    </section>
</template>

<style lang="scss" scoped>
.contact {
    display: flex;
    flex-direction: column;
    font-family: 'Rubik';
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 130%;
    padding: 22px;
    & .header {
        font-family: 'Rubik';
        font-style: normal;
        font-weight: bold;
        font-size: 32px;
        line-height: 56px;
        color: #ffffff;
    }
    & .line {
        display: flex;
        align-items: center;
        & .line__icon {
            width: 32px;
            height: 32px;
            margin: 8px;
        }
        & .line__text {
            padding-left: 17px;
            font-size: 16px;
            line-height: 100%;
            color: #707880;
            & a {
                font-size: 16px;
                line-height: 100%;
                color: #707880;
                &:link {
                    text-decoration: none;
                }

                &:visited {
                    text-decoration: none;
                }

                &:hover {
                    text-decoration: underline;
                }

                &:active {
                    text-decoration: underline;
                }
            }
            & .line__text_highlight {
                color: white;
            }
        }
    }
}
</style>