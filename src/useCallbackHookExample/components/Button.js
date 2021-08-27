import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

function Button({handleClick, title}) {
  console.log('Rendering button - ', title);
  return (
    <TouchableOpacity onPress={handleClick}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
}

// export default Button;
export default React.memo(Button);
