import React from "react";
import LottieView from "lottie-react-native";

import {
  Title,
  AuthButton,
  AccountCover,
  AnimationWrapper,
  AccountContainer,
  AccountBackground,
} from "../components/account.styles";
import { Spacer } from "../../../components/spacer/spacer.component";

export const AccountScreen = ({ navigation: { navigate } }) => (
  <AccountBackground>
    <AccountCover />
    <AnimationWrapper>
      <LottieView
        loop
        autoPlay
        key="animation"
        resizeMode="cover"
        source={require("../../../../assets/watermelon.json")}
      />
    </AnimationWrapper>
    <Title>Meals To Go</Title>
    <AccountContainer>
      <AuthButton
        icon="lock-open-outline"
        mode="contained"
        onPress={() => navigate("Login")}
      >
        Login
      </AuthButton>
      <Spacer position="top" size="large">
        <AuthButton
          icon="email"
          mode="contained"
          onPress={() => navigate("Register")}
        >
          Register
        </AuthButton>
      </Spacer>
    </AccountContainer>
  </AccountBackground>
);
