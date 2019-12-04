import React from 'react';
import { Button, StyleSheet, Text, View} from 'react-native';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(faCoffee)
export default class Section extends React.Component {

    constructor() {
        super();
        this.state = {
            "clickStatus": "false"
        }
    }

    render() {
        if (this.state.clickStatus == "false") {
            return(
                <View>
                    <Button style = { sectionStyles.button } color='#175e54' title={ this.props.name } onPress={ () => this.setState({"clickStatus": "true" }) } >
                    </Button>
                </View>
            )
        } else {
            return(
                <View>
                    <Button color = '#8c1515' title={ this.props.name } onPress={ () => this.setState({"clickStatus": "false" }) } >
                    </Button>
                    <View style = {{paddingLeft: 20}}>
                      { this.props.children }
                    </View>
                </View>
            )
        }
    }
}

const sectionStyles = StyleSheet.create({
  button: {
    marginBottom: 20,
  }
});
