import { Image } from "@chakra-ui/image";
import { Box } from "@chakra-ui/layout";
import { StyledFollowButton } from "./styles";

export const CoverImage: React.FC<{src: string}> = props => (
  <Box
    position="relative"
    top="-25rem"
    w="var(--default-cover-image-width)"
    marginRight="var(--cover-image-spacing)">
    <Image
      w="100%"
      h="35rem"
      fit="cover"
      src={props.src} />
    <StyledFollowButton>Follow</StyledFollowButton>
  </Box>
)