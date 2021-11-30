import Icon from "@chakra-ui/icon";
import { Box } from "@chakra-ui/layout";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledParagraph = styled.p`
  font-size: var(--small-font-size);
  margin-bottom: 1rem;
`;

export const StyledSpan = styled.span`
  font-weight: 600;
  color: var(--color-grey-4);
`;

export const StyledLink = styled(Link)`
  color: var(--color-accent-2);
  border-bottom: 1px solid transparent;

  &:hover { border-color: var(--color-accent-2); }
`;

export const StyledReadMore = styled.button`
  color: var(--color-accent-2);
  font-weight: bold;
`;

export const StyledIconLinkContainer = styled(Box)`
  flex: 0 0 33.33%;
`;

export const StyledIconLink = styled.a`
  font-size: var(--small-font-size);
  font-weight: 500;

  &:hover span:last-child {
    color: var(--color-accent-2);
    border-bottom: 1px solid var(--color-accent-2);
  }
`;

export const StyledIconSpan = styled.span`
  display: inline-block;
  margin-right: 1rem;
  padding: .2rem;
  border-radius: 4px;
  background-color: var(--color-accent-2);
`;

export const StyledIcon = styled(Icon)`
  display: inline-block;
  font-size: 2.3rem;
  color: var(--color-white);
  line-height: 0;
`;