/** @jsx jsx */
import styled from '@emotion/styled';
import { jsx } from 'theme-ui';
import navLinks from '../../static-data/nav-links';

export const Navigation = ({ showMenu }) => {
  return (
    <NavigationContainer>
      <NavLinks open={showMenu}>
        {navLinks.map((link, i) => (
          <li key={i}>
            <Link
              href={link.path}
              sx={{
                fontFamily: 'body',
                fontWeight: 'links',
                transition: 'link',
                '&:hover': {
                  color: 'primary',
                },
              }}
            >
              {link.text}
            </Link>
          </li>
        ))}
      </NavLinks>
    </NavigationContainer>
  );
};

const NavigationContainer = styled.nav`
  flex: 1;
  margin-top: 1.2rem;
  @media (min-width: 992px) {
    margin-top: 0;
  }
`;

const NavLinks = styled.ul`
  overflow: hidden;
  transition: height 0.35s ease;
  height: ${props => (props.open ? '258px' : '0')};
  @media (min-width: 992px) {
    height: auto;
    display: flex;
  }
  li {
    list-style-type: none;
  }
`;

const Link = styled.a`
  display: block;
  font-size: 1.4rem;
  text-transform: uppercase;
  padding: 1rem 1.2rem;
  color: #fff;
  @media (min-width: 992px) {
    padding: 0.4rem 1.2rem;
  }
`;
