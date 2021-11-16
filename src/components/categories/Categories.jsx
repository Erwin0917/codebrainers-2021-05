import {Card, CardBody, ListGroup} from "reactstrap";
import React from "react";
import CategoryItem from "components/categories/CategoryItem";
import InProgress from "components/shared/InProgress";


class Categories extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            inProgress: false,
            successCategories: undefined,
            categories: [],
        };
    }

    render() {
        const {
            categoriesInProgress,
            categoriesSuccess,
            categories,
        } = this.props;

        return (
            <Card>
                <CardBody>
                    <InProgress inProgress={categoriesInProgress}/>
                    {categoriesSuccess === false && <p>Unable to fetch categories data</p>}
                    {
                        categoriesSuccess &&
                        <ListGroup className="categories">
                            {
                                categories.map((item, index, arr) =>
                                    <CategoryItem
                                        category={item}
                                        label='category'
                                        key={index}
                                        isLastItem={arr.length - 1 === index}
                                        index={index}
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


export default Categories;
