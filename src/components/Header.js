import { View, Text } from "react-native";
import React from "react";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import styles from "../Styles";

const Header = () => {
    return (
        <View style={styles.containerHeader}>
            <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: hp('2%') }}>
                <Text style={styles.prjName}>Caculater Pro</Text>
                <Text style={{ fontWeight: '300', textAlign: 'center' }}>Quantum Supercomputer for the Universe</Text>
            </View>
        </View>
    );
};

export default Header;
