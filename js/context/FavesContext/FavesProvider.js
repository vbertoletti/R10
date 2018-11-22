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

  componentDidMount() {
    this.getAllFaves();
  }

  createFave(id, date) {
    realm.write(() => {
      realm.create("Faves", { id: id, faved_on: date });
    });
  }

  getAllFaves() {
    realm.write(() => {
      let favs = realm.objects("Faves");
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
        value={{ ...this.state }}
      >
        {this.props.children}
      </FavesContext.Provider>
    );
  }
}

export { FavesProvider };
export default FavesContext;
