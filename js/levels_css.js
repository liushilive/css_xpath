var levels_css = [
  {
    helpTitle: "按类型选择元素",
    selectorName: "类型选择器",
    doThis: "选择盘子",
    selector: "plate",
    syntax: "A",
    help: "选择 <strong>A</strong> 类型的所有元素。 类型是指标签的类型， 所以 <tag>div</tag>, <tag>p</tag> 以及 <tag>ul</tag> 都是不同的元素类型。",
    examples: [
      '<strong>div</strong> 选择所有 <tag>div</tag> 元素。',
      '<strong>p</strong> 选择所有 <tag>p</tag> 元素。',
    ],
    boardMarkup: `
    <plate/>
    <plate/>
    `
  },
  {
    doThis: "选择便当盒",
    selector: "bento",
    syntax: "A",
    helpTitle: "按类型选择元素",
    selectorName: "类型选择器",
    help: "选择所有 <strong>A</strong> 类型的元素。 类型是指标签的类型。所以 <tag>div</tag>, <tag>p</tag> 以及 <tag>ul</tag> 都是不同的元素类型。",
    examples: [
      '<strong>div</strong> 选择所有 <tag>div</tag> 元素。',
      '<strong>p</strong> 选择所有 <tag>p</tag> 元素。',
    ],
    boardMarkup: `
    <bento/>
    <plate/>
    <bento/>
    `
  },
  {
    doThis: "选择特效盘子",
    selector: "#fancy",
    selectorName: "ID选择器",
    helpTitle: "选择带有ID的元素",
    syntax: "#id",
    help: '选择具有特定 <strong>id</strong> 的元素。你也可以将ID选择器与类型选择器进行组合。',
    examples: [
      '<strong>#cool</strong> 选择所有 <strong>id="cool"</strong> 的元素',
      '<strong>ul#long</strong> 选择 <tag>ul id="long"</tag> 元素'
    ],
    boardMarkup: `
    <plate id="fancy"/>
    <plate/>
    <bento/>
    `
  },
  {
    helpTitle: "在一个元素中选择另一个元素",
    selectorName: "子选择器",
    doThis: "选择盘子里的苹果",
    selector: "plate apple",
    syntax: "A&nbsp;&nbsp;B",
    help: "选择所有 <strong>A</strong> 内的 <strong>B</strong>元素。 <strong>B</strong> 被称为子元素，因为它在另一个元素中。",
    examples: [
      '<strong>p&nbsp;&nbsp;strong</strong> 选择所有 <tag>p</tag> 内的 <tag>strong</tag> 元素',
      '<strong>#fancy&nbsp;&nbsp;span</strong> 选择 <strong>id="fancy"</strong> 内的 <tag>span</tag> 元素',
    ],
    boardMarkup: `
    <bento/>
    <plate>
      <apple/>
    </plate>
    <apple/>
    `
  },
  {
    doThis: "选择特效盘子上的泡菜",
    selector: "#fancy pickle",
    helpTitle: "组合子选择器和ID选择器",
    syntax: "#id&nbsp;&nbsp;A",
    help: '您可以将任何选择器与子选择器组合',
    examples: [
      '<strong>#cool&nbsp;span</strong> 选择所有 <strong>id="cool"</strong> 元素内的 <tag>span</tag> 元素。'
    ],
    boardMarkup: `
    <bento>
    <orange/>
    </bento>
    <plate id="fancy">
      <pickle/>
    </plate>
    <plate>
      <pickle/>
    </plate>
    `
  },
  {
    doThis: "选择小苹果",
    selector: ".small",
    selectorName: "类选择器",
    helpTitle: "按类别选择元素",
    syntax: ".classname",
    help: '类选择器使用该类属性选择所有元素。元素只能有一个ID，但是很多类。',
    examples: [
      '<strong>.neato</strong> 选择所有 <strong>class="neato"</strong> 元素。'
    ],
    boardMarkup: `
    <apple/>
    <apple class="small"/>
    <plate>
      <apple class="small"/>
    </plate>
    <plate/>
    `
  },
  {
    doThis: "选择小橘子",
    selector: "orange.small",
    helpTitle: "组合类选择器",
    syntax: "A.className",
    help: '您可以将类选择器与其他选择器组合，如类型选择器。',
    examples: [
      '<strong>ul.important</strong> 选择具有 <strong>class="important"</strong> 的所有 <tag>ul</tag> 元素',
      '<strong>#big.wide</strong> 选择同时拥有 <strong>id="big"</strong> 与 <strong>class="wide"</strong> 属性的所有元素'
    ],
    boardMarkup: `
    <apple/>
    <apple class="small"/>
    <bento>
      <orange class="small"/>
    </bento>
    <plate>
      <orange/>
    </plate>
    <plate>
      <orange class="small"/>
    </plate>`
  },
  {
    doThis: "选择便当盒上的小橘子",
    selector: "bento orange.small",
    syntax: "全身心投入",
    helpTitle: "你能行的...",
    help: '结合你在过去几个层面学到的东西来解决这个问题！',
    boardMarkup: `
    <bento>
      <orange/>
    </bento>
    <orange class="small"/>
    <bento>
      <orange class="small"/>
    </bento>
    <bento>
      <apple class="small"/>
    </bento>
    <bento>
      <orange class="small"/>
    </bento>
    `
  },
  {
    doThis: "选择所有的便当盒与盘子",
    selector: "plate,bento",
    selectorName: "逗号组合",
    helpTitle: "结合,选择器,使用……逗号!",
    syntax: "A, B",
    help: '选择所有 <strong>A</strong> 和 <strong>B</strong> 元素。 您可以通过这种方式组合任何选择器，您可以指定两个以上。',
    examples: [
      '<strong>p, .fun</strong> 选择所有 <tag>p</tag> 元素以及 <strong>class="fun"</strong> 元素',
      '<strong>a, p, div</strong> 选择所有 <tag>a</tag>, <tag>p</tag> 与 <tag>div</tag> 元素'
    ],
    boardMarkup: `
    <pickle class="small"/>
    <pickle/>
    <plate>
      <pickle/>
    </plate>
    <bento>
      <pickle/>
    </bento>
    <plate>
      <pickle/>
    </plate>
    <pickle/>
    <pickle class="small"/>
    `
  },
  {
    doThis: "选择所有的东西！",
    selector: "*",
    selectorName: "通用选择器",
    helpTitle: "你可以选择一切！",
    syntax: "*",
    help: '您可以使用通用选择器选择所有元素！',
    examples: [
      '<strong>p *</strong> 选择 <tag>p</tag> 元素中的所有元素。',
    ],
    boardMarkup: `
    <apple/>
    <plate>
      <orange class="small" />
    </plate>
    <bento/>
    <bento>
      <orange/>
    </bento>
    <plate id="fancy"/>
    `
  },
  {
    doThis: "选择盘子上的所有东西",
    selector: "plate *",
    syntax: "A&nbsp;&nbsp;*",
    helpTitle: "组合通用选择器",
    help: '选择 <strong>A</strong> 中所有元素',
    examples: [
      '<strong>p *</strong> 选择 <tag>p</tag> 中所有元素。',
      '<strong>ul.fancy *</strong> 选择 <tag>ul class="fancy"</tag> 中所有元素。'
    ],
    boardMarkup: `
    <plate id="fancy">
      <orange class="small"/>
    </plate>
    <plate>
      <pickle/>
    </plate>
    <apple class="small"/>
    <plate>
      <apple/>
    </plate>`
  },
  {
    doThis: "选择盘子旁边的每个苹果",
    selector: "plate + apple",
    helpTitle: "选择直接跟随另一个元素的元素",
    selectorName: "相邻的兄弟选择器",
    syntax: "A + B",
    help: "选择直接跟随 <strong>A</strong> 的所有 <strong>B</strong>元素。 跟随彼此的元素称为兄弟姐妹。他们在同一水平或深度。<br/><br/>在该级别的HTML标记中，具有相同缩进的元素是兄弟姐妹。",
    examples: [
      '<strong>p + .intro</strong> 选择直接跟随 <tag>p</tag> 的所有 <strong>class="intro"</strong> 元素',
      '<strong>div + a</strong> 选择直接跟随 <tag>div</tag> 的所有 <tag>a</tag> 元素'
    ],
    boardMarkup: `
    <bento>
      <apple class="small"/>
    </bento>
    <plate />
    <apple class="small"/>
    <plate />
    <apple/>
    <apple class="small"/>
    <apple class="small"/>
    `
  },
  {
    selectorName: "一般同胞选择器",
    helpTitle: "选择跟随另一个元素的元素",
    syntax: "A ~ B",
    doThis: "选择便当盒旁边的泡菜",
    selector: "bento ~ pickle",
    help: "您可以选择跟随它的元素的所有兄弟。这就像相邻选择器（A + B），除了它获得以下所有元素，而不是一个。",
    examples: [
      '<strong>A ~ B</strong> 选择与 <strong>A</strong> 相邻的，所有的 <strong>B</strong> 元素'
    ],
    boardMarkup: `
    <pickle/>
    <bento>
      <orange class="small"/>
    </bento>
    <pickle class="small"/>
    <pickle/>
    <plate>
      <pickle/>
    </plate>
    <plate>
      <pickle class="small"/>
    </plate>
    `
  },
  {
    selectorName: "孩子选择器",
    syntax: "A > B&nbsp;",
    doThis: "直接在盘子上选择苹果",
    selector: "plate > apple",
    helpTitle: "选择元素的直接子元素",
    help: "您可以选择其他元素的直接子元素。子元素是直接嵌套在另一个元素中的任何元素。<br><br>嵌套深入的元素称为后代元素。",
    examples: [
      '<strong>A > B</strong> 选择 <strong>A</strong> 元素的直接孩子 <strong>B</strong> 元素'
    ],
    boardMarkup: `
    <plate>
      <bento>
        <apple/>
      </bento>
    </plate>
    <plate>
      <apple/>
    </plate>
    <plate/>
    <apple/>
    <apple class="small"/>
    `
  },
  {
    selectorName: "第一个孩子的选择器,",
    helpTitle: "选择另一个元素内的第一个子元素",
    doThis: "选择顶部的橘子",
    selector: "plate :first-child",
    syntax: ":first-child",

    help: "您可以选择第一个子元素。子元素是直接嵌套在另一个元素中的任何元素。您可以将此伪选择器与其他选择器组合。",
    examples: [
      '<strong>:first-child</strong> 选择所有第一个子元素。',
      '<strong>p:first-child</strong> 选择第一个 <tag>p</tag> 元素。',
      '<strong>div p:first-child</strong> 选择 <tag>div</tag> 下的第一个 <tag>p</tag> 元素。'
    ],
    boardMarkup: `
    <bento/>
    <plate />
    <plate>
      <orange />
      <orange />
      <orange />
    </plate>
    <pickle class="small" />
    `
  },
  {
    selectorName: "独生子伪选择器",
    helpTitle: "选择一个元素，它是另一个元素中唯一的元素。",
    doThis: "选择盘子里的苹果和泡菜",
    selector: "plate :only-child",
    syntax: ":only-child",
    help: "您可以选择任何元素，这是另一个元素中唯一的元素。",
    examples: [
      '<strong>span:only-child</strong> 选择作为其他元素的唯一子元素的 <tag>span</tag> 元素。',
      '<strong>ul li:only-child</strong> 选择在 <tag>ul</tag> 中唯一的 <tag>li</tag> 元素。'
    ],
    boardMarkup: `
    <plate>
      <apple/>
    </plate>
    <plate>
      <pickle />
    </plate>
    <bento>
      <pickle />
    </bento>
    <plate>
      <orange class="small"/>
      <orange/>
    </plate>
    <pickle class="small"/>
    `
  },
  {
    selectorName: "最后一个孩子伪选择器",
    helpTitle: "选择另一个元素内的最后一个元素",
    doThis: "选择小苹果和泡菜",
    selector: ".small:last-child",
    syntax: ":last-child",
    help: "您可以使用此选择器选择作为另一个元素内的最后一个子元素的元素。 <br><br>专业提示 &rarr; 如果只有一个元素，该元素将计为第一个孩子，唯一的孩子和最后一个孩子！",
    examples: [
      '<strong>:last-child</strong> 选择所有最后一个子元素。',
      '<strong>span:last-child</strong> 选择所有最后一个 <tag>span</tag> 元素。',
      '<strong>ul li:last-child</strong> 选择任何 <tag>ul</tag> 中的最后一个 <tag>li</tag> 元素。'
    ],
    boardMarkup: `
    <plate id="fancy">
      <apple class="small"/>
    </plate>
    <plate/>
    <plate>
      <orange class="small"/>
      <orange>
    </plate>
    <pickle class="small"/>`
  },
  {
    selectorName: "第N个孩子伪选择器",
    helpTitle: "在另一个元素中按顺序选择一个元素",
    doThis: "选择第三个盘子",
    selector: ":nth-child(3)",
    syntax: ":nth-child(A)",
    help: "选择 <strong>第N个</strong> (Ex: 1st, 3rd, 12th etc.) 子元素",
    examples: [
      '<strong>:nth-child(8)</strong> 选择作为另一个元素的第8个子元素的所有元素。',
      '<strong>div p:nth-child(2)</strong> 在每个 <strong>div</strong> 中选择第2个 <strong>p</strong> 元素',
    ],
    boardMarkup: `
    <plate/>
    <plate/>
    <plate/>
    <plate id="fancy"/>
    `
  },
  {
    selectorName: "倒序选择器",
    helpTitle: "倒序选择元素，从后面开始计数",
    doThis: "选择第一个便当盒",
    selector: "bento:nth-last-child(3)",
    syntax: ":nth-last-child(A)",
    help: "从父母的底部选择孩子。这就像第n个孩子，但从后面算起来！",
    examples: [
      '<strong>:nth-last-child(2)</strong> 选择倒数第二个元素。'
    ],
    boardMarkup: `
    <plate/>
    <bento/>
    <plate>
      <orange/>
      <orange/>
      <orange/>
    </plate>
    <bento/>
    `
  },
  {
    selectorName: "第一类型选择器",
    helpTitle: "选择特定类型的第一个元素",
    doThis: "选择第一个苹果",
    selector: "apple:first-of-type",
    syntax: ":first-of-type",
    help: "在另一个元素中选择该类型的第一个元素。",
    examples: [
      '<strong>span:first-of-type</strong> 选择第一个 <tag>span</tag> 元素。'
    ],
    boardMarkup: `
    <orange class="small"/>
    <apple/>
    <apple class="small"/>
    <apple/>
    <apple class="small"/>
    <plate>
      <orange class="small"/>
      <orange/>
    </plate>
    `
  },
  {
    selectorName: "第N个类型选择器",
    doThis: "选择所有偶数盘子",
    selector: "plate:nth-of-type(even)",
    syntax: ":nth-of-type(A)",
    help: "根据其元素的类型和顺序选择一个特定的元素 - 或者是奇数个元素。",
    examples: [
      '<strong>div:nth-of-type(2)</strong> 选择第二个 <tag>div</tag> 元素',
      '<strong>.example:nth-of-type(odd)</strong> 选择所有奇数位置的 <strong>class="example"</strong> 元素',
      '<strong>.example:nth-of-type(even)</strong> 选择所有偶数位置的 <strong>class="example"</strong> 元素'
    ],
    boardMarkup: `
    <plate/>
    <plate/>
    <plate/>
    <plate/>
    <plate id="fancy"/>
    <plate/>
    `
  },
  {
    selectorName: "具有公式的第N类选择器",
    doThis: "从第3个盘子开始，选择第2个盘子",
    selector: "plate:nth-of-type(2n+3)",
    syntax: ":nth-of-type(An+B)",
    help: "从第B位置开始选择，步长为A。",
    examples: [
      '<strong>span:nth-of-type(6n+2)</strong> 从第二个 <tag>span</tag> 开始选择,步长为6'
    ],
    boardMarkup: `
    <plate/>
    <plate>
      <pickle class="small" />
    </plate>
    <plate>
      <apple class="small" />
    </plate>
    <plate/>
    <plate>
      <apple />
    </plate>
    <plate/>
    `
  },
  {
    selectorName: "唯一类型选择器",
    helpTitle: "在其父元素中选择唯一的类型元素",
    selector: "apple:only-of-type",
    syntax: ":only-of-type",
    doThis: "选择中间盘子上的苹果",
    help: "在另一个元素中选择其类型中唯一的元素。",
    examples: [
      '<strong>p span:only-of-type</strong> 选择一个 <tag>span</tag> 在 <tag>p</tag> 中，如果 <tag>span</tag> 是唯一的'
    ],
    boardMarkup: `
    <plate id="fancy">
      <apple class="small" />
      <apple />
    </plate>
    <plate>
      <apple class="small" />
    </plate>
    <plate>
      <pickle />
    </plate>
    `
  },
  {
    selectorName: "最后一个类型选择器",
    helpTitle: "选择特定类型的最后一个元素",
    doThis: "选择最后一个苹果和橘子",
    selector: ".small:last-of-type",
    syntax: ":last-of-type",
    help: "在另一个元素中选择该类型的最后一个元素。记住类型是指标签的种类，所以 <tag>p</tag> 与 <tag>span</tag> 是不同的类型。",
    examples: [
      '<strong>div:last-of-type</strong> 选择最后一个 <tag>div</tag> 元素',
      '<strong>p span:last-of-type</strong> 选择 <tag>p</tag> 中最后一个 <tag>span</tag> 元素'
    ],
    boardMarkup: `
    <orange class="small"/>
    <orange class="small" />
    <pickle />
    <pickle />
    <apple class="small" />
    <apple class="small" />
    `
  },
  {
    selectorName: "空选择器",
    helpTitle: "选择没有孩子的元素",
    doThis: "选择空的便当盒",
    selector: "bento:empty",
    syntax: ":empty",
    help: "选择其中没有任何其他元素的元素。",
    examples: [
      '<strong>div:empty</strong> 选择没有任何其他元素的 <tag>div</tag> 元素。'
    ],
    boardMarkup: `
    <bento/>
    <bento>
      <pickle class="small"/>
    </bento>
    <plate/>
    <bento/>`
  },
  {
    selectorName: "否定伪类",
    helpTitle: "选择所有不符合否定选择器的元素",
    doThis: "选择大苹果",
    selector: "apple:not(.small)",
    syntax: ":not(X)",
    help: '您可以选择与选择器 <strong>"X"</strong> 不匹配的元素',
    examples: [
      '<strong>:not(#fancy)</strong> 选择没有 <strong>id="fancy"</strong> 的元素',
      '<strong>div:not(:first-child)</strong> 选择不是第一个孩子的 <tag>div</tag> 元素。',
      '<strong>:not(.big, .medium)</strong> 选择没有 <strong>class="big"</strong> 或 <strong>class="medium"</strong> 的元素。'
    ],
    boardMarkup: `
    <plate id="fancy">
      <apple class="small" />
    </plate>
    <plate>
      <apple />
    </plate>
    <apple />
    <plate>
      <orange class="small" />
    </plate>
    <pickle class="small" />
    `
  },
  {
    selectorName: "属性选择器",
    helpTitle: "选择所有具有特定属性的元素",
    doThis: "为某人选择项目",
    selector: "[for]",
    syntax: "[attribute]",
    help: '属性出现在元素的开始标签内，如下所示： <tag>span attribute="value"</tag>。一个属性并不总是有一个值，它可以是空白的！',
    examples: [
      '<strong>a[href]</strong> 选择所有  <strong>href</strong> 属性不为空的 <tag>a</tag> 元素。',
      '<strong>[type]</strong> 选择所有 <strong>type</strong> 属性不为空的元素'
    ],
    boardMarkup: `
    <bento><apple class="small"/></bento>
    <apple for="Ethan"/>
    <plate for="Alice"><pickle/></plate>
    <bento for="Clara"><orange/></bento>
    <pickle/>`
  },
  {
    selectorName: "属性选择器",
    helpTitle: "选择所有具有特定属性的元素",
    doThis: "选择某人的盘子",
    selector: "plate[for]",
    syntax: "A[attribute]",
    help: "将属性选择器与其他选择器（如标记名选择器）相结合，将其添加到最后。",
    examples: [
      '<strong>[value]</strong> 选择所有 <strong>value</strong> 属性不为空的元素',
      '<strong>a[href]</strong> 选择所有 <strong>href</strong> 属性不为空的 <tag>a</tag> 元素',
      '<strong>input[disabled]</strong> 选择所有 <strong>disabled</strong> 属性不为空的 <tag>input</tag>元素'
    ],
    boardMarkup: `
    <plate for="Sarah"><pickle/></plate>
    <plate for="Luke"><apple/></plate>
    <plate/>
    <bento for="Steve"><orange/></bento>
    `
  },
  {
    selectorName: "属性值选择器",
    helpTitle: "选择具有特定属性值的所有元素",
    doThis: "选择Vitaly的便当盒",
    selector: "[for=Vitaly]",
    syntax: '[attribute="value"]',
    help: "属性选择符区分大小写，每个字符必须完全匹配。",
    examples: [
      '<strong>input[type="checkbox"]</strong> 选择所有复选框输入元素。'
    ],
    boardMarkup: `
    <apple for="Alexei" />
    <bento for="Albina"><apple /></bento>
    <bento for="Vitaly"><orange/></bento>
    <pickle/>
    `
  },
  {
    selectorName: "属性开始与选择器",
    helpTitle: "选择具有以特定字符开头的属性值的所有元素",
    doThis: "选择以“Sa”开头的名称的项目",
    selector: '[for^="Sa"]',
    syntax: '[attribute^="value"]',
    // help : "You can use quotes around the value in the selector, or not&mdash;it's optional!",
    examples: [
      '<strong>.toy[category^="Swim"]</strong> 选择拥有 <strong>class = "toy"</strong> 与 <strong>category="Swimwear"</strong> 或 <strong>category="Swimming"</strong> 属性的元素'
    ],
    boardMarkup: `
    <plate for="Sam"><pickle/></plate>
    <bento for="Sarah"><apple class="small"/></bento>
    <bento for="Mary"><orange/></bento>
    `
  },
  {
    selectorName: "属性结束与选择器",
    helpTitle: "选择具有以特定字符结尾的属性值的所有元素",
    doThis: "选择以“ato”结尾的名称的项目",
    selector: '[for$="ato"]',
    syntax: '[attribute$="value"]',
    help: '',
    examples: [
      '<strong>img[src$=".jpg"]</strong> 选择所有图像路径以 <strong>.jpg</strong> 结尾的 <strong>img</strong> 元素',
    ],
    boardMarkup: `
    <apple class="small"/>
    <bento for="Hayato"><pickle/></bento>
    <apple for="Ryota"></apple>
    <plate for="Minato"><orange/></plate>
    <pickle class="small"/>
    `
  },
  {
    selectorName: "属性通配符选择器",
    helpTitle: "选择所有具有包含特定字符的属性值的元素",
    syntax: '[attribute*="value"]',
    doThis: "选择包含“obb”的名称的便当盒",
    selector: '[for*="obb"]',
    help: '一个有用的选择器，如果你可以识别一个共同的模式， <strong>class</strong>, <strong>href</strong> 或 <strong>src</strong> 属性。',
    examples: [
      '<strong>img[src*="/thumbnails/"]</strong> 选择所有路径包含有 "/thumbnails/" 的 <strong>img</strong> 元素',
      '<strong>[class*="heading"]</strong> 在其类中选择具有“heading”的所有元素，如 <strong>class="main-heading"</strong> 与 <strong>class="sub-heading"</strong>'
    ],
    boardMarkup: `
    <bento for="Robbie"><apple /></bento>
    <bento for="Timmy"><pickle /></bento>
    <bento for="Bobby"><orange /></bento>
    `
  }
];