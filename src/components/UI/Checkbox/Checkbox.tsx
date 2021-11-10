import { Box } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { Label, Input, Span } from "./styles";

export const Checkbox: React.FC<{label: string}> = props => (
  <Box
    position="relative"
    flexBasis="50%"
    marginBottom="1rem">
    <Label>
      <Input />
      <Span>
        <CheckIcon 
          position="absolute"  
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)" 
          width="1.7rem"
          height="1.7rem"
          color="var(--color-white)" />
      </Span>
      {props.label}
      </Label>
  </Box>
)