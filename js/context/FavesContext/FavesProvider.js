import React, { Component } from "react";
import realm from "../../config/models";
const FavesContext = React.createContext();
class FavesProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      faveIds: []
    };
  }
  getFavedSessionsIds() {
    const getAllFaves = realm.objects("Faves").map(element => element.id);
    this.setState({ faveIds: getAllFaves });
  }

  componentDidMount() {
    this.getFavedSessionsIds();
  }

  createFave(id) {
    try {
      realm.write(() => {
        realm.create("Faves", { id: id, faved_on: new Date() });
      });
      this.queryAllFaves();
      this.setState({ faveIds: favs });
    } catch (e) {
      console.log(e);
    }
  }

  queryAllFaves() {
    realm.write(() => {
      let favs = realm.objects("Faves").map(element => element.id);
      this.setState({ faveIds: favs });
    });
  }

  deleteFave(id) {
    realm.write(() => {
      realm.delete("Faves", { id: id }).then(() => {
        let favs = realm.objects("Faves");
        this.setState({ faveIds: favs });
      });
    });
  }

  render() {
    return (
      <FavesContext.Provider
        value={{
          ...this.state,
          queryAllFaves: this.queryAllFaves,
          deleteFave: this.deleteFave,
          createFave: this.createFave
        }}
      >
        {this.props.children}
      </FavesContext.Provider>
    );
  }
}
export { FavesProvider };
export default FavesContext;
