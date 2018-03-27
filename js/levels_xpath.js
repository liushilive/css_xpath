var levels_xpath = [
  {
    helpTitle: "根据其类型选择元素",
    selectorName: "类型选择器",
    doThis: "选择盘子",
    selector: "//plate",
    syntax: "//A",
    help: "选择 <strong>A</strong> 类型的所有元素。<br/> 类型是指标签的类型， <tag>div</tag>， <tag>p</tag> 与 <tag>ul</tag> 都是不同的元素类型",
    examples: [
      '<strong>//div</strong> 选择全部 <tag>div</tag> 元素。',
      '<strong>//p</strong> 选择全部 <tag>p</tag> 元素。'
    ],
    boardMarkup: `
    <plate></plate>
    <plate></plate>
    `
  },
  {
    doThis: "选择便当盒",
    selector: "//bento",
    syntax: "//A",
    helpTitle: "根据其类型选择元素",
    selectorName: "类型选择器",
    help: "选择 <strong>A</strong> 类型的所有元素。<br/> 类型是指标签的类型， <tag>div</tag>， <tag>p</tag> 与 <tag>ul</tag> 都是不同的元素类型",
    examples: [
      '<strong>//div</strong> 选择全部 <tag>div</tag> 元素。',
      '<strong>//p</strong> 选择全部 <tag>p</tag> 元素。'
    ],
    boardMarkup: `
    <bento></bento>
    <plate></plate>
    <bento></bento>
    `
  },
  {
    doThis: "选择特效盘子",
    selector: "//*[@id='fancy']",
    selectorName: "属性选择器",
    helpTitle: "选择带有属性的元素",
    syntax: "//*[@id='元素 ID']",
    help: '选择具有 <strong>id</strong> 属性的元素。<br/>您还可以将ID选择器与类型选择器组合在一起。对所有属性进行操作。 <strong>class</strong>， <strong>name</strong>， <strong>placeholder</strong>',
    examples: [
      '<strong>//*[@id="元素 ID"]</strong> 将选择 <strong>id="元素 ID"</strong> 的任何元素',
      '<strong>//ul[@id="long"]</strong> 将选择 <strong>&lt;ul id="long"&gt;</strong>'
    ],
    boardMarkup: `
<plate id="fancy"></plate>
<plate></plate>
<bento></bento>
    `
  },
  {
    doThis: "直接在盘子上选择苹果",
    selectorName: "子选择器",
    syntax: "//A/B",
    selector: "//plate/apple",
    helpTitle: "选择元素的直接子元素",
    help: "你可以选择其他元素的直接子元素。 子元素是直接嵌套在另一个元素中的元素。 <br><br>嵌套更深的元素称为后代元素。",
    examples: [
      '<strong>A//B</strong> 将选择所有 <strong>A</strong> 的所有子元素 <strong>B</strong>'
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
<plate></plate>
<apple/>
<apple class="small stuff"/>
    `
  },
  {
    doThis: "选择盘子上的苹果",
    helpTitle: "在另一个元素中选择一个元素",
    selectorName: "子选择器",
    selector: "//plate/apple",
    syntax: "//A/B",

    help: "选择全部在 <strong>A</strong> 中的 <strong>B</strong> <br>. 这儿的 <strong>B</strong> 是子元素，意思是另一个元素内部的元素。",
    examples: [
      '<strong>//p/strong</strong> 选取属于 <strong>&lt;p&gt;</strong> 的子元素的所有 <strong>&lt;strong&gt;</strong> 元素',
      '<strong>//*[@id="fancy"]/span</strong> 选取属于 <strong>id="fancy"</strong> 的任何元素的子元素的所有 <strong>&lt;span&gt;</strong> 元素'
    ],
    boardMarkup: `
    <bento></bento>
<plate>
<apple/>
</plate>
<apple/>
    `
  },
  {
    doThis: "选择特效盘子上的泡菜",
    selector: "//*[@id='fancy']/pickle",
    helpTitle: "结合子选择器和ID选择器",
    syntax: "//*[@id='id']/A",
    help: '您可以将任何选择器与子选择器组合在一起。',
    examples: [
      '<strong>//*[@id="cool"]/span</strong> 将选择属于 <strong>id="cool"</strong> 的任何元素的子元素的所有 <strong>&lt;span&gt;</strong> 元素'
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
    selector: "//*[contains(@class,'small')]",
    selectorName: "类选择器",
    helpTitle: "通过类选择元素",
    syntax: "//*[contains(@Attribute,'value')]",
    help: '选择器选择包含给定值的属性的所有元素。元素只能有一个ID，但可能包含许多类。',
    examples: [
      '<strong>//*[contains(@class,"neato")]</strong> 选择 <strong>class="neato"</strong> 的所有元素'
    ],
    boardMarkup: `
    <apple/>
<apple class="small stuff"/>
<plate>
<apple class="small stuff"/>
</plate>
<plate></plate>
    `
  },
  {
    doThis: "选择小橘子",
    selector: "//orange[contains(@class,'small')]",
    helpTitle: "更具体的属性选择器",
    syntax: "//A[contains(@Attribute,'value')]",
    help: '您可以更具体地使用选择器。',
    examples: [
      '<strong>//ul[contains(@class,"important")]</strong> 将选择所有具有 <strong>class="important stuff"</strong> 的 <strong>&lt;ul&gt;</strong> 元素',
      '<strong>//input[@placeholder="Name"]</strong> 将选择具有 <strong>placeholder="Name"</strong> 的 <strong>&lt;input&gt;</strong> 元素'
    ],
    boardMarkup: `
    <apple/>
<apple class="small stuff"/>
<bento>
<orange class="small stuff"/>
</bento>
<plate>
<orange/>
</plate>
<plate>
<orange class="small stuff"/>
</plate>
    `
  },
  {
    doThis: "选择便当盒里的小橘子",
    selector: "//bento/orange[contains(@class,'small')]",
    syntax: "再加把劲儿!",
    helpTitle: "你能行...",
    help: '把你在前几级别学到的东西结合起来解决这个问题！',
    boardMarkup: `
    <apple/>
<plate>
<orange class="small stuff"/>
</plate>
<bento>
<orange class="small stuff"/>
</bento>
<bento>
<apple class="small stuff"/>
</bento>
<bento>
<orange class="small stuff"/>
</bento>
    `
  },
  {
    doThis: "选择所有的盘子与便当盒",
    selector: "//plate|//bento",
    selectorName: "| 连结符",
    helpTitle: "通过在路径表达式中使用“|”运算符，您可以选取若干个路径。",
    syntax: "//A|//B",
    help: '<strong>//A</strong> | <strong>//B</strong> 您可以用这种方式组合任何选择器，并且可以指定多于两个的组合。',
    examples: [
      '<strong>//p| //*[@id="fun"]</strong> 将选择所有 <tag>p</tag> 和 <strong>id="fun"</strong> 的元素',
      '<strong>//a|//p|//div</strong> 将选择所有 <tag>a</tag>, <tag>p</tag> 与 <tag>div</tag> 元素'
    ],
    boardMarkup: `
    <pickle class="small stuff"/>
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
<pickle class="small stuff"/>
    `
  },
  {
    doThis: "选择盘子上的所有东西",
    selector: "//plate/*",
    syntax: "//A/*",
    helpTitle: "通配选择符",
    help: '这将选择 <strong>A</strong> 中的所有元素。',
    examples: [
      '<strong>//p/*</strong> 将选择所有 <strong>&lt;p&gt;</strong> 元素内的每个元素。',
      '<strong>//ul[@id="fancy"]/*</strong> 将选择所有 <strong>&lt;ul id="fancy"&gt;</strong> 元素内的每个元素。'
    ],
    boardMarkup: `
    <plate id="fancy">
<orange class="small stuff"/>
</plate>
<plate>
<pickle/>
</plate>
<apple class="small stuff"/>
<plate>
<apple/>
</plate>
    `
  },
  {
    doThis: "选择盘子旁边的所有苹果",
    selector: "//plate/following-sibling::apple",
    helpTitle: "选择当前元素之后的同级元素",
    selectorName: "相邻兄弟选择器",
    syntax: "//A/following-sibling::B",
    help: "选择所有 <strong>A</strong> 元素之后同级的 <strong>B</strong> 元素。",
    examples: [
      '<strong>//p/following-sibling::div</strong> 选择所有 <tag>p</tag> 之后的同级的 <strong>&lt;div&gt;</strong> 元素',
      '<strong>//div//following-sibling::a</strong> 选择所有 <tag>div</tag> 之后的同级的 <tag>a</tag>  元素'
    ],
    boardMarkup: `
    <bento>
<apple class="small stuff"/>
</bento>
<plate></plate>
<apple class="small stuff"/>
<plate></plate>
<apple/>
<apple class="small stuff"/>
<apple class="small stuff"/>
    `
  },
  {
    doThis: "选择苹果旁边的所有盘子",
    selector: "//apple/preceding-sibling::plate",
    helpTitle: "选择当前元素之前的同级元素",
    selectorName: "相邻兄弟选择器",
    syntax: "//A/preceding-sibling::B",
    help: "选择所有 <strong>A</strong> 元素之前同级的 <strong>B</strong> 元素。",
    examples: [
      '<strong>//p/preceding-sibling::div</strong> 选择所有 <tag>p</tag> 之前的同级的 <strong>&lt;div&gt;</strong> 元素',
      '<strong>//div//preceding-sibling::a</strong> 选择所有 <tag>div</tag> 之前的同级的 <tag>a</tag>  元素'
    ],
    boardMarkup: `
    <bento>
    <apple class="small stuff"/>
    </bento>
    <plate></plate>
    <apple class="small stuff"/>
    <plate></plate>
    <apple/>
    <apple class="small stuff"/>
    <apple class="small stuff"/>
    `
  },
  {
    doThis: "选择第三个泡菜",
    selectorName: "索引选择器",
    helpTitle: "在给定索引处选择元素",
    syntax: "(A)[Index]",
    selector: "(//pickle)[3]",
    help: "您可以从xpath结果中选择特定元素。",
    examples: [
      '<strong>(//a)[2]</strong> 选择第二个 <strong>A</strong>'
    ],
    boardMarkup: `
    <pickle/>
    <bento>
    <pickle class="small stuff"/>
    </bento>
    <pickle class="small stuff"/>
    <pickle/>
    <plate>
    <pickle/>
    </plate>
    <plate>
    <pickle class="small stuff"/>
    </plate>
    `
  },
  {
    doThis: "选择盘子里的大苹果和大橙子",
    selectorName: "最后一个选择器",
    helpTitle: "选择一堆元素内的最后一个元素",
    selector: "//plate/*[last()]",
    syntax: "last()",
    help: "您可以使用此选择器选择一堆元素内的最后一个元素",
    examples: [
      '<strong>(//div)[last()]</strong> 选择最后一个 <strong>&lt;div&gt;</strong> 元素.',
      '<strong>//div/*[last()]</strong> 选择 <strong>&lt;div&gt;</strong> 元素中的最后一个元素。'
    ],
    boardMarkup: `
    <plate>
    <apple class="small stuff"/>
    <apple/>
    </plate>
    <plate></plate>
    <plate>
    <orange class="small stuff"/>
    <orange/>
    </plate>
    <pickle class="small stuff"/>
    `
  },
  {
    doThis: "选择有橘子的盒子",
    selector: "//orange/..",
    helpTitle: "父选择器",
    syntax: "..",
    help: '您可以将任何选择器与父选择器组合在一起。',
    examples: [
      '<strong>//*[@id="cool"]/..</strong> 将选择属于 <strong>id="cool"</strong> 的任何元素的父元素'
    ],
    boardMarkup: `
<bento/>
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
  }
];
