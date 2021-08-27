import React from 'react';
import {Text} from 'react-native';

function Title() {
  console.log('Rendering Title');
  return <Text>useCallback Hook</Text>;
}

export default React.memo(Title);
// export default Title;
