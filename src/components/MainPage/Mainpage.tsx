import { Box } from "@chakra-ui/react";
import { WelcomeSection, PopularSection } from '../';

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