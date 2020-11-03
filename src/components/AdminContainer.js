import React from 'react';
import ManipulateBooks from './AdminContainers/ManipulateBooks'
import ManageAccounts from './AdminContainers/ManageAccounts'
import ViewBooks from './AdminContainers/ViewBooks';


class Container extends React.Component{
  constructor(props) {
    super(props);
    this.state = { };
  }

  
  render() {
    let currentContainer = <h1>404</h1>
    switch(this.props.currentContainer) {
      case 'Add Books':
        currentContainer = <ManipulateBooks />
        break;
      case 'View Books':
        currentContainer = <ViewBooks type={'Books'}/>
        break;
      case 'View Orders':
        currentContainer = <ViewBooks type={'Orders'}/>
        break;
      case 'Manage Accounts':
        currentContainer = <ManageAccounts type={'Accounts'}/>
        break;
      default:
        currentContainer = <h1>404</h1>
    }
    return  <div>
                {currentContainer}
            </div>
  }
}

export default Container;
