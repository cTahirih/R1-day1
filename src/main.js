import { connect } from 'react-redux';
import MainComponent from './componentes/main';

const MainWithRedux = connect(
  function mapStateToProps(state) {
    const {
      artist
    } = state.AppReducer;
    return {
      data: artist
    };
  }
)(MainComponent);

export default MainWithRedux;