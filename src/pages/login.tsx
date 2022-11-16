import styled from 'styled-components'
import { useSession, signIn, signOut } from 'next-auth/react'
import { useEffect } from 'react';

export default function Home() {
  const { data: session } = useSession();
  useEffect(() => {
    console.log(session);
  }, [])
  if (session) {
    return (
      <Container>
        <h1>안녕! {session.user?.email}</h1>
        <button onClick={() => signOut()}>Sing out</button>
      </Container>
    )
  } else {
    return (
      <Container>
        <h1>너 로그인 안함</h1>
        <button onClick={() => signIn()}>Sing in</button>
      </Container>
    )
  }
}

const Container = styled.div`
  width:100vw;
  min-height:100vh;
`
