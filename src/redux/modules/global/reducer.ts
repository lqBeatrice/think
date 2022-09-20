import * as types from "@/redux/mutation-types";
import { GlobalState, ThemeConfigProp } from "@/types";
import { AnyAction } from "redux";

const globalState: GlobalState = {
    language: '',
    themeConfig: {
        // 默认 primary 主题颜色
        primary: "#1890ff",
        // 深色模式
        isDark: false,
        // 色弱模式(weak) || 灰色模式(gray)
        weakOrGray: "",
        // 面包屑导航
        breadcrumb: true,
        // 标签页
        tabs: true,
        // 页脚
        footer: true
    }
}

const globalReducer = (state: GlobalState = globalState, action: AnyAction) => {
    switch (action.type) {
        case 'SET_LANGUAGE':
            return {
                ...state,
                language: action.language
            }
        case 'SET_THEME_CONFIG':
            return {
                ...state,
                themeConfig: action.themeConfig
            }
        default:
            return state;
    }
}

export default globalReducer;