import React, {Component} from 'react';
import ArticleList from './ArticleList';

class App extends Component {
  state = this.props.store.getState();

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ArticleList articles={this.state.articles}
                   store={this.props.store}/>
    );
  }
}

export default App;