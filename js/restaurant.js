$.fn.xpathEvaluate = function (xpathExpression) {
  let xpathResult = document.evaluate(xpathExpression, this[0], null,
    XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);

  let result = [];
  let elem, $result;
  while (elem = xpathResult.iterateNext()) {
    result.push(elem);
  }

  $result = jQuery([]).pushStack(result);
  return $result;
};

let levels, locator_type, level, currentLevel, progress;
const CSS = "CSS", XPath = "XPath";
const levelTimeout = 1000;
let finished = false;

$(document).ready(function () {

  set_locator_type();

  $(window).on("keydown", function (e) {
    if (e.keyCode === 27) {
      closeMenu();
    }
  });

  // 自定义滚动条插件
  $(".left-col, .level-menu").mCustomScrollbar({
    scrollInertia: 0,
    autoHideScrollbar: true
  });

  $(".note-toggle").on("click", function () {
    $(this).hide();
    $(".note").slideToggle();
  });

  $(".level-menu-toggle-wrapper").on("click", function () {
    if ($(".menu-open").length === 0) {
      openMenu();
    } else {
      closeMenu();
    }
  });

  $(".level-nav").on("click", "a", function () {

    finished = false;
    let direction;
    if ($(this).hasClass("next")) {
      direction = "next";
    }

    addAnimation($(this));

    if (direction === "next") {
      currentLevel++;
      if (currentLevel >= levels.length) {
        currentLevel = levels.length - 1;
      }
    } else {
      currentLevel--;
      if (currentLevel < 0) {
        currentLevel = 0;
      }
    }

    loadLevel();
    return false;
  });

  // 重新制定进度和进度指标
  $(".reset-progress").on("click", function () {
    resetProgress();
    return false;
  });

  // 输入框回车键
  $(".input-key").on("keypress", function (e) {
    e.stopPropagation();
    if (e.keyCode === 13) {
      enterHit();
      return false;
    }
  });

  $(".input-key").on("keyup", function (e) {
    e.stopPropagation();
    const length = $(this).val().length;
    if (length > 0) {
      $(".input-key").removeClass("input-strobe");
    } else {
      $(".input-key").addClass("input-strobe");
    }
  });

  $(".editor").on("click", function () {
    $(".input-key").focus();
  });

  // 添加提示
  $(".table").on("mouseover", "*", function (e) {
    e.stopPropagation();
    showTooltip($(this));
  });

  // 显示表上的工具提示
  $(".markup").on("mouseover", "div *", function (e) {
    el = $(this);
    const markupElements = $(".markup *");
    const index = markupElements.index(el) - 1;
    showTooltip($(".table *").eq(index));
    e.stopPropagation();
  });

  // 显示表上的工具提示
  $(".markup").on("mouseout", "*", function (e) {
    e.stopPropagation();
    hideTooltip();
  });

  $(".table").on("mouseout", "*", function (e) {
    hideTooltip();
    e.stopPropagation();
  });

  $(".enter-button").on("click", function () {
    enterHit();
  });

  $(".table-wrapper,.table-edge").css("opacity", 0);

});

function set_locator_type() {
  locator_type = document.getElementById(
    "select_type").options[window.document.getElementById(
      "select_type").selectedIndex].value;
  if (locator_type === XPath) {
    levels = levels_xpath;
    currentLevel = parseInt(localStorage.getItem("currentXPathLevel"), 10) || 0;
  } else if (locator_type === CSS) {
    levels = levels_css;
    currentLevel = parseInt(localStorage.getItem("currentCSSLevel"), 10) || 0;
  }

  // 从localStorage取得进度，如果没有的话，从头开始
  if (locator_type === CSS) {
    progress = JSON.parse(localStorage.getItem("css_guessHistory")) || {};
  } else if (locator_type === XPath) {
    progress = JSON.parse(localStorage.getItem("xpath_guessHistory")) || {};
  }

  // $(".note_type").html();
  $(".note_type").html(locator_type);
  $("#input-strobe").attr("placeholder", "输入" + locator_type + "选择器代码");

  if (locator_type === CSS) {
    $("#intro").html("CSS 定位 (Positioning) 属性允许你对元素进行定位。");
  } else if (locator_type === XPath) {
    $("#intro").html("XPath 是一门在 XML 文档中查找信息的语言。<br/><br/>XPath 用于在 XML 文档中通过元素和属性进行导航。");
  }
  buildLevelMenu();

  setTimeout(function () {
    loadLevel();
    $(".table-wrapper,.table-edge").css("opacity", 1);
  }, 50);
}

