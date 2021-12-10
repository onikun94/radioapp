import styled from "@emotion/styled";
import { VFC } from "react";
import { IconButton } from "../molecules/icon-button";
import { colors } from "../../styles/color";
import { TextArea } from "../atoms/text-input";
import { relative } from "path/posix";

export type SearchBarPropType = {
  value?: string;
  iconSearch: string;
  onChange?: (text: string) => void;
  onClickSearch: () => void;
};

export const SearchBar: VFC<SearchBarPropType> = ({
  value,
  onChange,
  onClickSearch,
  iconSearch,
}) => {
  return (
    <Container>
      <SearchTextField
        // type="text"
        placeholder="search "
        // value={value}
        onChange={onChange}
        backgroundColor="primary"
      />
      <SearchButton
        // iconType="search"
        iconImage={iconSearch}
        iconColor="gray"
        backgroundColor="primary"
        onClick={onClickSearch}
        iconHeight="30px"
      />
    </Container>
  );
};

const Container = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  paddingTop: "10px",
  backgroundColor: colors.background.primary,
});

const SearchTextField = styled(TextArea)({
  height: "20px",
  maxWidth: "20px",
  // "::placeholder": { position: "relative" },
});

const SearchButton = styled(IconButton)({
  borderRadius: "0 4px 4px 0",
  width: "8px",
  height: "4px",
});
