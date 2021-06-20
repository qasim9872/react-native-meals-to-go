import React, { useState } from "react";
import {
  AccountBackground,
  AccountFormContainer,
  AccountCover,
  AuthTextInput,
  AuthButton,
} from "../components/account.styles";
import { Spacer } from "../../../components/spacer/spacer.component";
import { useAuthenticationContext } from "../../../services/authentication/authentication.context";

export const LoginScreen = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const { onLogin } = useAuthenticationContext();

  const onLoginClicked = () => {
    if (!email || !password) {
      console.log("missing login information");
      return;
    }

    onLogin(email, password);
  };

  return (
    <AccountBackground>
      <AccountCover />

      <AccountFormContainer>
        <AuthTextInput
          label="Email"
          value={email}
          onChangeText={(enteredEmail) => setEmail(enteredEmail)}
        />

        <Spacer position="top" size="large">
          <AuthTextInput
            label="Password"
            secureTextEntry
            value={password}
            onChangeText={(enteredPassword) => setPassword(enteredPassword)}
          />
        </Spacer>

        <Spacer position="top" size="large">
          <AuthButton
            icon="lock-open-outline"
            mode="contained"
            onPress={onLoginClicked}
          >
            Login
          </AuthButton>
        </Spacer>
      </AccountFormContainer>
    </AccountBackground>
  );
};
