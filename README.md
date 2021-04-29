# sass-vars-convertor

Sass 变量转换为 JSON 的转换器。

### 安装

```bash
npm i sass-vars-convertor

# 或

yarn add sass-vars-convertor
```

### 用法

```javascript
import { promises as fs } from 'fs';
import sassVarsConvertor from 'get-sass-vars';

(async () => {
  const cssText = await fs.readFile('./sass-vars.scss', 'utf-8');
  const json = await sassVarsConvertor(cssText, { camelize: true });
  
  console.log(json);
  
  /* {
	      "colorPrimary": "#2589ff",
        "colorWhite": "#fff",
        "colorBlack": "#000",
        "colorPrimaryLight1": '#3b95ff",
        "colorPrimaryLight2": "#51a1ff”,
        "colorPrimaryLight3": "#66acff”,
        "colorPrimaryLight4": "#7cb8ff”,
        "colorPrimaryLight5": "#92c4ff”,
        "colorPrimaryLight6": "#a8d0ff”,
        "colorPrimaryLight7": "#bedcff”,
        "colorPrimaryLight8": "#d3e7ff”,
        "colorPrimaryLight9": "#e9f3ff”,
	} */
})();
```

sass-vars.scss

```scss
$--color-primary: rgba(37, 137, 255) !default; /* #2589ff */
/// color|1|Background Color|4
$--color-white: #ffffff !default;
/// color|1|Background Color|4
$--color-black: #000000 !default;
$--color-primary-light-1: mix($--color-white, $--color-primary, 10%) !default; /* 53a8ff */
$--color-primary-light-2: mix($--color-white, $--color-primary, 20%) !default; /* 66b1ff */
$--color-primary-light-3: mix($--color-white, $--color-primary, 30%) !default; /* 79bbff */
$--color-primary-light-4: mix($--color-white, $--color-primary, 40%) !default; /* 8cc5ff */
$--color-primary-light-5: mix($--color-white, $--color-primary, 50%) !default; /* a0cfff */
$--color-primary-light-6: mix($--color-white, $--color-primary, 60%) !default; /* b3d8ff */
$--color-primary-light-7: mix($--color-white, $--color-primary, 70%) !default; /* c6e2ff */
$--color-primary-light-8: mix($--color-white, $--color-primary, 80%) !default; /* d9ecff */
$--color-primary-light-9: mix($--color-white, $--color-primary, 90%) !default; /* ecf5ff */
```

------

### Option

*cssTextContent*

type:  `string` 

Sass 字符串

*options*

type: `ISassVarsConvertorOption | undefined`


| name          | Type                                              | desc             |
| ------------- | ------------------------------------------------- | ---------------- |
| `camelize`    | `boolean`                                         | 是否开启驼峰命名 |
| `sassOptions` | [sass.Option](https://www.npmjs.com/package/sass) | sass编译配置     |

------

## License

MIT © michaely