import React from "react";

class TextInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFocused: false
        };

    }

    setFieldFocused = (isFocused) => {
        this.setState({ isFocused });
    }

    getInputClassName = () => {
        const { isFocused } = this.state;
        const { validationFn } = this.props;

        if (isFocused) {
            return "input-text";
        }

        return validationFn() ? "input-text" : "input-text input-text-error";
    };

    render() {
        const {
            name,
            onChange,
            value
        } = this.props;

        return (
            <input
                name={name}
                onChange={(event) => onChange(name, event.currentTarget.value)}
                onFocus={() => this.setFieldFocused(true)}
                onBlur={() => this.setFieldFocused(false)}
                type="text"
                className={this.getInputClassName()}
                value={value}
            />
        )

    }
}


export default TextInput;
