import styled from "styled-components";

function login() {
    return (
        <Container>
            <Head>
                <title>Login</title>
            </Head>

            <LoginContainer>
                <Logo />
                <Button variant="outlined">Sign in with Google</Button>
            </LoginContainer>
        </Container>


    )
}

export default login

const Container = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;
`;

const LoginContainer = styled.div`
    padding: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
    box-shadow: 0px 4px 14px -3px rgba(0, 0, 0, 0.7)
`;

const Logo = styled.img`
    height: 200px;
    width: 200px;
    margin-bottom: 50px;
`;