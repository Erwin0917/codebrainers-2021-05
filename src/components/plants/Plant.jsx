import React from 'react';
import PropTypes from 'prop-types';
import './Plant.scss';

class Plant extends React.PureComponent {

  render () {
    const {
      blooming,
      category,
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
      room,
      url,
      wateringInterval,
    } = this.props.plant;

    console.log(this.props.plant);

    return (
            <tr>
              <td>{id}</td>
              <td>{name}</td>
              <td>{category}</td>
              <td>{room}</td>
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