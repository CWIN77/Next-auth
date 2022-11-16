import Link from 'next/link';
import styled from 'styled-components'
import SvgHeart from '../svg/heart.svg';

export default function Home() {
  return (
    <Container>
      <h1>My Next WebApp</h1>
      <Link href="/login">로그인으로 이동</Link>
    </Container >
  )
}

const Container = styled.div`
  width:100vw;
  min-height:100vh;
`
