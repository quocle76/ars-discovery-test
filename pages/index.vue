<template>

  <div id="home-page">
    <base-sticky-button
      variant="point"
      :score=0>
    </base-sticky-button>
    <base-sticky-button
      variant="nft"
      :score=10>
    </base-sticky-button>
    <div class="countries">
      <h1>AROUND THE WORLD</h1>
      <div class="text-header">
        <img :src="require('~/assets/images/header.png')" alt="" />
      </div>
      <v-card-text class="description">
        <p>
          With our 14 brands and 200+ ASR properties now connected around the
          globe, there are infinitely more experiences for travellers to
          discover.
        </p>
        <p>
          Select a country you’d like to explore and stand to win ASR points and
          exclusive NFT prizes.
        </p>
      </v-card-text>

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

      <!-- Car -->
      <div class="car">
        <img :src="require('~/assets/images/car.png')" class="car" />
      </div>

      <!-- Countries -->
      <div class="collect-contries">
        <img :src="require('~/assets/images/mountain.png')" class="mountain" />

        <div class="ballons">
          <img :src="require('~/assets/images/balloon-left.png')" />
          <img :src="require('~/assets/images/ballon-right.png')" />
        </div>

        <div class="singapore item" @click="handleClickCountry('SINGAPORE')">
          <div class="img-singapore"></div>
          <h3>SINGAPORE</h3>
          <div class="img-bear">
            <img :src="require('~/assets/images/bear.png')" class="" />
            <div class="circle">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <div class="indonesia item" @click="handleClickCountry('INDONESIA')">
          <div class="img-indonesia"></div>

          <h3>INDONESIA</h3>
          <div class="img-bear">
            <img :src="require('~/assets/images/bear.png')" class="" />
            <div class="circle">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <div class="china item" @click="handleClickCountry('CHINA')">
          <div class="img-china"></div>
          <h3>CHINA</h3>
          <div class="img-bear">
            <img :src="require('~/assets/images/bear-flip.png')" class="" />
            <div class="circle">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <div class="india item" @click="handleClickCountry('INDIA')">
          <div class="img-india"></div>
          <h3>INDIA</h3>
          <div class="img-bear">
            <img :src="require('~/assets/images/bear.png')" class="" />
            <div class="circle">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <div class="vietnam item" @click="handleClickCountry('VIETNAM')">
          <div class="img-vietnam"></div>
          <h3>VIETNAM</h3>
          <div class="img-bear">
            <img :src="require('~/assets/images/bear-flip.png')" class="" />
            <div class="circle">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <div class="malaysia item" @click="handleClickCountry('MALAYSIA')">
          <div class="img-malaysia"></div>
          <h3>MALAYSIA</h3>
          <div class="img-bear">
            <img :src="require('~/assets/images/bear-flip.png')" class="" />
            <div class="circle">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <div class="usa item" @click="handleClickCountry('USA')">
          <div class="img-usa"></div>
          <h3>USA</h3>
          <div class="img-bear">
            <img :src="require('~/assets/images/bear.png')" class="" />
            <div class="circle">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <div class="korea item" @click="handleClickCountry('KOREA')">
          <div class="img-korea"></div>
          <h3>KOREA</h3>
          <div class="img-bear">
            <img :src="require('~/assets/images/bear-flip.png')" class="" />
            <div class="circle">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <div class="thailand item" @click="handleClickCountry('THAILAND')">
          <div class="img-thailand"></div>
          <h3>THAILAND</h3>
          <div class="img-bear">
            <img :src="require('~/assets/images/bear.png')" class="" />
            <div class="circle">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <div class="philippines item" @click="handleClickCountry('PHILIPPINES')">
          <div class="img-philippines"></div>
          <h3>PHILIPPINES</h3>
          <div class="img-bear">
            <img :src="require('~/assets/images/bear.png')" class="" />
            <div class="circle">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <div class="japan item" @click="handleClickCountry('JAPAN')">
          <div class="img-japan"></div>
          <h3>JAPAN</h3>
          <div class="img-bear">
            <img :src="require('~/assets/images/bear.png')" class="" />
            <div class="circle">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <div class="france item" @click="handleClickCountry('FRANCE')">
          <div class="img-france"></div>
          <h3>FRANCE</h3>
          <div class="img-bear">
            <img :src="require('~/assets/images/bear.png')" class="" />
            <div class="circle">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <div class="australia item" @click="handleClickCountry('AUSTRALIA')">
          <div class="img-australia"></div>
          <h3>AUSTRALIA</h3>
          <div class="img-bear">
            <img :src="require('~/assets/images/bear-flip.png')" class="" />
            <div class="circle">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <div class="dubai item" @click="handleClickCountry('DUBAI')">
          <div class="img-dubai"></div>
          <h3>DUBAI</h3>
          <div class="img-bear">
            <img :src="require('~/assets/images/bear.png')" class="" />
            <div class="circle">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <LoginDialog :key="showLoginDialog" :show="showLoginDialog" @toggleDialog="toggleDialog" :token="token" @handleClickCountry="handleClickCountry">
      <div v-if="nameCountry !== ''" :key="nameCountry">
        <div class="title-dialog">{{dataJson[`${nameCountry}`].title}}</div>
        <div class="description-dialog">{{dataJson[`${nameCountry}`].description}}</div>
        <div class="button-label mb-37 mb-mb-0">
          <Button @click="handleClickCountry(nameCountry === 'GREETINGS' ? gameCountry : gameCountry)">{{dataJson[`${nameCountry}`].btnText}}</Button>
        </div>
      </div>
    </LoginDialog>
    <!-- <BaseDialog v-if="nameCountry !== ''" :backgroundImage="require(`~/static/images/${dataJson[`${nameCountry}`].url}`)" @click="actCloseDialog" :showDialog="showDialog">
      
    </BaseDialog> -->
    <div class="screen-auto-hidden-mobile">
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
          />
          <img
            :src="require('~/assets/images/border-left-mobile.svg')"
            alt=""
          />
          <img
            :src="require('~/assets/images/border-left-mobile.svg')"
            alt=""
          />
          <img
            :src="require('~/assets/images/border-left-mobile.svg')"
            alt=""
          />
        </div>
      </div>
      <h2>AROUND THE WORLD</h2>
      <div class="text-header-mobile">
        <img :src="require('~/assets/images/header.png')" alt="" />
      </div>
      <v-card-text class="description-mobile">
        <p>
          With our 14 brands and 200+ ASR properties now connected around the
          globe, there are infinitely more experiences for travellers to
          discover.
        </p>
        <p>
          Select a country you’d like to explore and stand to win ASR points and
          exclusive NFT prizes.
        </p>
      </v-card-text>
    </div>
  </div>
