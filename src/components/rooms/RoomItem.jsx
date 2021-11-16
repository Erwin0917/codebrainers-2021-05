import React from 'react';
import PropTypes from 'prop-types';
import { ListGroupItem } from "reactstrap";

const RoomItem = (props) => {

    const { room } = props;

    return (
      <ListGroupItem>
        { room.id } {' '}
        { room.name }
      </ListGroupItem>
    );

}

RoomItem.propTypes = {
  room: PropTypes.object.isRequired,
};


export default RoomItem;
