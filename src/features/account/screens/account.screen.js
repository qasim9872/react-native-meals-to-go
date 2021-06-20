import React from "react";
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  Title,
} from "../components/account.styles";
import { Spacer } from "../../../components/spacer/spacer.component";

export const AccountScreen = ({ navigation: { navigate } }) => (
  <AccountBackground>
    <AccountCover />
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
          icon="lock-open-outline"
          mode="contained"
          onPress={() => navigate("Register")}
        >
          Register
        </AuthButton>
      </Spacer>
    </AccountContainer>
  </AccountBackground>
);
