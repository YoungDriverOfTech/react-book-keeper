import styled from "styled-components";
import {
    Link, NavLink
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
      &.selected {
        font-size: 1.2em;
        color: #1296db;
        .icon{
          width: 26px;
          height: 26px;
        }
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
              <NavLink to="/money" activeClassName="selected">
                <Icon name="money" />
                money
              </NavLink>
            </li>
            <li>
              <NavLink to="/detail" activeClassName="selected">
                <Icon name="detail" />
                detail
              </NavLink>
            </li>
            <li>
              <NavLink to="/report" activeClassName="selected">
                <Icon name="report" />
                report
              </NavLink>
            </li>
          </ul>
        </NavWrapper>
    )
}

export default Nav;