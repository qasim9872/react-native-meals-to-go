import React, { useState } from "react";
import {
  Title,
  AuthButton,
  AccountCover,
  AuthTextInput,
  ErrorContainer,
  AccountBackground,
  AccountFormContainer,
} from "../components/account.styles";
import { Spacer } from "../../../components/spacer/spacer.component";
import { useAuthenticationContext } from "../../../services/authentication/authentication.context";
import { Text } from "../../../components/typography/text.component";

export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [repeatedPassword, setRepeatedPassword] = useState(null);

  const { onRegister, error } = useAuthenticationContext();

  const onRegisterClicked = () => onRegister(email, password, repeatedPassword);

  return (
    <AccountBackground>
      <AccountCover />
      <Title>Meals To Go</Title>
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
            secureTextEntry
            textContentType="password"
            autoCapitalize="none"
            value={password}
            onChangeText={(enteredPassword) => setPassword(enteredPassword)}
          />
        </Spacer>

        <Spacer position="top" size="large">
          <AuthTextInput
            label="Repeated Password"
            secureTextEntry
            textContentType="password"
            autoCapitalize="none"
            value={repeatedPassword}
            onChangeText={(enteredRepeatedPassword) =>
              setRepeatedPassword(enteredRepeatedPassword)
            }
          />
        </Spacer>

        {error && (
          <ErrorContainer size="large">
            <Text variant="error">{error}</Text>
          </ErrorContainer>
        )}

        <Spacer position="top" size="large">
          <AuthButton icon="email" mode="contained" onPress={onRegisterClicked}>
            Register
          </AuthButton>
        </Spacer>
      </AccountFormContainer>
      <Spacer size="large">
        <AuthButton mode="contained" onPress={() => navigation.goBack()}>
          Back
        </AuthButton>
      </Spacer>
    </AccountBackground>
  );
};
