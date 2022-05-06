import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    pallete?: {
      primary?: {
        main?: string;
      },
      secondary?: {
        main?: string;
      },
      background?: {
        default?: string;
      }
    }
  }
}