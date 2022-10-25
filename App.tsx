/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Markdown from 'react-native-marked';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Markdown
        value={
          '# react-native-marked\n\nMarkdown renderer for React Native powered by [marked.js](https://marked.js.org/) with built-in theming support\n\n## Installation\n\n```sh\nyarn add react-native-marked\n```\n\n## Usage\n\n```jsx\nimport * as React from "react";\nimport Markdown from "react-native-marked";\n\nconst ExampleComponent = () => {\n  return (\n    <Markdown\n      value={`# Hello world`}\n      flatListProps={{\n        initialNumToRender: 8,\n      }}\n    />\n  );\n};\n\nexport default ExampleComponent;\n```\n\n## Example\n\nhttps://snack.expo.dev/@gmsgowtham/react-native-marked\n\n## Contributing\n\nSee the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.\n\n## License\n\nMIT\n\n---\n\nMade with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)\n\n## Built with\n\n- [Marked](https://marked.js.org/)\n- [React Native Fit Image](https://github.com/huiseoul/react-native-fit-image)\n- [@jsamr/react-native-li](https://github.com/jsamr/react-native-li)\n'
        }
        flatListProps={{
          initialNumToRender: 8,
          contentContainerStyle: styles.sectionContainer,
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    padding: 16,
  },
});

export default App;
