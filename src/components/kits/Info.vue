<script setup lang="ts">
import {ref} from "vue";
import TmiModal from "./Modal.vue"

const emit = defineEmits(["mouseenter"])

const showModal = ref(false)
</script>

<template>
  <div class="info-btn-container">
    <div class="info-btn"
         @mouseenter="emit('mouseenter')"
         @click="showModal = true"
    >
      <i class="info-btn-inner">言</i>
    </div>
  </div>
  <tmi-modal v-model:show="showModal" title="中国传统乐器·前言">
    <div class="info-content">
      <p>中国传统音乐文化历史悠久，在漫长的历史中，发展出一系列富有鲜明民族特色的乐器。</p>
      <p>西周时将当时的乐器按制作材料，分为 <i>金、石、丝、竹、匏、土、革、木</i> 八类。这是中国历史上最早的乐器科学分类法</p>
      <p>「书•舜典」三载，四海遏密八音。孔传八音金、石、丝、竹、匏、土、革、木。</p>
      <p>
        「周礼•春官•大师」皆播之以八音金、石、土、革、丝、木、匏、竹。郑玄注金，钟鎛也。石，磬也。土，埙也。革，鼓鼗也。丝，琴瑟也。木，柷敔也。匏，笙也。竹，管箫也。</p>
      <p>「宋书•谢灵运传论」夫五色相宣，八音协畅，由乎玄黄律吕，各适物宜。 宋 苏轼 「贺韩丞相启」付八音於 师旷
        ，孰敢争能。「三字经」匏土革，木石金，与丝竹，乃八音。</p>
      <p>
        乐器的使用在古代有着严格的规定。这也就形成了出现自夏商周时期在中华文明发展史上产生了重大而深远的影响了数千年的礼乐文明，礼乐制度的存在也奠定了中国传统文化的基调。</p>
      <p><b>金</b>金属制(青铜为主)的打击乐器,包括编钟、特钟、铙等打击乐。当时官方认可的最高雅的声音，被称为金石之声，是指编钟、磬这类清脆明亮的音响。
      </p>
      <p><b>石</b>玉石器制打击乐器,包括编磬、特磬等打击乐。</p>
      <p><b>丝</b>用梧桐木等木质材料制成的弹拨乐器。「诗经」中已有琴瑟的记载窈窕淑女，琴瑟友之。，古作五弦，周初增为七弦。包括古琴、古瑟、古筝等弦乐，现在所说的丝竹就是丝音和竹音的简称。
      </p>
      <p><b>竹</b>竹制的吹奏簧管乐器。单管、竖吹。古代箫多为竹制，也有玉制、瓷制的。用于独奏、琴笛合奏或演奏传统竹乐曲。</p>
      <p><b>匏</b>竹制的吹奏簧管乐器。甲骨文中有和字，即是小笙，说明其起源之久远。目前所知年代最早的实物是曾侯乙墓出土的笙，竹管十四根，竹制簧片。
      </p>
      <p><b>土</b>土烧制的陶制吹奏乐器。战国时期赵国史书「世本」载埙，暴辛公所造。
        「拾遗记」载疱羲灼土为埙。这类传说虽不可信，但也说明埙的历史很久远。浙江余姚河姆渡遗址发现有一个吹孔的陶埙，距今约七千余年，是目前最早的实物。
      </p>
      <p><b>革</b>指皮革制成的鼓类打击乐器。「诗经•关雉」中记载窈窕淑女，钟革乐之。
        「吕氏春秋•侈乐」载为木革之声若雷，为金石之声责若霆。其中的革、木革，都是形容鼓的音乐效果。</p>
      <p><b>木</b>指木制的打击乐器。包括柷、敔等柷，形同木升，上宽下窄，用木棒撞击其内壁发声，以示乐曲的起始，古代雅乐开始时击之；敔，状如伏虎，背面刻有锯齿，演奏时用一支一端破成细条的竹筒，逆刮虎背的锯齿，以示乐曲的终结，古代雅乐结束时击奏。
      </p>
    </div>
  </tmi-modal>
</template>

<style scoped lang="scss">
.info-btn-container {

  .info-btn {
    width: 24px;
    height: 24px;
    border-radius: 20px;
    background: $primary-color;
    color: $color-light;
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all ease-in .3s;
    cursor: pointer;
    overflow: hidden;

    &:hover {
      box-shadow: inset 0 0 0 2px $primary-color;
      background: transparent;
      color: $primary-color;
      font-size: 16px;
      transform: scale(1.2);
    }
  }
}

.info-content {
  display: flex;
  padding: 24px 0;
  gap: 24px;
  flex-direction: column;
  line-height: 2;
  font-size: 20px;
  color: $primary-color;

  p {
    i {
      font-weight: 800;
      background: $color-light;
      border-radius: 8px;
      padding: 8px 4px;
    }

    b {
      font-weight: 800;
      color: $color-light;
      background: $primary-color;
      border-radius: 50%;
      justify-content: center;
      align-items: center;
      padding: 10px 8px;
      margin: 0 8px 8px 8px;
    }
  }
}

</style>