</template>

<script>
import LoginDialog from '~/components/LoginDialog/LoginDialog.vue';
import BaseDialog from '~/components/BaseDialog/BaseDialog.vue';
import BaseInput from '~/components/BaseInput/BaseInput.vue';
import Button from '~/components/BaseButton/BaseButton.vue';
import data from '~/assets/mockup/data.json'
import LocalStorageUtil from "@/utils/local-storage_util";
import _ from "lodash";
import { mapState, mapActions } from "vuex";
import {
  ACTION_ADD_COUNTRY,
  HOME_MODULE_NAME
} from "~/utils/constants";
export default {
  name: "HomePage",
  components: {
    BaseDialog,
    BaseInput,
    Button,
    LoginDialog
  },
  head: {
    title: "Home",
  },
  data() {
    return {
      showLoginDialog: false,
      showDialog: false,
      dataJson: data,
      nameCountry: '',
      prevDataNameCountry: '',
      stage: {},
      world: {},
      worldChoose: '',
      stopListening: false,
      listenerTimeout: null,
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
    };
  },
  mounted() {
    if (process.client) {
      this.init();
      const that = this;
      window.addEventListener("resize", () => {
        that.init();
      });
    }
  },
  computed: {
    ...mapState('auth', {
      token: state => state.token
    }),
    ...mapState(HOME_MODULE_NAME, ['gameCountry']),
  },
  methods: {
    ...mapActions(HOME_MODULE_NAME, ["setContry"]),
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
        x: stage.mid.x - world.mid.x,
        y: stage.mid.y - world.mid.y,
      };

      // Calculate and define world boundry, starts from 0 point
      world.bounds = {
        x: -(worldDomRect.width - stageDomRect.width),
        y: -(worldDomRect.height - stageDomRect.height),
      };

      // align world to camera/stage mid point
      world.element.style.transform = `translateX(${
        stage.mid.x - world.mid.x
      }px) translateY(${stage.mid.y - world.mid.y}px)`;

      // Set mouse/touch events
      stage.element.addEventListener("mousedown", this.dragStart);
      stage.element.addEventListener("mousemove", this.drag);
      stage.element.addEventListener("mouseup", this.dragEnd);
      stage.element.addEventListener("mouseout", this.dragEnd);

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
        document.addEventListener("touchmove", (e) => e.preventDefault(), {
          passive: false,
        });
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
    handleClickCountry(value) {
     
      this.nameCountry = value;
      if (value === '') {
        this.showLoginDialog = true;
      }
      this.actShowLoginDialog();
      if (value !== 'GREETINGS') {
         this.setContry(value); // map action
        this.nameCountry = this.gameCountry;
      }
    },
    actShowLoginDialog () {
      this.showLoginDialog = true
    },
     toggleDialog (value) {
      this.showLoginDialog = value;
    },
  },
  destroyed: function () {
    window.removeEventListener("resize", () => {
      this.init();
    });
  },
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
