<template>
  <div id="home-page">
    <!-- Sticky buttons -->
    <div
      class="sticky"
      :class="{ 'sticky--stop': stopChancesMoving, 'sticky--show': token }"
    >
      <base-sticky-button variant="point" :score="totalPoints" unit="ASR point">
      </base-sticky-button>
      <base-sticky-button
        variant="chance"
        :score="totalChances"
        unit="NFT chance"
      >
      </base-sticky-button>
    </div>
    <!-- End -->
    <div
      class="countries"
      :class="[hiddenSreenOnMobile ? 'hidden-first-time-mobile' : '']"
    >
      <div class="text-header">
        <img :src="require('~/assets/images/header.png')" alt="" />
      </div>
      <v-card-text class="description" v-html="dataJson.DES_HOME">
      </v-card-text>

      <TheGroupButton @scrollToMap="handleScrollToMap" />

      <!-- Border  -->
      <div class="border-line">
        <div class="line-custom-left">
          <span></span>
          <span></span>
        </div>
        <div class="line-custom-right">
          <span></span>
          <span></span>
        </div>
        <div class="border-left">
          <img :src="require('~/assets/images/border-left.svg')" alt="" />
        </div>
        <div class="border-right">
          <img :src="require('~/assets/images/border-left.svg')" alt="" />
        </div>
      </div>
      <!-- Clouds -->
      <div class="clouds-right">
        <img :src="require('~/assets/images/cloud-rt.svg')" class="cloud-rt" />
        <img :src="require('~/assets/images/cloud-rb.svg')" class="cloud-rb" />
      </div>
      <div class="clouds-right-custom">
        <img :src="require('~/assets/images/cloud-rt.svg')" class="cloud-rt" />
        <img :src="require('~/assets/images/cloud-rb.svg')" class="cloud-rb" />
      </div>
      <div class="clouds-left">
        <img :src="require('~/assets/images/cloud-lt.svg')" class="cloud-lt" />
        <img :src="require('~/assets/images/cloud-lb.svg')" class="cloud-lb" />
      </div>
      <div class="clouds-small-bottom">
        <img
          :src="require('~/assets/images/cloud-sm-bl.svg')"
          class="cloud-lt"
        />
        <img
          :src="require('~/assets/images/cloud-sm-br.svg')"
          class="cloud-lb"
        />
      </div>
      <div class="clouds-small-bottom-custom">
        <img
          :src="require('~/assets/images/cloud-sm-bl.svg')"
          class="cloud-lt"
        />
        <img
          :src="require('~/assets/images/cloud-sm-br.svg')"
          class="cloud-lb"
        />
      </div>
      <!-- End Clouds -->

      <!-- Countries -->
      <div class="collect-contries">
        <img
          :src="require('~/assets/images/mountain.png')"
          id="mountain"
          class="mountain"
        />
        <div class="ballons">
          <img :src="require('~/assets/images/balloon-left.png')" />
          <img :src="require('~/assets/images/ballon-right.png')" />
        </div>

        <div
          v-for="country in listCountries"
          :key="country.name"
          class="item"
          :class="country.name.toLowerCase()"
          @click="handleClickCountry(country.name)"
        >
          <div :class="'img-' + country.name.toLowerCase()"></div>
          <h3>{{ country.name }}</h3>
          <div class="img-bear">
            <img
              v-if="country.positionBear === 'right'"
              :src="require('~/assets/images/bear.png')"
              class=""
            />
            <img
              v-else
              :src="require('~/assets/images/bear-flip.png')"
              class=""
            />
            <div class="circle">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
      <!-- End -->
    </div>
    <!-- Term & Condition link -->

    <div class="terms-conditions">
      <a href="/terms-and-conditions"
        >Terms and conditions apply</a
      >
    </div>
    <!-- End -->
    <!-- Screen instruction -->
    <div
      id="instruction"
      class="instruction"
      :class="[sreenInstruction ? 'visibility' : '']"
    >
      <img :src="require('~/assets/images/swipecursor.png')" alt="" />
      <p>Swipe around and select a country to start playing</p>
    </div>
    <!-- End screen instruction -->

    <LoginDialog
      v-if="gameCountry !== ''"
      :key="showLoginDialog"
      :srcImage="
        !gameState.isPlaying
          ? dataJson[`${gameCountry}`].urlWelcome
          : dataJson[`${gameCountry}`].urlGame
      "
      :show="showLoginDialog"
      @toggleDialog="toggleDialog"
      :token="token"
      @handleClickCountry="handleClickCountry"
      :type="
        dataJson[`${gameCountry}`] && dataJson[`${gameCountry}`].games
          ? dataJson[`${gameCountry}`].games.type
          : ''
      "
      :gamePlay="gameState.isPlaying"
      :submitSuccess="gameState.submitSuccess"
    >
      <div
        v-if="gameCountry !== '' && !gameState.isPlaying && token"
        :key="gameCountry"
      >
        <div class="title-dialog">{{ dataJson[`${gameCountry}`].title }}</div>
        <div class="description-dialog" v-html="dataJson[`${gameCountry}`].description">
        </div>
        <div class="button-label mb-37 mb-mb-0">
          <Button
            @click="handleClickCountry('', dataJson[`${gameCountry}`].welcome)"
            >{{ dataJson[`${gameCountry}`].btnText }}</Button
          >
        </div>
      </div>
      <div
        v-if="gameState.isPlaying && gameCountry !== '' && token"
        :key="gameCountry"
      >
        <GameContent
          @toggleDialog="toggleDialog"
          :correctAnswer="gameByCountry.correctAnswer || ''"
          :type="gameByCountry.type || ''"
          :title="gameByCountry.title || ''"
          :desc="gameByCountry.desc || ''"
          :src="gameByCountry.src || ''"
          :textLucky="gameByCountry.textLucky || ''"
          :answers="gameByCountry.answers || ''"
          :srcAfter="gameByCountry.srcAfter || ''"
          :gameId="dataJson[this.nameCountry].gameId || ''"
          :finalResult="gameByCountry.finalResult || []"
          :gameType="gameByCountry.typeMatch || ''"
        />
      </div>
    </LoginDialog>

    <!-- Screen Text Mobile -->
    <div
      id="screen-auto-hidden-mobile"
      :class="fadeOutSreenMobile ? 'fade-screen' : ''"
    >
      <div class="iframe">
        <div class="line-mobile">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="corner">
          <img
            :src="require('~/assets/images/border-left-mobile.svg')"
            alt=""
            v-for="i in 4"
            :key="i"
          />
        </div>
      </div>
      <div class="text-header-mobile">
        <img :src="require('~/assets/images/header.png')" alt="" />
      </div>
      <div class="mountain-mobile">
        <div class="wrap-icon">
          <img :src="require('~/assets/images/mountain-mobile.png')" alt="" />
          <img :src="require('~/assets/images/cubby-mobile.png')" alt="" />
        </div>
      </div>
      <v-card-text class="description-mobile" v-html="dataJson.DES_HOME_MOBILE">
      </v-card-text>

      <TheGroupButton
        @hiddenScreen="handleClickFadeScreenMobile"
        :showDesktop="false"
      />

      <div class="terms-conditions terms-conditions--mobile">
        <a href="/terms-and-conditions"
          >Terms and conditions apply</a
        >
      </div>
    </div>
    <!-- End  Screen Text Mobile -->
  </div>
