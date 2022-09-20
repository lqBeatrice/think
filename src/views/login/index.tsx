import LoginForm from "./components/LoginForm";
import SwitchDark from "@/components/SwitchDark";
import loginLeft from "@/assets/images/login_left.png";
import logo from "@/assets/images/logo.png";
import "./index.less";
import Language from "@/components/Language";

const Login = () => {
	return (
		<div className="login-container">
			<SwitchDark />
            <Language />
			<div className="login-box">
				<div className="login-left">
					<img src={loginLeft} alt="login" />
				</div>
				<div className="login-form">
					<div className="login-logo">
						<img className="login-icon" src={logo} alt="logo" />
						<span className="logo-text">react-ts-cms</span>
					</div>
					<LoginForm />
				</div>
			</div>
		</div>
	);
};

export default Login;
