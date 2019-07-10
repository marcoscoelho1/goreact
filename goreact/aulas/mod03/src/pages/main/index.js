import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as FavoriteActions from '../../store/actions/favorites';

class Main extends Component {
    static propTypes = {
      addFavoriteRequest: PropTypes.func.isRequired,
      favorites: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          name: PropTypes.string,
          description: PropTypes.string,
          url: PropTypes.string,
        }),
      ).isRequired,
    };

    state = {
      repositoryInput: '',
    };

    handleAddRepository = (event) => {
      event.preventDefault();
      const { addFavoriteRequest } = this.props;
      const { repositoryInput } = this.state;
      addFavoriteRequest(repositoryInput);
    };

    render() {
      const { repositoryInput } = this.state;
      const { favorites } = this.props;
      return (
        <Fragment>
          <form onSubmit={this.handleAddRepository}>
            <input
              placeholder="usuário/repositorio"
              value={repositoryInput}
              onChange={e => this.setState({ repositoryInput: e.currentTarget.value })}
            />
            <button type="submit">Adicionar</button>
          </form>

          <ul>
            {favorites.map(favorite => (
              <li key={favorite.id}>
                <p>
                  <strong>{favorite.name}</strong> ({favorite.description})
                </p>
                <a href={favorite.url}>Acessar</a>
              </li>
            ))}
          </ul>
        </Fragment>
      );
    }
}

const mapDispatchToProps = dispatch => bindActionCreators(FavoriteActions, dispatch);

const mapStateToProps = state => ({
  favorites: state.favorites,
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
