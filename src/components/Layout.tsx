import styled from 'styled-components';
import Nav from 'components/Nav'

// 100vh(view height) means always full fill screen
const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`

const Main = styled.div`
  border: 1px solid green;
  flex-grow: 1; // this property can let element posses most space
`

const Layout = (props: any) => {
    return(
        <div>
            <Wrapper>
                <Main>
                    {/* this children property just like vue's slot */}
                    <h2>{props.children}</h2>
                </Main>
                <Nav/>
            </Wrapper>
        </div>
    )
}

export default Layout;