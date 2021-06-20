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
import { Text } from "../../../components/typography/text.component";

export const LoginScreen = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const { onLogin, error } = useAuthenticationContext();

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
          label="E-mail"
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={(enteredEmail) => setEmail(enteredEmail)}
        />

        <Spacer position="top" size="large">
          <AuthTextInput
            label="Password"
            secure
            secureTextEntry
            textContentType="password"
            autoCapitalize="none"
            value={password}
            onChangeText={(enteredPassword) => setPassword(enteredPassword)}
          />
        </Spacer>

        {error && (
          <Spacer position="top" size="large">
            <Text variant="error">{error}</Text>
          </Spacer>
        )}

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
