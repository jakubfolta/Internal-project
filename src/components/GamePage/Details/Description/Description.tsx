import { ButtonGroup } from "@chakra-ui/button";
import { Box } from "@chakra-ui/layout";
import { About, AddTo, Share } from "../../../";
import { Menu } from "../interfaces";
import { Props } from "./interfaces";
import { StyledMenuButton, StyledMenuUnderline } from "./styles";

export const Description: React.FC<Props> = props => {

  const buttons = props.menu.map((button: Menu) => (
    <StyledMenuButton
      key={button.id}
      active={button.status}
      id={button.id}
      onClick={e => props.onMenuButtonClick(e)}>{button.name}</StyledMenuButton>
  ));

  const section = props.menu.map(item => {
    let section;
    
    if (item.name === "About" && item.status) {
      const trimmedDescription = `${props.description.substr(0, 430)}...`;

      section = (
        <About
          key={item.id}
          nameSlug={props.nameSlug}
          genres={props.genres}
          genreSlug={props.genreSlug}
          platforms={props.platforms}
          descriptionVersion={props.isReadMoreClicked ? props.description : trimmedDescription}
          versions={props.versions}
          readMore={props.isReadMoreClicked}
          onReadMoreClick={props.onReadMoreClick}
          website={props.website}
          reddit={props.reddit}  />
      )
    }
    
    if (item.name === "Add To" && item.status) section = <AddTo key={item.id}  />;
    if (item.name === "Share" && item.status) section = <Share key={item.id}  />;
    
    return section;
  });

  return (
    <Box flex="1">
      <Box
        padding=" 0 var(--cover-image-spacing) 8rem 0" 
        borderRight="1px solid var(--color-grey-3)">
        <Box bg="var(--color-white)">
          <ButtonGroup
            position="relative"
            spacing="0px"
            variant="ghost">
            {buttons}
            <StyledMenuUnderline position={props.buttonPosition} />
          </ButtonGroup>
        </Box>
        {section}
      </Box>
    </Box>
  );
}