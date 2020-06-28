/**
 * Created by 14717 on 2020/6/24
 */
import * as React from 'react';

import Info from "./components/info";

interface onclickFn{
  (): any
}
interface Props {
}

interface State {
  count: number
}

class About extends React.Component<Props, State> {
  onclickFn2: onclickFn;
  constructor(props: Props) {
    super(props);
    this.state = {
      count: 0
    }
    this.onclickFn2 = this.onclickFn.bind(this)
  }
  onclickFn() {
    let { count } = this.state;
    this.setState({
      count: ++count
    })
  }
  render() {
    console.log('render about')
    let { count } = this.state;
    return (
      <div>
        <Info onclickFn={this.onclickFn2}></Info>
      </div>
    )
  }
}

export default About