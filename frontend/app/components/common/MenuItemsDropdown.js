import React, {Component} from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import Icon from 'components/common/Icon';
import {Link} from 'react-router';

/**
 * Simple Icon Menus demonstrating some of the layouts possible using the `anchorOrigin` and
 * `targetOrigin` properties.
 */

const style = {
  userCircleCont: {
    position: 'absolute',
    width: '40px',
    height: '40px',
    margin: '5px',
    background: 'white',
    borderRadius: '50%',
    right: '25px',
  },
  userName: {
    position: 'absolute',
    top: '10px',
    color: 'white',
    left: '-110%',
  },
  menuCont: {
    minWidth: '150px',
  }
};

class MenuItemsDropdown extends Component {

  render() {
    const { itemList, user } = this.props;

    return (
      <div style={style.userCircleCont}>
        <div style={style.userName}>{user.name}</div>
        <IconMenu
          menuStyle={style.menuCont}
          iconButtonElement={<IconButton />}
          anchorOrigin={{horizontal: 'right', vertical: 'top'}}
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
        >
        {
          itemList.map((data, index) => {
            return (
              <MenuItem key={index} primaryText={data.displayText} >
                <Link
                  to={data.toLink}
                >
                </Link>
              </MenuItem>
            );
          })
        }
        </IconMenu>
      </div>
    );
  }
}

export default MenuItemsDropdown;
