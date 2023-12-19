import { StyleSheet, fontWeight } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 52,
    justifyContent: "space-between",
    borderRadius: 10,
    borderWidth: 2,
    backgroundColor: "#E0E0E0",
  },

  containerHeader: {
    flex: 0.1,
    width: wp("100%"),
    // backgroundColor: "black",
    borderRadius: 10,
  },
  containerButtons: {
    flex: 0.5,
    width: wp("100%"),
    // backgroundColor: "black",
    borderRadius: 10,
    flexDirection:'row',
  },
  containerScreen: {
    backgroundColor: "#D9D9D9",
    flex: 0.3,
    width: wp("100%"),
    borderRadius: 20,
    borderWidth:4
  },

  prjName: {
    fontWeight: "600",
    fontSize: hp("4%"),
    marginBottom: hp("1%"),
    color: "#333", // Màu chữ
    textShadowColor: "rgba(0, 0, 0, 0.5)", // Màu đổ bóng
    textShadowOffset: { width: 1, height: 2 }, // Điều chỉnh vị trí đổ bóng
    textShadowRadius: 5,
  },
});

export default styles;

{
  /*Bộ Màu Xanh Ngọc Klassic:
Màu Chính: #E0E0E0 (Light Gainsboro)
Màu Phụ 1: #B0B0B0 (Ash Gray)
Màu Phụ 2: #D9D9D9 (Light Gray)
Bộ Màu Mát Mẻ Pastel:
 */
}
