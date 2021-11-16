import {Card, CardBody, Table} from 'reactstrap';
import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Plant from 'components/plants/Plant';
import InProgress from 'components/shared/InProgress';

const PLANTS_FETCH_DELAY = 500;
const CATEGORIES_FETCH_DELAY = 1000;
const ROOMS_FETCH_DELAY = 1500;

class Plants extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            plants: [],
            categories: [],
            rooms: [],
            successPlants: undefined,
            successCategories: undefined,
            successRooms: undefined,
            inProgressPlants: false,
            inProgressCategories: false,
            inProgressRooms: false,
        };
    }

    componentDidMount() {
        this.fetchCategories().finally(() => {
            this.setState({inProgressCategories: false});
        })
        this.fetchPlants().finally(() => {
            this.setState({inProgressPlants: false});
        });
        this.fetchRooms().finally(() => {
            this.setState({inProgressRooms: false});
        });
    }

    mapPlantFromApi(item) {
        const {
            blooming,
            category,
            category_slug,
            difficulty,
            fertilizing_interval,
            id,
            last_fertilized,
            last_watered,
            name,
            required_exposure,
            required_humidity,
            required_temperature,
            room,
            url,
            watering_interval
        } = item;
        return {
            blooming,
            categoryId: category,
            categorySlug: category_slug,
            difficulty,
            fertilizingInterval: fertilizing_interval,
            id,
            lastFertilized: last_fertilized,
            lastWatered: last_watered,
            name,
            requiredExposure: required_exposure,
            requiredHumidity: required_humidity,
            requiredTemperature: required_temperature,
            roomId: room,
            url,
            wateringInterval: watering_interval
        };

    }

    fetchPlants() {
        const requestUrl = 'http://gentle-tor-07382.herokuapp.com/plants/';
        this.setState({inProgressPlants: true});
        return this.props.delayFetch(PLANTS_FETCH_DELAY, (resolve, reject) => {
            axios
                .get(requestUrl)
                .then((response) => {
                    const data = response.data;
                    const plants = data.map((item) => this.mapPlantFromApi(item));
                    const successPlants = true;
                    this.setState({plants, successPlants});
                    resolve();
                })
                .catch((error) => {
                    this.setState({successPlants: false});
                    reject();
                });
        });
    }

    fetchCategories() {

        const requestUrl = 'http://gentle-tor-07382.herokuapp.com/categories/';
        this.setState({inProgressCategories: true});
        return this.props.delayFetch(CATEGORIES_FETCH_DELAY, (resolve, reject) => {
            axios.get(requestUrl)
                .then((response) => {
                    const data = response.data;
                    const categories = data.map((item) => {
                        return {id: item.id, name: item.name};
                    });
                    const successCategories = true;
                    this.setState({categories, successCategories});
                    resolve();
                })
                .catch((error) => {
                    this.setState({successCategories: false});
                    reject();
                })
                .finally(() => {
                    console.log('Resolved');
                });
        });
    }

    fetchRooms() {

        const requestUrl = 'http://gentle-tor-07382.herokuapp.com/rooms/';
        this.setState({inProgressRooms: true});
        return this.props.delayFetch(ROOMS_FETCH_DELAY, (resolve, reject) => {
            axios.get(requestUrl)
                .then((response) => {
                    const data = response.data;
                    const rooms = data.map((item) => {
                        return {id: item.id, name: item.name};
                    });
                    const successRooms = true;
                    this.setState({rooms, successRooms});
                    resolve();
                })
                .catch((error) => {
                    this.setState({successRooms: false});
                    reject();
                })
                .finally(() => {
                    console.log('Resolved');
                });
        });
    }

    render() {
        const {
            categories,
            inProgressCategories,
            inProgressPlants,
            inProgressRooms,
            plants,
            rooms,
            successCategories,
            successPlants,
            successRooms,
        } = this.state;

        const success = successCategories && successPlants && successRooms;
        const inProgress = inProgressPlants || inProgressCategories || inProgressRooms;

        return (
            <React.Fragment>
                <Card className="mb-4">
                    <CardBody>
                        <InProgress inProgress={inProgress}/>
                        {successPlants === false && <p>Unable to fetch plants data</p>}
                        {successCategories === false && <p>Unable to fetch categories data</p>}
                        {successRooms === false && <p>Unable to fetch rooms data</p>}
                        {success && (
                            <Table hover striped responsive>
                                <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Category</th>
                                    <th>Room</th>
                                    <th>Blooming</th>
                                    <th>Difficulty</th>
                                    <th>Exposure</th>
                                    <th>Humidity</th>
                                    <th>Temperature</th>
                                    <th>Watering Interval</th>
                                    <th>Fertilizing Interval</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    plants.map((plant, index) => (
                                        <Plant plant={plant} key={plant.id} categories={categories} rooms={rooms}/>
                                    ))
                                }

                                </tbody>
                            </Table>
                        )}
                    </CardBody>
                </Card>
            </React.Fragment>

        )
    }

}

Plants.propTypes = {
    delayFetch: PropTypes.func.isRequired,
};

export default Plants;
