import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { connect } from 'react-redux';
import * as topicsActions from '../../store/topics/actions';
import * as topicsSelectors from '../../store/topics/reducer';

class TopicsScreen extends Component {

  constructor(props) {
    super(props);
    autoBind(this);
  }

  componentDidMount() {
    this.props.dispatch(topicsActions.fetchTopics());
  }

  render() {
    if (!this.props.topicsByUrl) return this.renderLoading();
    return (
      <div className="TopicsScreen">
        {this.props.topicsByUrl}
      </div>
    );
  }

  renderLoading() {
    return (
      <p>Loading...</p>
    );
  }
}

function mapStateToProps(state) {
  const topicsByUrl = topicsSelectors.getTopics(state);
  return {
    topicsByUrl
  };
}

export default connect(mapStateToProps)(TopicsScreen);