function addAnimation(el) {
  el.addClass("link-jiggle");
  el.one("animationend", function (e) {
    $(e.target).removeClass("link-jiggle");
  });
}

function resetProgress() {
  // 重置进度
  // * 删除所有检查标志
  // * 滚动到第一个等级
  // * 重置对象的进度
  currentLevel = 0;
  progress = {};
  if (locator_type === CSS) {
    localStorage.setItem("css_guessHistory", JSON.stringify(progress));
  } else if (locator_type === XPath) {
    localStorage.setItem("xpath_guessHistory", JSON.stringify(progress));
  }
  finished = false;

  $(".completed").removeClass("completed");
  loadLevel();
  closeMenu();
  $("#mCSB_2_container").css("top", 0); // 由于滚动插件而重置滚动条的奇怪元素
}

function checkCompleted(levelNumber) {
  // 检查级别是否已完成
  if (progress[levelNumber]) {
    return progress[levelNumber].correct;
  } else {
    return false;
  }
}

function buildLevelMenu() {
  // 构建滑出级菜单
  closeMenu();
  $("#note").slideToggle();
  // 清空菜单
  $(".level-menu .levels").empty();

  for (let i = 0; i < levels.length; i++) {
    const level = levels[i];
    const item = document.createElement("a");
    $(item).html("<span class='checkmark'></span><span class='level-number'>" + (i + 1) + "</span>" + level.syntax);
    $(".level-menu .levels").append(item);

    if (checkCompleted(i)) {
      $(item).addClass("completed");
    }

    $(item).on("click", function () {
      finished = false;
      currentLevel = $(this).index();
      loadLevel();
      closeMenu();
    });
  }

}

function closeMenu() {
  // 关闭菜单
  $(".right-col").removeClass("menu-open");
}

function openMenu() {
  $(".right-col").addClass("menu-open");
}

function hideTooltip() {
  // 隐藏或显示当桌面上的图标或编辑器被悬浮的时候出现的提示。
  $(".enhance").removeClass("enhance");
  $("[data-hovered]").removeAttr("data-hovered");
  $(".helper").hide();
}

function showTooltip(el) {
  if (finished) {
    return; // 只有在游戏尚未完成时才显示提示
  }

  el.attr("data-hovered", true);
  const tableElements = $(".table *");
  const index = tableElements.index(el);
  $(".markup > div *").eq(index).addClass("enhance").find("*").addClass(
    "enhance");

  const helper = $(".helper");

  const pos = el.offset();
  helper.css("top", pos.top - 65);
  helper.css("left", pos.left + (el.width() / 2));

  let helpertext;

  let elType = el.get(0).tagName;
  elType = elType.toLowerCase();
  helpertext = '<' + elType;

  let elClass = el.attr("class");

  if (elClass) {
    if (elClass.indexOf("strobe") > -1) {
      elClass = elClass.replace("strobe", "");
    }
  }

  if (elClass) {
    helpertext = helpertext + ' class="' + elClass + '"';
  }

  const elFor = el.attr("for");

  if (elFor) {
    helpertext = helpertext + ' for="' + elFor + '"';
  }

  const id = el.attr("id");
  if (id) {
    helpertext = helpertext + ' id="' + id + '"';
  }

  helpertext = helpertext + '></' + elType + '>';
  helper.show();
  helper.text(helpertext);
}

function enterHit() {
  // 动画进入按钮
  $(".enter-button").removeClass("enterhit");
  $(".enter-button").width($(".enter-button").width());
  $(".enter-button").addClass("enterhit");
  const value = $(".input-key").val();
  handleInput(value);
}

function handleInput(text) {
  // 从输入字段解析文本
  if (parseInt(text, 10) > 0 && parseInt(text, 10) < levels.length + 1) {
    currentLevel = parseInt(text, 10) - 1;
    loadLevel();
    return;
  }
  fireRule(text);
}

function showHelp() {
  // 加载每个级别的帮助文本和示例
  const helpTitle = level.helpTitle || "";
  const help = level.help || "";
  const examples = level.examples || [];
  const selector = level.selector || "";
  const syntax = level.syntax || "";
  const syntaxExample = level.syntaxExample || "";
  const selectorName = level.selectorName || "";

  $(".display-help .syntax").html(syntax);
  $(".display-help .syntax-example").html(syntaxExample);
  $(".display-help .selector-name").html(selectorName);
  $(".display-help .title").html(helpTitle);
  $(".display-help .examples").html("");
  $(".display-help .examples-title").hide(); // 隐藏标题“examples”

  for (let i = 0; i < examples.length; i++) {
    const example = $("<div class='example'>" + examples[i] + "</div>");
    $(".display-help .examples").append(example);
    $(".display-help .examples-title").show(); // 如果有例子说明
  }

  $(".display-help .hint").html(help);
  $(".display-help .selector").text(selector);
}

