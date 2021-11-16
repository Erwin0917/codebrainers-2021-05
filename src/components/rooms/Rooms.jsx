import React from "react";
import {Card, CardBody, ListGroup} from "reactstrap";
import axios from "axios";
import InProgress from "../shared/InProgress";
import RoomItem from "./RoomItem";

const ROOMS_FETCH_DELAY = 1000;

class Rooms extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rooms: [],
            successRooms: undefined,
            inProgressRooms: false,
        }
    }

    componentDidMount() {
        this.fetchRooms().finally(() => {
            this.setState({inProgressRooms: false});
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
        const  {
            inProgressRooms,
            rooms,
            successRooms,
        } = this.state;


        return (
            <Card className="mb-4">
                <CardBody>
                    <InProgress inProgress={inProgressRooms}/>
                        {successRooms === false && <p>Unable to fetch rooms data</p>}
                    {
                        successRooms &&
                        <ListGroup className="categories">
                            {
                                rooms.map((item, index, arr) =>
                                    <RoomItem
                                        room={item}
                                        key={index}
                                    />
                                )
                            }
                        </ListGroup>
                    }

                </CardBody>
            </Card>
        )

    }
}

export default Rooms;
