import React, { useState } from 'react';

function Counter(){
  let [number,setNumber] = useState(0);
  console.log('render counter')
  function alertNumber(){
    setTimeout(()=>{
      // alert 只能获取到点击按钮时的那个状态
      alert(number);
    },3000);
  }
  return (
    <>
      <p>{number}</p>
      <button onClick={()=>setNumber(number+1)}>+</button>
      <button onClick={alertNumber}>alertNumber</button>
    </>
  )
}

// const Home: React.FC = () => {
//   return (
//     <div className="App">
//       <Counter></Counter>
//     </div>
//   );
// }

interface HomeProps {
  pageSize?: number
}
interface HomeState {
  pageSize: Number
}
class Home extends React.Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);
    this.state = {
      pageSize: props.pageSize || 100
    }
  }

  static getDerivedStateFromProps(nextProps: any, prevState: any) {
    let nextState: any = {};
    if (nextProps.pageSize !== prevState.pageSize) {
      nextState.pageSize = nextProps.pageSize;
    }
    console.log(nextState, 'nextState');
    return nextState;
  }

  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    console.log(this.state, 'state')
    return (
      <div>
        <h1>Home</h1>
      </div>
    );
  }
}

export default Home;