</template>
<script>
import LoginDialog from "~/components/LoginDialog/LoginDialog.vue";
import BaseDialog from "~/components/BaseDialog/BaseDialog.vue";
import BaseInput from "~/components/BaseInput/BaseInput.vue";
import BaseRadio from "~/components/BaseRadio/BaseRadio.vue";
import Button from "~/components/BaseButton/BaseButton.vue";
import GameContent from "~/components/GameContent/GameContent.vue";
import data from "~/assets/mockup/data.json";
import _ from "lodash";
import { mapState, mapGetters, mapActions } from "vuex";
import { LIST_CONTRIES } from "~/utils/constants";
import TheGroupButton from "~/components/TheGroupButton/TheGroupButton.vue";

export default {
  name: "HomePage",
  components: {
    BaseDialog,
    BaseInput,
    Button,
    LoginDialog,
    TheGroupButton,
  },
  head: {
    title: "Home",
  },
  data() {
    return {
      // sticky button
      scrollY: 0,
      stopChancesMoving: false,
      showLoginDialog: false,
      showDialog: false,
      dataJson: data,
      nameCountry: "",
      prevDataNameCountry: "",
      stage: {},
      world: {},
      worldChoose: "",
      stopListening: false,
      listenerTimeout: null,
      fadeOutSreenMobile: false,
      hiddenSreenOnMobile: true,
      sreenInstruction: false,
      user: {
        isDragging: false,
        last: {
          x: 0,
          y: 0,
        },
        mouse: {
          x: 0,
          y: 0,
        },
        velocity: {
          x: 0,
          y: 0,
        },
        direction: {
          x: true, // false(left) || true(right)
          y: true, // false(upwards) || true(downwards)
        },
      },
      listCountries: LIST_CONTRIES,
      optionScroll: {
        duration: 600,
        easing: "easeInOutCubic",
        offset: 160,
      },
      optionScrollMobile: {
        duration: 600,
        easing: "easeInOutCubic",
        offset: 64,
      },
      fromHeader: false,
    };
  },
  mounted() {
    if (process.client) {
      this.init();
      this.detectMobile();
      this.handleHideScreenSwipe();
      window.addEventListener("load", () => {
        const homepage = document.getElementById("home-page");
        const sticky = document.querySelector(".sticky");
        const stickyPositionOffsetAndHeight =
          sticky.getBoundingClientRect().top +
          sticky.getBoundingClientRect().height;
        const boundY =
          homepage.getBoundingClientRect().y +
          homepage.getBoundingClientRect().height -
          sticky.getBoundingClientRect().height * 0.5;
        document.addEventListener("scroll", () => {
          const currentScroll =
            window.scrollY ||
            document.body.scrollTop ||
            document.documentElement.scrollTop;
          const scrollWithOffset = this.scrollY + stickyPositionOffsetAndHeight;
          if (scrollWithOffset > boundY) {
            this.stopChancesMoving = true;
          } else {
            this.stopChancesMoving = false;
          }

          this.scrollY = currentScroll;
        });
      });
      window.addEventListener("resize", () => {
        const widthScreen = window.innerWidth;
        if (widthScreen > 1024) {
          this.init();
        }
        // this.detectMobile();
        // this.handleHideScreenSwipe();
      });
      this.$nuxt.$on("signin", (data) => {
        if (data === "header") {
          this.fromHeader = true;
          this.handleClickCountry("GREETINGS", false);
        }
      });
    }
  },
  computed: {
    ...mapState("user", {
      token: (state) => state.token,
    }),
    ...mapState("country", ["gameState", "gameCountry"]),
    ...mapGetters("country", ["getTotalPoints", "getTotalChances"]),
    /**
     * Get total points of user
     */
    totalPoints() {
      return this.getTotalPoints;
    },
    /**
     * Get total chances of user
     */
    totalChances() {
      return this.getTotalChances;
    },
    /**
     * Get mapped game of country
     */
    gameByCountry() {
      return this.dataJson[`${this.gameCountry}`]?.games ?? Object.create({});
    },
  },
  methods: {
    ...mapActions("country", [
      "setContry",
      "setPlayingGame",
      "replay",
      "getAttemptId",
    ]),
    // ...mapActions(HOME_MODULE_NAME, ["setContry"]),
    init() {
      const stage = this.stage;
      const world = this.world;
      stage.element = document.querySelector(".countries");
      world.element = document.querySelector(".collect-contries");

      // Get boundary of stage element
      const stageDomRect = stage.element.getBoundingClientRect();
      // Calculate and assign mid point for stage
      stage.mid = {
        x: stageDomRect.width / 2,
        y: stageDomRect.height / 2,
      };
      // Calculate and assign offset
      stage.offset = {
        x: stageDomRect.left,
        y: stageDomRect.top,
      };
      // Get boundary of world element
      const worldDomRect = world.element.getBoundingClientRect();
      // Calculate and assign mid point for world
      world.mid = {
        x: worldDomRect.width / 2,
        y: worldDomRect.height / 2,
      };
      // Calculate and assign world position relative to the stage
      world.position = {
        x: 0,
        y: -(worldDomRect.height - stageDomRect.height),
      };
      // Calculate and define world boundry, starts from 0 point
      world.bounds = {
        x: -(worldDomRect.width - stageDomRect.width),
        y: -(worldDomRect.height - stageDomRect.height),
      };
      // align world to camera/stage mid point
      // world.element.style.transform = `translateX(${
      //   stage.mid.x - world.mid.x
      // }px) translateY(${stage.mid.y - world.mid.y}px)`;
      world.element.style.transform = `translateX(${world.position.x}px) translateY(${world.position.y}px)`;

      // Set mouse/touch events
      stage.element.addEventListener("mousedown", this.dragStart);

      stage.element.addEventListener("mousedown", () => {
        const widthScreen = window.innerWidth;
        if (widthScreen > 1024) {
          const items = document.querySelectorAll(".item");
          [].forEach.call(items, (item) => {
            item.style.pointerEvents = "none";
          });
        }
      });
      stage.element.addEventListener("mousemove", this.drag);
      stage.element.addEventListener("mouseup", this.dragEnd);
      stage.element.addEventListener("mouseout", this.dragEnd);

      stage.element.addEventListener("mouseout", () => {
        const widthScreen = window.innerWidth;
        if (widthScreen > 1024) {
          const items = document.querySelectorAll(".item");
          [].forEach.call(items, (item) => {
            item.style.pointerEvents = "auto";
          });
        }
      });
      stage.element.addEventListener("mouseup", () => {
        const widthScreen = window.innerWidth;
        if (widthScreen > 1024) {
          const items = document.querySelectorAll(".item");
          [].forEach.call(items, (item) => {
            item.style.pointerEvents = "auto";
          });
        }
      });

      stage.element.addEventListener("touchstart", this.dragStart);
      stage.element.addEventListener("touchmove", this.drag);
      stage.element.addEventListener("touchend", this.dragEnd);
      // Set up request animation frame function to perform "easing" logic
      this.listen();
    },
    drag(evt) {
      if (evt.type === "touchmove") {
        this.user.mouse.x = evt.touches[0].clientX - this.stage.offset.x;
        this.user.mouse.y = evt.touches[0].clientY - this.stage.offset.y;
      } else {
        this.user.mouse.x = evt.clientX;
        this.user.mouse.y = evt.clientY;
      }
    },
    dragStart(evt) {
      const app = this;
      const stage = this.stage;
      app.user.isDragging = true;
      app.stopListening = false;
      if (evt.type === "touchstart") {
        // Need to monitor to see if any issues if we comment this
        // document.addEventListener("touchmove", (e) => e.preventDefault(), {
        //   passive: false,
        // });
        app.user.last.x = evt.touches[0].clientX - stage.offset.x;
        app.user.mouse.x = evt.touches[0].clientX - stage.offset.x;
        app.user.last.y = evt.touches[0].clientY - stage.offset.y;
        app.user.mouse.y = evt.touches[0].clientY - stage.offset.y;
      } else {
        app.user.last.x = evt.clientX;
        app.user.last.y = evt.clientY;
      }
    },
    dragEnd(e) {
      this.user.isDragging = false;
      if (!this.listenerTimeout) {
        this.listenerTimeout = setTimeout(() => {
          this.stopListening = true;
          this.listenerTimeout = null;
          clearTimeout(this.listenerTimeout);
        }, 5000);
      }
      if (e.type === "touchend") {
        document.removeEventListener("touchmove", (e) => e.preventDefault());
      }
    },
    listen() {
      const app = this;
      const world = this.world;
      requestAnimationFrame(this.listen);
      if (!app.stopListening) {
        if (app.user.isDragging) {
          // logger.innerHTML = `last: ${app.user.last.x}, mouse: ${app.user.mouse.x}, world position x: ${world.position.x}, diff: ${(app.user.last.x - app.user.mouse.x)}`
          world.position.x -= app.user.last.x - app.user.mouse.x;
          app.user.velocity.x = Math.abs(app.user.last.x - app.user.mouse.x);
          app.user.direction.x = app.user.last.x > app.user.mouse.x;
          app.user.last.x = app.user.mouse.x;
          world.position.y -= app.user.last.y - app.user.mouse.y;
          app.user.velocity.y = Math.abs(app.user.last.y - app.user.mouse.y);
          app.user.direction.y = app.user.last.y > app.user.mouse.y;
          app.user.last.y = app.user.mouse.y;
          if (world.position.x > 0) {
            world.position.x = 0;
          }
          if (world.position.x < world.bounds.x) {
            world.position.x = world.bounds.x;
          }
          if (world.position.y > 0) {
            world.position.y = 0;
          }
          if (world.position.y < world.bounds.y) {
            world.position.y = world.bounds.y;
          }
        } else {
          if (!app.user.direction.x) {
            // left
            world.position.x += app.user.velocity.x;
          } else {
            // right
            world.position.x -= app.user.velocity.x;
          }
          if (!app.user.direction.y) {
            // left
            world.position.y += app.user.velocity.y;
          } else {
            // right
            world.position.y -= app.user.velocity.y;
          }
          if (world.position.x > 0) {
            world.position.x = 0;
          }
          if (world.position.x < world.bounds.x) {
            world.position.x = world.bounds.x;
          }
          if (world.position.y > 0) {
            world.position.y = 0;
          }
          if (world.position.y < world.bounds.y) {
            world.position.y = world.bounds.y;
          }
          app.user.velocity.x *= 0.85;
          app.user.velocity.y *= 0.85;
        }
        // logger.innerHTML = `last: ${app.user.last.x}, mouse: ${app.user.mouse.x}, world position x: ${world.position.x}, diff: ${(app.user.last.x - app.user.mouse.x)}`
        world.element.style.transform = `translateX(${world.position.x}px) translateY(${world.position.y}px)`;
      }
    },
    handleClickCountry(value, isPopupWelcome) {
      const dataJson = this.dataJson;
      const data = [
        "VIETNAM",
        "PHILIPPINES",
        "INDONESIA",
        "JAPAN",
        "FRANCE",
        "THAILAND",
        "SINGAPORE",
      ];

      const dataGameDifference = ["CHINA", "AUSTRALIA", "DUBAI", "MALAYSIA"];
      const dataGameMatchTheCard = ["INDIA", "USA", "KOREA"];
      const welcomeDialog = ["COMEBACK", "GREETINGS"];
      if (value && !_.includes(welcomeDialog, value)) {
        this.nameCountry = value;
      }
      // Call from greeting dialogs
      if (value === "") {
        if (this.fromHeader) {
          this.handleClickFadeScreenMobile();
          this.showLoginDialog = false;
          this.handleSetPlayingGame(false);
          this.nameCountry = "";
          this.fromHeader = false;
          return;
        }
        this.showLoginDialog = true;
      }
      this.actShowLoginDialog();
      this.setContry(value);
      if (!_.includes(welcomeDialog, value) && this.token) {
        this.setContry(this.nameCountry);
      }
      if (isPopupWelcome) {
        if (
          _.includes(data, this.nameCountry) ||
          _.includes(dataGameMatchTheCard, this.nameCountry)
        ) {
          this.getAttemptId({ gameId: dataJson[this.nameCountry].gameId });
        }
        if (
          _.includes(data, this.nameCountry) ||
          _.includes(dataGameDifference, this.nameCountry) ||
          _.includes(dataGameMatchTheCard, this.nameCountry)
        ) {
          this.handleSetPlayingGame(true);
        } else {
          this.showLoginDialog = false;
        }
      }
    },
    handleSetPlayingGame(value) {
      this.setPlayingGame(value);
    },
    actShowLoginDialog() {
      this.showLoginDialog = true;
    },
    toggleDialog(value) {
      this.showLoginDialog = value;
      this.replay();
      if (!value) {
        this.handleSetPlayingGame(false);
      }
    },

    handleHideScreenSwipe() {
      const screen = document.getElementById("instruction");
      if (screen) {
        screen.addEventListener("touchstart", () => {
          this.sreenInstruction = false;
        });
        screen.addEventListener("mousedown", () => {
          this.sreenInstruction = false;
        });
      }
    },
    handleClickFadeScreenMobile() {
      this.fadeOutSreenMobile = true;
      setTimeout(() => {
        this.hiddenSreenOnMobile = false;
        this.sreenInstruction = true;
      }, 1000);
      setTimeout(() => {
        this.init();
        this.$vuetify.goTo("#mountain", this.optionScroll);
      }, 1100);
    },
    handleScrollToMap() {
      this.$vuetify.goTo("#mountain", this.optionScroll);
    },
    detectMobile() {
      const widthScreen = window.innerWidth;
      if (widthScreen <= 1024) {
        this.hiddenSreenOnMobile = true; //Screen list contries on mobile
        this.fadeOutSreenMobile = false;
        // this.sreenInstruction = false; //Screen Instruction
      } else {
        this.hiddenSreenOnMobile = true; //Screen list contries on mobile
        this.fadeOutSreenMobile = true;
        // this.sreenInstruction = true; //Screen Instruction
      }
    },
  },
  destroyed: function () {
    window.removeEventListener("resize", () => {
      this.init;
    });
  },
};
</script>
<style lang="scss" scoped>
@import "./style.scss";
</style>