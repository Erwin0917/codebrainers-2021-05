import {Card, CardBody, Table} from 'reactstrap';
import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Plant from 'components/plants/Plant';
import InProgress from 'components/shared/InProgress';

const PLANTS_FETCH_DELAY = 250;

class Plants extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            plants: [],
            successPlants: undefined,
            inProgress: false,
        };
    }

    componentDidMount() {
        this.fetchCategories()
            .finally(() => {
                this.setState({inProgress: false});
            })
        this.fetchPlants().finally(() => {
            this.setState({inProgress: false});
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
            category,
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
            room,
            url,
            wateringInterval: watering_interval
        };

    }

    fetchPlants() {
        const requestUrl = 'http://gentle-tor-07382.herokuapp.com/plants/';
        this.setState({inProgress: true});
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
        this.setState({inProgress: true});
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

    render() {
        const {plants, successPlants, inProgress} = this.state;

        return (
            <Card className="mb-4">
                <CardBody>
                    <InProgress inProgress={inProgress}/>
                    {successPlants === false && <p>Nie udało się pobrać Kwiatow</p>}
                    {successPlants && (
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
                                    <Plant plant={plant} key={plant.id}/>
                                ))
                            }

                            </tbody>
                        </Table>
                    )}
                </CardBody>
            </Card>
        );
    }
}

Plants.propTypes = {
    delayFetch: PropTypes.func.isRequired,
};

export default Plants;
