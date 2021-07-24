import styled from "styled-components";
import {
    Link
} from "react-router-dom";
import Icon from "./Icon";

const NavWrapper = styled.div`
line-height: 24px;
box-shadow: 0 0 3px rgba(0,0,0,0.25);
>ul {
  display: flex;
  > li {
    width: 33.3333%;
    > a {
      text-align: center;
      padding: 4px 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      .icon {
      width: 24px;
      height: 24px;
    }
    }
  }
}
`

const Nav = () => {
    return (
        <NavWrapper>
          <ul>
            <li>
              
              <Link to="/money">
                <Icon name="money" />
                money
              </Link>
            </li>
            <li>
              <Link to="/detail">
                <Icon name="detail" />
                detail
              </Link>
            </li>
            <li>
              <Link to="/report">
                <Icon name="report" />
                report
              </Link>
            </li>
          </ul>
        </NavWrapper>
    )
}

export default Nav;