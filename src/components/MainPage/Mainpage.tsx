import { Box } from "@chakra-ui/react";
import { WelcomeSection } from '../../components/Sections/WelcomeSection/WelcomeSection';
import { PopularSection } from '../../components/Sections/PopularSection/PopularSection';

export const MainPage: React.FC = () => (
  <Box 
    w="var(--default-width)"
    maxWidth="100%"
    m="auto"
    p="0 var(--main-page-padding)">
    <WelcomeSection />
    <PopularSection />

  </Box>
)