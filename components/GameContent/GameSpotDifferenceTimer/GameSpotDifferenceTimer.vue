<template>
  <div id="difference-timmer" class="difference-timmer">
    <!-- Form Game -->
    <div v-if="!gameState.submitSuccess">
      <div class="difference-timmer__content">
        <div
          v-if="showArea"
          class="difference-timmer__area"
          :class="gameCountry.toLowerCase()"
        >
          <span
            v-for="i in numberSpot"
            :id="'spot-' + i"
            :key="i"
            @click="handleShowSpot(i)"
          ></span>
        </div>
        <img
          :src="require(`~/assets/images/${srcBefore}`)"
          alt=""
          id="img__blur"
          :class="[{ 'fade-out': fadeOut }]"
        />
        <!-- <div
          v-show="showCountDow"
          class="difference-timmer__content--countdown"
        >
          <span id="number-countDown">3</span>
        </div> -->
        <v-progress-linear
          v-model="valueDeterminate"
          height="10"
          v-show="showInProgress"
        ></v-progress-linear>
        <Button
          v-show="btnStart"
          :customClass="`btnStartTimer`"
          type="button"
          @click="handleStart"
          >{{ textBntStart }}</Button
        >
      </div>
      <p v-if="error" class="difference-timmer__typeErr">
        {{ textErr }}
      </p>
      <div
        class="btnOnMobile"
        :class="[{ isDisable: isDisable }, gameCountry.toLowerCase()]"
      >
        <Button
          :customClass="`btnStartTimer`"
          type="button"
          @click="handleStart"
          >{{ textBntStart }}</Button
        >
      </div>
    </div>

    <!-- Plus Chance -->
    <FormPlusChanceAndPoint
      :gameState="gameState"
      :title="title"
      @closeDialog="clickHandle"
      @handleReplay="handleReplay"
      :textLucky="textLucky"
      :gameCountry="gameCountry"
    />
  </div>
</template>
<script>
import Button from "~/components/BaseButton/BaseButton.vue";
import { mapState, mapActions } from "vuex";
import FormPlusChanceAndPoint from "~/components/FormPlusChanceAndPoint/FormPlusChanceAndPoint.vue";

export default {
  data() {
    return {
      error: false,
      answers: 0,
      submitSuccess: false,
      btnStart: true,
      // showCountDow: false,
      countDown: 3,
      interValTimeClickStart: "",
      interValTimeProgress: (_) => _,
      valueDeterminate: 0,
      timeProgress: 30,
      showInProgress: false,
      srcBefore: this.src,
      isDisable: false,
      clearTimeout: (_) => _,
      numberSpot: 3,
      showArea: false,
      textErr: "Time's up. Please try again.",
      textBntStart: "Start Timer",
      fadeOut: false,
    };
  },
  components: {
    Button,
    FormPlusChanceAndPoint,
  },
  props: {
    textLucky: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    closeDialog: {
      type: Function,
      default: (_) => _,
    },
    src: {
      type: String,
      default: "",
    },
    srcAfter: {
      type: String,
      default: "",
    },
    gameId: {
      type: String,
      default: "",
    },
  },
  computed: {
    ...mapState("country", ["gameState", "gameCountry", "attemptId"]),
  },
  methods: {
    ...mapActions("country", [
      "submitAnswer",
      "replay",
      "getAttemptId",
      "finishAttempt",
    ]),
    handleStart() {
      this.error = false;
      this.btnStart = false;
      // this.showCountDow = true;
      // this.fadeOut = true;
      this.srcBefore = this.srcAfter; //change images
      // setTimeout(() => {
      //   this.fadeOut = false;
      // }, 500);

      this.handleProgress();
      let timeCountDown = this.countDown;
      this.answers = 0;
      this.isDisable = true; // disable btn on mobile
      this.showArea = true; // show area
      //Area dispatch Start
      const getGameId = this.gameId;
      this.getAttemptId({ gameId: getGameId });
      this.showInProgress = true;

      // this.interValTimeClickStart = setInterval(() => {
      //   if (timeCountDown <= 1) {
      //     clearInterval(this.interValTimeClickStart);
      //     // this.showCountDow = false;
      //     this.showInProgress = true;
      //     timeCountDown = this.countDown;
      //     return true;
      //   } else {
      //     timeCountDown -= 1;
      //     document.getElementById("number-countDown").innerHTML = timeCountDown;
      //   }
      // }, 1000);
    },
    handleTimesOut() {
      this.showArea = false; // hidden area
      this.btnStart = true;
      this.showInProgress = false;
      this.valueDeterminate = 0;
      // document.getElementById("number-countDown").innerHTML = this.countDown;
      this.srcBefore = this.src; // revert image
      this.isDisable = false;

      if (this.answers < 3) {
        this.error = true;
      } else {
        this.handleSubmit();
        //Area dispatch Submit Success
        this.finishAttempt({ attemptId: this.attemptId });
      }
    },
    handleProgress() {
      let timeCompare = 0;
      this.interValTimeProgress = setInterval(() => {
        if (timeCompare < this.timeProgress) {
          timeCompare += 1;
          this.valueDeterminate += 100 / this.timeProgress;
        } else {
          //Times out 30s
          clearInterval(this.interValTimeProgress);
          this.handleTimesOut();
        }
      }, 1000);
    },
    handleShowSpot(i) {
      document.getElementById("spot-" + i).style.opacity = "1";
      this.answers += 1;
      if (this.answers >= 3) {
        setTimeout(() => {
          this.handleSubmit();
          this.finishAttempt({ attemptId: this.attemptId });
          clearInterval(this.interValTimeProgress);
          this.handleTimesOut();
        }, 1000);
      }
    },
    handleSubmit() {
      this.submitAnswer();
    },
    clickHandle() {
      this.$emit("closeDialog");
    },
    handleReplay() {
      this.replay();
    },
  },
  destroyed: function () {
    clearTimeout(this.clearTimeout);
  },
};
</script>
<style lang="scss" scoped>
@import "./GameSpotDifferenceTimer.scss";
</style>