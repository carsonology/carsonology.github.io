
import { styled } from '@stitches/react';

const HeaderStyled = styled('header', {
  backgroundImage: 'url(/2022-03-26-howth-43.jpg)',
  height: 350,
  backgroundPosition: 'center 35%',
  backgroundSize: 'cover',
  color: 'var(--text-color)',
  padding: '2em 4em',
  borderBottom: '3px solid var(--text-color)'
})

function Header() {
  return (
    <HeaderStyled>
      <h1>Carson TerBush</h1>
      <h2>Storytelling with visuals and data</h2>
    </HeaderStyled>
  );
}
export default Header;
