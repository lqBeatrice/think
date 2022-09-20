import { BrowserRouter } from 'react-router-dom'
import Router from "@/routers/index";
import { connect } from "react-redux";
import { ConfigProvider } from "antd";
import './App.css'
import useTheme from './hooks/useTheme';
import useLanguage from './hooks/useLanguage';

function App(props: any) {
  const { themeConfig, language } = props;
  const { i18nLocale } = useLanguage(language);

  useTheme(themeConfig)

  return (
    <ConfigProvider locale={i18nLocale}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ConfigProvider>
  )
}

const mapStateToProps = (state: any) => state.global;
export default connect(mapStateToProps)(App);
