import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { imgList } from "../components/ExpandingCards/imgList";

export const useExpandingCardsStore = defineStore("expandingCards", () => {
  /**
   * フォーカスする画像のタイトルを格納するstate
   * 初期値として表示画像を管理する配列の先頭を指定する
   */
  const activeImage = ref(imgList[0].title);

  const changeActiveImage = (imageTitle) => {
    activeImage.value = imageTitle;
  };

  return {activeImage, changeActiveImage};
});
