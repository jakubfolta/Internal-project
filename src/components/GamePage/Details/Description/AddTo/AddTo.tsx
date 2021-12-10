import { Box } from "@chakra-ui/layout";
import { DefaultButton } from "../../../..";
import { StyledParagraph, StyledSpan } from "./styles";

export const AddTo: React.FC = () => (
  <Box p="3rem 0 0">
    <StyledParagraph>No lists available, why not <StyledSpan>create one</StyledSpan>?</StyledParagraph>
    <DefaultButton
      m="4rem 0 0"
      p="1rem 1.5rem"
      fontSize="var(--small-font-size)"
      borderRadius="4px"
      _active={{bg: "var(--color-accent-dark-3)"}}
    >Create new list</DefaultButton>
  </Box>
)