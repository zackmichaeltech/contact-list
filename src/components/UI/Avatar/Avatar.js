import React from "react";
import Avatar from "material-ui/Avatar";
import List from "material-ui/List/List";
import ListItem from "material-ui/List/ListItem";

const AvatarImg = props => {
  let firstLetterInName = props.name.charAt(0).toUpperCase()
  return (
    <List>
      <ListItem disabled={true} leftAvatar={<Avatar>{firstLetterInName}</Avatar>} />
    </List>
  );
};
export default AvatarImg;
