import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { Button, Icon } from 'react-native-elements';

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
                    <Button type="clear" icon={{ name: "downcircleo", type: "antdesign", size: 20, color: '#5388d0'}} style = { sectionStyles.button } title={ this.props.name } onPress={ () => this.setState({"clickStatus": "true" }) } >
                    </Button>
                </View>
            )
        } else {
            return(
                <View>
                    <Button type="clear" icon={{ name: "downcircleo", type: "antdesign", size: 20, color: '#5388d0'}} title={ this.props.name } onPress={ () => this.setState({"clickStatus": "false" }) } >
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