function resetTable() {
  $(".display-help").removeClass("open-help");
  $(".clean,.strobe").removeClass("clean,strobe");
  $(".clean,.strobe").removeClass("clean,strobe");
  $(".input-key").addClass("input-strobe");
  $(".table *").each(function () {
    $(this).width($(this).width());
    // $(this).removeAttr("style");
    // TODO - 需要? ?可能不会，所有东西都会被移除
  });

  const tableWidth = $(".table").outerWidth();
  $(".table-wrapper, .table-edge").width(tableWidth);
}

function fireRule(rule) {

  // 防止作弊
  if (rule === ".strobe") {
    rule = null;
  }

  $(".shake").removeClass("shake");

  $(".strobe,.clean,.shake").each(function () {
    $(this).width($(this).width());
    $(this).removeAttr("style");
  });

  // var baseTable = $('.table-wrapper > .table, .table-wrapper > .nametags, .table-wrapper > .table-surface');
  let baseTable, ruleSelected, levelSelected = null;
  if (locator_type === CSS) {
    baseTable = $('.table');
    try {
      $(".table").find(rule).not(baseTable);
    }
    catch (err) {
      rule = null;
    }

    ruleSelected = $(".table").find(rule).not(baseTable);
    levelSelected = $(".table").find(level.selector).not(baseTable);
  } else if (locator_type === XPath) {
    baseTable = $('.table-wrapper > .table');
    ruleSelected = $(".table-wrapper").xpathEvaluate(rule).not(baseTable);
    levelSelected = $(".table-wrapper").xpathEvaluate(level.selector).not(
      baseTable);
  }

  let win = false;

  if (ruleSelected.length === 0) {
    $(".editor").addClass("shake");
  }

  if (ruleSelected.length === levelSelected.length && ruleSelected.length > 0) {
    win = checkResults(rule);
  }

  if (win) {
    ruleSelected.removeClass("strobe");
    ruleSelected.addClass("clean");
    $(".input-key").val("");
    $(".input-wrapper").css("opacity", 0.2);
    updateProgressUI(currentLevel, true);
    currentLevel++;

    if (currentLevel >= levels.length) {
      winGame();
    } else {
      setTimeout(function () {
        loadLevel();
      }, levelTimeout);
    }
  } else {
    ruleSelected.removeClass("strobe");
    ruleSelected.addClass("shake");

    setTimeout(function () {
      $(".shake").removeClass("shake");
      $(".strobe").removeClass("strobe");
      levelSelected.addClass("strobe");
    }, 500);

    $(".result").fadeOut();
  }

  // 如果答案是正确的
  if (win) {
    trackProgress(currentLevel - 1, "correct");
  } else {
    trackProgress(currentLevel, "incorrect");
  }
}

function updateProgressUI(levelNumber, completed) {
  // 将一个单独的符号标记为已完成或未完成
  if (completed) {
    $(".levels a:nth-child(" + (levelNumber + 1) + ")").addClass("completed");
    $(".level-header").addClass("completed");
  } else {
    $(".level-header").removeClass("completed");
  }
}

function trackProgress(levelNumber, type) {
  if (!progress[levelNumber]) {
    progress[levelNumber] = {
      correct: false,
      incorrectCount: 0,
    };
  }

  const levelStats = progress[levelNumber];

  if (type === "incorrect") {
    if (levelStats.correct === false) {
      levelStats.incorrectCount++;
    }
  } else {
    if (levelStats.correct === false) {
      levelStats.correct = true;
    }
  }

  if (locator_type === CSS) {
    localStorage.setItem("css_guessHistory", JSON.stringify(progress));
  } else if (locator_type === XPath) {
    localStorage.setItem("xpath_guessHistory", JSON.stringify(progress));
  }
}

function winGame() {
  $(".table").html(
    '<span class="winner"><strong>你做到了!</strong><br>你掌握了!</span>');
  addNametags();
  finished = true;
  resetTable();
}

