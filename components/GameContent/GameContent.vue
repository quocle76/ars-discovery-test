<template>
  <div class="game-content">
    <div v-show="!gameState.submitSuccess">
      <p class="country">{{ title }}</p>
      <p class="desc" v-html="desc"></p>
      <div class="image-question" v-if="type === '360'">
        <Pano :source="require(`~/assets/images/${src}`)"></Pano>
      </div>
    </div>
    <!-- Game -->
    <GTrail360
      :questions="answers"
      :type="type === gameType360"
      v-if="type === gameType360 || type === gameTypeTrivia"
      :correctAnswer="correctAnswer"
      :textLucky="textLucky"
      :title="title"
      @closeDialog="closeDialog"
    />

    <GameSpotDifferenceTimer
      v-if="type === gameTypeSpotDifference"
      :src="src"
      :textLucky="textLucky"
      :title="title"
      @closeDialog="closeDialog"
      :srcAfter="srcAfter"
      :gameId="gameId"
    />

    <GameMatchTheCard
      v-if="type === gameTypeMatchTheCard"
      :src="src"
      :textLucky="textLucky"
      :title="title"
      @closeDialog="closeDialog"
      :srcAfter="srcAfter"
      :gameId="gameId"
      :finalResult="finalResult"
      :gameType="gameType"
    />
  </div>
</template>
<script>
import GTrail360 from "~/components/GameContent/GameTypes/GTrail360.vue";
import GameSpotDifferenceTimer from "~/components/GameContent/GameSpotDifferenceTimer/GameSpotDifferenceTimer.vue";
import GameMatchTheCard from "~/components/GameContent/GameMatchTheCard/GameMatchTheCard.vue";
import { mapState } from "vuex";
import { Pano } from "vuejs-vr";
import {
  GAME_TYPE_360,
  GAME_TYPE_TRIVIA,
  GAME_TYPE_SPOT_DIFERENCE,
  GAME_TYPE_MATCH_THE_CARD,
} from "~/utils/constants";

export default {
  name: "GameContent",
  components: {
    GTrail360,
    GameSpotDifferenceTimer,
    Pano,
    GameMatchTheCard,
  },
  data() {
    return {
      gameType360: GAME_TYPE_360,
      gameTypeTrivia: GAME_TYPE_TRIVIA,
      gameTypeMatchTheCard: GAME_TYPE_MATCH_THE_CARD,
      gameTypeSpotDifference: GAME_TYPE_SPOT_DIFERENCE,
    };
  },
  computed: {
    ...mapState("country", ["gameState"]),
  },
  methods: {
    closeDialog() {
      this.$emit("toggleDialog", false);
    },
  },
  props: {
    type: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    desc: {
      type: String,
      default: "",
    },
    src: {
      type: String,
      default: "",
    },
    srcAfter: {
      type: String,
      default: "",
    },
    imgCorner: {
      type: String,
      default: "",
    },
    answers: {
      type: Array,
      default: [],
    },
    finalResult: {
      type: Array,
      default: [],
    },
    correctAnswer: {
      type: String,
      default: "",
    },
    textLucky: {
      type: String,
      default: "",
    },
    toggleDialog: {
      type: Function,
      default: (_) => _,
    },
    gameId: {
      type: String,
      default: "",
    },
    gameType: {
      type: String,
      default: "",
    },
  },
};
</script>
<style lang="scss" scoped>
@import "GameContent";
</style>