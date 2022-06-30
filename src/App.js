import './App.css';
import styled from 'styled-components';
import Button from './components/Button.js';
import Dialog from './components/Dialog.js';
import { useState } from 'react';
import Box from './components/Box';

const AppBlock  = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 50px;
  border: 1px solid black;
  padding: 10px;
`

const Circle = styled.section`
  width: 100px;
  height: 100px;
  background: ${props=> props.color || 'black'};
  border-radius: 50%;
`;

function App() {
  const [ dialog, setDialog ] = useState(false);
  const onClick = () => {
    setDialog(true);
  }
  const onCancel = () => {
    setDialog(false);
    console.log('취소');
  }
  const onConfirm = () => {
    setDialog(false);
    console.log('확인');
  }
  return (
    <div className="App">
      <Circle color="blue"/>
      <Circle/>
      <Circle color='pink'/>
      <AppBlock>
        <Button>button1</Button>
        <Button>button2</Button>
        <Button onClick={onClick}>button3</Button>
      </AppBlock>
      <Dialog title="정말로 삭제하시겠습니까?"
      confirmText="삭제" cancelText="취소"
      visible={dialog}
      onCancel={onCancel} onConfirm={onConfirm}>
        데이터를 삭제하시겠습니까?
      </Dialog>
      <Box/>
    </div>
  );
}

export default App;
