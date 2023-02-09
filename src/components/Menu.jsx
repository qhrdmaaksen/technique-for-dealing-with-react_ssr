// red,blue 박스를 보여주는 컴포넌트와 각 링크로 이동할수있게해주는 메뉴 컴포넌트
import {Link} from "react-router-dom";

const Menu = () => {
	return (
			<ul>
				<li>
					<Link to="/red">Red</Link>
				</li>
				<li>
					<Link to="/blue">Blue</Link>
					</li>
			</ul>
	)
}

export default Menu;