import React from "react";
import styled from "styled-components";
import {
    Link
} from "react-router-dom";
require('icons/money.svg');
require('icons/detail.svg');
require('icons/report.svg');

const NavWrapper = styled.div`
line-height: 24px;
box-shadow: 0 0 3px rgba(0,0,0,0.25);
>ul {
  display: flex;
  > li {
    width: 33.3333%;
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
`

const Nav = () => {
    return (
        <NavWrapper>
          <ul>
            <li>
              <svg className="icon">
                <use xlinkHref="#money"/>
              </svg>
              <Link to="/money">money</Link>
            </li>
            <li>
              <svg className="icon">
                <use xlinkHref="#detail"/>
              </svg>
              <Link to="/detail">detail</Link>
            </li>
            <li>
              <svg className="icon">
                <use xlinkHref="#report"/>
              </svg>
              <Link to="/report">report</Link>
            </li>
          </ul>
        </NavWrapper>
    )
}

export default Nav;