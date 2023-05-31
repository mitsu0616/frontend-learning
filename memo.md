# FontAwesome の導入

## パッケージインストール
```
npm i --save @fortawesome/fontawesome-svg-core
npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/vue-fontawesome@latest-3
```

## main.js
```js
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(fas);
app.component("fa", FontAwesomeIcon);
```

## 使用するフォントを探す

https://fontawesome.com/search