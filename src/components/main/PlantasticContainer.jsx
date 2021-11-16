import React from "react";
import {Container} from "reactstrap";
import {Route, Switch} from "react-router-dom";
import {ROUTE_CATEGORIES, ROUTE_PLANTS, ROUTE_PREFERENCES, ROUTE_ROOMS} from "constants/Routes";
import Plants from "components/plants/Plants";
import Categories from "components/categories/Categories";
import Rooms from "components/rooms/Rooms";
import PlantCreate from 'components/plants/PlantCreate';
import Account from "../account/Account";
import axios from "axios";

const CATEGORIES_FETCH_DELAY = 1000;

class PlantasticContainer extends React.PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            categoriesInProgress: false,
            categoriesSuccess: undefined,
            categories: [],
        };
    }

    componentDidMount() {
        this.fetchCategories()
            .finally(() => {
                this.setState({categoriesInProgress: false});
            })
    }

    fetchCategories() {

        const requestUrl = 'http://gentle-tor-07382.herokuapp.com/categories/';
        this.setState({categoriesInProgress: true});
        return this.props.delayFetch(CATEGORIES_FETCH_DELAY, (resolve, reject) => {
            axios.get(requestUrl)
                .then((response) => {
                    const data = response.data;
                    const categories = data.map((item) => {
                        return {id: item.id, name: item.name};
                    });
                    const categoriesSuccess = true;
                    this.setState({categories, categoriesSuccess});
                    resolve();
                })
                .catch((error) => {
                    this.setState({categoriesSuccess: false});
                    reject();
                })
                .finally(() => {
                    console.log('Resolved');
                });
        });
    }

    render() {
        const {
            delayFetch,
            fertilizingFrequency,
            inputOnChange,
            plantName,
            someSelectField,
            userFullName,
            inputOnBlur,
        } = this.props;

        const {
            categoriesInProgress,
            categoriesSuccess,
            categories
        } = this.state;

        return (
            <Container>
                <Switch>
                    <Route exact path={ROUTE_PLANTS}>
                        <PlantCreate
                            fertilizingFrequency={fertilizingFrequency}
                            inputOnChange={inputOnChange}
                            plantName={plantName}
                            someSelectField={someSelectField}
                        />
                        <Plants
                            categories={categories}
                            categoriesSuccess={categoriesSuccess}
                            categoriesInProgress={categoriesInProgress}
                            delayFetch={delayFetch}
                        />
                    </Route>
                    <Route path={ROUTE_CATEGORIES}>
                        <Categories
                            categories={categories}
                            categoriesSuccess={categoriesSuccess}
                            categoriesInProgress={categoriesInProgress}
                            delayFetch={delayFetch}
                        />
                    </Route>
                    <Route path={ROUTE_ROOMS}>
                        <Rooms delayFetch={delayFetch}/>
                    </Route>
                    <Route path={ROUTE_PREFERENCES}>
                        <Account userFullName={userFullName} inputOnChange={inputOnChange} inputOnBlur={inputOnBlur}/>
                    </Route>
                </Switch>
            </Container>
        )
    }
}

export default PlantasticContainer;
