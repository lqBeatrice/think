import { Switch, theme } from "antd";
import { connect } from "react-redux";
import { setThemeConfig } from "@/redux/modules/global/action";
import { ThemeConfigProp } from "@/types";

const SwitchDark = (props: any) => {
	const { themeConfig, changeTheme } = props;
	const onChange = (checked: boolean) => {
		changeTheme({ ...themeConfig, isDark: checked })
	}
	return (
		<Switch
			className="dark"
			defaultChecked={themeConfig.isDark}
			checkedChildren={<>🌞</>}
			unCheckedChildren={<>🌜</>}
			onChange={onChange}
		/>
	);
};

const mapStateToProps = (state: any) => state.global
const mapDispatchToProps = (dispatch: any) => {
	return {
		changeTheme: (themeConfig: ThemeConfigProp) => {
			dispatch(setThemeConfig(themeConfig))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SwitchDark);
