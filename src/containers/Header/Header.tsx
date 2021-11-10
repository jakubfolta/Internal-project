import { DefaultButton } from '../../components/UI/Button/Button';
import { Icon } from '@chakra-ui/icon';
import { BsTwitch } from 'react-icons/bs';
import { Logo } from '../../components/Logo/Logo';
import Navigation from '../../components/Navigation/Navigation';
import { Search } from '../../components/Search/Search';
import { StyledHeader } from './styles';

export const Header: React.FC = () => (
    <StyledHeader>
      <Logo />
      <Search />
      <Navigation />
      <DefaultButton
        kind="a"
        leftIcon={<Icon as={BsTwitch} />}
        link="https://www.igdb.com/oauth/twitch">
        LOGIN WITH TWITCH</DefaultButton>
    </StyledHeader>
)