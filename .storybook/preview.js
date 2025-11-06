import React from 'react';
import Theme from './theme';

// To expand the container to the entire page.
const StoryContainer = ({children}) => (
  <div style={{width: '100vw', height: '100vh'}}>{children}</div>
);

export const decorators = [
  (Story) => (
    <StoryContainer>
      <Story />
    </StoryContainer>
  ),
];

export const parameters = {
  options: {
    storySort: {
      method: 'alphabetical',
    },
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: Theme,
  },
};
