import { LinkingOptions } from '@react-navigation/native';

export const linking: LinkingOptions<AuthStackParamList & MainStackParamList> = {
  enabled: true,
  prefixes: ['rntemplate://app'],
  config: {
    screens: {
      SignIn: '*', // if a user tries to navigate to a deep link path that doesn't exist
      Tab: {
        screens: {
          Homepage: 'home',
          Mine: 'mine',
        },
      },
    },
  },
};
