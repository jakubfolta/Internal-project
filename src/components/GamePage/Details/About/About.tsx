import { Box, Flex } from "@chakra-ui/react";
import { AboutProps } from "./interfaces";
import { StyledIcon, StyledIconLink, StyledIconLinkContainer, StyledIconSpan, StyledLink, StyledParagraph, StyledReadMore, StyledSpan } from "./styles";
import { BiLinkExternal } from 'react-icons/bi';
import { FaRedditAlien } from 'react-icons/fa';

export const About: React.FC<AboutProps> = props => (
  <Box>
    <Box p="2rem 2rem 0 0">
      <StyledParagraph>
        <StyledSpan>Genre: </StyledSpan>
          {props.genres.map((genre, index, array) => 
            <StyledLink key={genre.id} to={`/genres/${props.genreSlug}`}>
              {genre.name}{array.length - 1 === index || ', '}
            </StyledLink>  
          )}
      </StyledParagraph>

      <StyledParagraph>
        <StyledSpan>Platforms: </StyledSpan>
          {props.platforms.map((platform, index, array) => (
            <StyledLink key={platform.platform.id} to={`/platforms/${platform.platform.slug}`}>
              {platform.platform.name}{array.length - 1 === index || ', '}
            </StyledLink>
          ))}
      </StyledParagraph>

      {props.versions.length > 0 &&
        <StyledParagraph>
          <StyledSpan>Versions: </StyledSpan>
          <StyledLink to={`/games/${props.nameSlug}/series`}>See {props.versions.length} more parts of this game</StyledLink>
        </StyledParagraph>
      }
    </Box>

    <Box>
      <StyledParagraph>
        {props.description}
        {props.readMore 
          || <StyledReadMore onClick={props.onReadMoreClick}>Read More</StyledReadMore>}
      </StyledParagraph>
    </Box>

    <Flex>
      <StyledIconLinkContainer>
        <StyledIconLink href={props.website}>
          <StyledIconSpan>
            <StyledIcon as={BiLinkExternal} />
          </StyledIconSpan>
          <span>
            Official Website
          </span>
        </StyledIconLink>
      </StyledIconLinkContainer>
      {props.reddit &&
        <StyledIconLinkContainer>
          <StyledIconLink href={props.reddit}>
            <StyledIconSpan>
              <StyledIcon as={FaRedditAlien} />
            </StyledIconSpan>
            <span>
              Subreddit
            </span>
          </StyledIconLink>
        </StyledIconLinkContainer>
      }
    </Flex>
  </Box>
)