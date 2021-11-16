import React from 'react';
import PropTypes from 'prop-types';
import './Plant.scss';

class Plant extends React.PureComponent {

  render () {
    const {
      blooming,
      categoryId,
      categorySlug,
      difficulty,
      fertilizingInterval,
      id,
      lastFertilized,
      lastWatered,
      name,
      requiredExposure,
      requiredHumidity,
      requiredTemperature,
      roomId,
      url,
      wateringInterval,
    } = this.props.plant;

    console.log(this.props.plant);

    const {categories, rooms} = this.props;
     console.log(categories)
      const category = categories.find(category => category.id === categoryId);
     let categoryName = '?';
     if(category !== undefined){
         categoryName = category.name;
     }
       const room = rooms.find(room => room.id === roomId);
     let roomName = '?';
     if(room !== undefined){
         roomName = room.name;
     }

    return (
            <tr>
              <td>{id}</td>
              <td>{name}</td>
              <td>{categoryName}</td>
              <td>{roomName}</td>
              <td>{blooming.toString()}</td>
              <td>{difficulty}</td>
              <td>{requiredExposure}</td>
              <td>{requiredHumidity}</td>
              <td>{requiredTemperature}</td>
              <td>{wateringInterval}</td>
              <td>{fertilizingInterval}</td>
            </tr>
    );
  }

}

Plant.propTypes = {
  plant: PropTypes.object.isRequired,
};

export default Plant;