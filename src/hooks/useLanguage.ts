import { useEffect, useState } from "react";
import zhCN from "antd/lib/locale/zh_CN";
import enUS from "antd/lib/locale/en_US";
import i18n from "@/language";

const useLanguage = (language: string) => {
    const [i18nLocale, setI18nLocale] = useState(zhCN);
    const getBrowserLang = () => {
        let browserLang = navigator.language;
        let defaultBrowserLang = "";
        if (browserLang.toLowerCase() === "cn" || browserLang.toLowerCase() === "zh" || browserLang.toLowerCase() === "zh-cn") {
            defaultBrowserLang = "zh";
        } else {
            defaultBrowserLang = "en";
        }
        return defaultBrowserLang;
    };
    const initLanguage = () => {
        // 如果 redux 中有默认语言就设置成 redux 的默认语言，没有默认语言就设置成浏览器默认语言
        if (language && language == "zh") return setI18nLocale(zhCN);
        if (language && language == "en") return setI18nLocale(enUS);
        if (getBrowserLang() == "zh") return setI18nLocale(zhCN);
        if (getBrowserLang() == "en") return setI18nLocale(enUS);
    }

    useEffect(() => {
        i18n.changeLanguage(language || getBrowserLang());
		initLanguage();
    }, [language])
    
    return {
        i18nLocale: i18nLocale
    }
}

export default useLanguage