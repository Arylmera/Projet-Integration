import React from 'react';
import {StyleSheet, View, Text, ScrollView, FlatList, Image} from 'react-native';
import {connect} from 'react-redux';




class TipsNichePlanMateriels extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            titre: this.props.data.materiel.titre,
            description: this.props.data.materiel.description,
            image: this.props.data.materiel.image,
        };
    }

    render() {
        let theme = this.props.currentStyle;
        return (
            <View
                style={[
                    styles.main_container,
                    {backgroundColor: theme.secondary},
                ]}>
                <Image
                    style={styles.image}
                    source={this.state.image}

                />
                <View style={styles.content_container}>
                    <View style={styles.header_container}>
                        <Text
                            style={[
                                styles.title_text,
                                {color: theme.highlight},
                            ]}>
                            {this.state.titre}
                        </Text>
                    </View>
                    <View style={styles.description_container}>
                        <Text
                            style={[
                                styles.description_text,
                                {color: theme.highlight},
                            ]}
                            numberOfLines={5}>
                            {this.state.description}
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main_container: {
        height: 140,
        flexDirection: 'row',
        margin: 10,
        borderRadius: 5,
        // shadow
        shadowColor: 'rgba(0,0,0, .7)',
        shadowOffset: {height: 0, width: 0},
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 3,
    },
    image: {
        width: 60,
        height: 120,
        margin: 5,
        resizeMode: 'contain',
    },
    content_container: {
        flex: 1,
        margin: 15,
    },
    header_container: {
        flex: 3,
        flexDirection: 'row',
    },
    title_text: {
        fontWeight: 'bold',
        //fontSize: 12,
        flex: 1,
        flexWrap: 'wrap',
        paddingRight: 5,
    },
    description_container: {
        flex: 5,
    },
    description_text: {
        fontStyle: 'italic',
        flex: 1,
    },
});

const mapStateToProps = (state) => {
    return {
        currentStyle: state.currentStyle,
    };
};

export default connect(mapStateToProps)(TipsNichePlanMateriels);