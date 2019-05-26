import React from 'react';

import InputTest from 'components/InputTest';

interface EntryProps {}

const Entry: React.SFC<EntryProps> = (props) => {
  return (
    <div>
      Entry
      <InputTest />
    </div>
  )
}

export default Entry;
