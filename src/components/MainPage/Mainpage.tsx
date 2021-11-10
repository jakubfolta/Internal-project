import { Box } from "@chakra-ui/react";
import { WelcomeSection } from '../../components/Sections/WelcomeSection/WelcomeSection';
import { PopularSection } from '../../components/Sections/PopularSection/PopularSection';

export const MainPage: React.FC = () => (
  <Box p="0 40rem">
    <WelcomeSection />
    <PopularSection />

  </Box>
)