/**
 * Created by 14717 on 2020/6/24
 */
import * as React from 'react'

interface onclickFn{
  (): any
}
interface Props {
  count?: number,
  onclickFn: onclickFn
}

interface State {
}

class Info extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props)
  }

  render() {
    let { count, onclickFn } = this.props;
    console.log('render info');
    return (
      <div>
        <button onClick={onclickFn}>click</button>
        the count is {
        <h4>{count}</h4>
      }
      </div>
    )
  }
}

export default Info