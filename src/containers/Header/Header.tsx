import { DefaultButton, Logo, Navigation, Search } from '../../components';
import { Icon } from '@chakra-ui/icon';
import { BsTwitch } from 'react-icons/bs';
import { StyledBox, StyledHeader } from './styles';

export const Header: React.FC = () => (
  <StyledHeader>
    <StyledBox>
      <Logo />
      <Search />
      <Navigation />
      <DefaultButton
        kind="a"
        leftIcon={<Icon as={BsTwitch} />}
        link="https://www.igdb.com/oauth/twitch">
        LOGIN WITH TWITCH</DefaultButton>
    </StyledBox>
  </StyledHeader>
)