function checkResults(rule) {
  const ruleTable = $(".table").clone();
  ruleTable.find(".strobe").removeClass("strobe");
  if (locator_type === CSS) {
    ruleTable.find(rule).addClass("strobe");
  } else if (locator_type === XPath) {
    ruleTable.xpathEvaluate(rule).addClass("strobe");
  }
  return ($(".table").html() === ruleTable.html());
}

function getMarkup(el) {
  const hasChildren = el.children.length > 0;
  const elName = el.tagName.toLowerCase();
  const wrapperEl = $("<div/>");
  let attributeString = "";
  $.each(el.attributes, function () {
    if (this.specified) {
      attributeString = attributeString + ' ' + this.name + '="' + this.value + '"';
    }
  });
  let attributeSpace = "";
  if (attributeString.length > 0) {
    attributeSpace = " ";
  }
  if (hasChildren) {
    wrapperEl.text("<" + elName + attributeSpace + attributeString + ">");
    $(el.children).each(function (i, el) {
      wrapperEl.append(getMarkup(el));
    });
    wrapperEl.append("&lt;/" + elName + "&gt;");
  } else {
    wrapperEl.text("<" + elName + attributeSpace + attributeString + " />");
  }
  return wrapperEl;
}

function loadBoard() {

  showHelp();

  const markupHolder = $("<div/>");

  $(level.boardMarkup).each(function (i, el) {
    if (el.nodeType === 1) {
      const result = getMarkup(el);
      markupHolder.append(result);
    }
  });

  $(".table").html(level.boardMarkup);
  addNametags();
  if (locator_type === CSS) {
    $(".table *").addClass("pop");
  }

  $(".markup").html('<div>&ltdiv class="table"&gt' + markupHolder.html() + '&lt/div&gt</div>');
}

function addNametags() {
  $(".nametags *").remove();
  $(".table-wrapper").css("transform", "rotateX(0)");
  $(".table-wrapper").width($(".table-wrapper").width());

  $(".table *").each(function () {
    if ($(this).attr("for")) {
      const pos = $(this).position();
      const width = $(this).width();
      const nameTag = $("<div class='nametag'>" + $(this).attr("for") + "</div>");
      $(".nametags").append(nameTag);
      const tagPos = pos.left + (width / 2) - nameTag.width() / 2 + 12;
      nameTag.css("left", tagPos);
    }
  });

  $(".table-wrapper").css("transform", "rotateX(20deg)");
}

function loadLevel() {
  if (currentLevel < 0 || currentLevel >= levels.length) {
    currentLevel = 0;
  }

  hideTooltip();

  level = levels[currentLevel];

  if (currentLevel < 3) {
    $(".note-toggle").show();
  } else {
    $(".note-toggle").hide();
  }

  $(".level-menu .current").removeClass("current");
  $(".level-menu div a").eq(currentLevel).addClass("current");

  const percent = (currentLevel + 1) / levels.length * 100;
  $(".progress").css("width", percent + "%");

  if (locator_type === XPath) {
    localStorage.setItem("currentXPathLevel", currentLevel);
  } else if (locator_type === CSS) {
    localStorage.setItem("currentCSSLevel", currentLevel);
  }

  loadBoard();
  resetTable();

  $(".level-header .level-text").html("Level " + (currentLevel + 1) + " of " + levels.length);

  updateProgressUI(currentLevel, checkCompleted(currentLevel));

  $(".order").text(level.doThis);
  $(".input-key").val("").focus();

  $(".input-wrapper").css("opacity", 1);
  $(".result").text("");

  if (locator_type === CSS) {
    setTimeout(function () {
      $(".table " + level.selector).addClass("strobe");
      $(".pop").removeClass("pop");
    }, 200);
  } else if (locator_type === XPath) {
    $(document).xpathEvaluate(level.selector).addClass("strobe");
  }
}

function PopupCenter(url, title, w, h) {
  // 弹出定位
  // http://stackoverflow.com/questions/4068373/center-a-popup-window-on-screen
  // Fixes dual-screen position                         Most browsers      Firefox
  const dualScreenLeft = window.screenLeft != undefined ? window.screenLeft
    : screen.left;
  const dualScreenTop = window.screenTop !== undefined ? window.screenTop
    : screen.top;

  const width = window.innerWidth ? window.innerWidth
    : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
  const height = window.innerHeight ? window.innerHeight
    : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

  const left = ((width / 2) - (w / 2)) + dualScreenLeft;
  const top = ((height / 2) - (h / 2)) + dualScreenTop;
  const newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

  // Puts focus on the newWindow
  if (window.focus) {
    newWindow.focus();
  }
}