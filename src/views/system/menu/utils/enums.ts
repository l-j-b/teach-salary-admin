import type { OptionsType } from "@/components/ReSegmented";

const menu_type_options: Array<OptionsType> = [
  {
    label: "菜单",
    value: 0
  },
  {
    label: "iframe",
    value: 1
  },
  {
    label: "外链",
    value: 2
  },
  {
    label: "按钮",
    value: 3
  }
];

const show_link_options: Array<OptionsType> = [
  {
    label: "显示",
    tip: "会在菜单中显示",
    value: true
  },
  {
    label: "隐藏",
    tip: "不会在菜单中显示",
    value: false
  }
];

const fixed_tag_options: Array<OptionsType> = [
  {
    label: "固定",
    tip: "当前菜单名称固定显示在标签页且不可关闭",
    value: true
  },
  {
    label: "不固定",
    tip: "当前菜单名称不固定显示在标签页且可关闭",
    value: false
  }
];

const keep_alive_options: Array<OptionsType> = [
  {
    label: "缓存",
    tip: "会保存该页面的整体状态，刷新后会清空状态",
    value: true
  },
  {
    label: "不缓存",
    tip: "不会保存该页面的整体状态",
    value: false
  }
];

const hidden_tag_options: Array<OptionsType> = [
  {
    label: "允许",
    tip: "当前菜单名称或自定义信息允许添加到标签页",
    value: false
  },
  {
    label: "禁止",
    tip: "当前菜单名称或自定义信息禁止添加到标签页",
    value: true
  }
];

const show_parent_options: Array<OptionsType> = [
  {
    label: "显示",
    tip: "会显示父级菜单",
    value: true
  },
  {
    label: "隐藏",
    tip: "不会显示父级菜单",
    value: false
  }
];

const frame_loading_options: Array<OptionsType> = [
  {
    label: "开启",
    tip: "有首次加载动画",
    value: true
  },
  {
    label: "关闭",
    tip: "无首次加载动画",
    value: false
  }
];

export {
  menu_type_options,
  show_link_options,
  fixed_tag_options,
  keep_alive_options,
  hidden_tag_options,
  show_parent_options,
  frame_loading_options
};
