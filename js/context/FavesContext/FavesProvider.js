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
    this.favedIds();
  }

  getFaves = () => {
    try {
      let result = realm.objects("Faves").map(elem => elem.id);
      return result;
    } catch (err) {
      console.log(err);
    }
  };

 async createFave(id) {
    try {
      realm.write(() => {
        realm.create("Faves", { id: id, faved_on: new Date() });
      });
      this.queryAllFaves();
    } catch (err) {
      console.log(err);
    }
  }

 async deleteFave(id) {
    try {
      realm.write(() => {
        const deleteId = realm.objects("Faves").filtered(`id ==$0`, id);
        realm.delete(deleteId);
      });
      this.queryAllFaves();
    } catch (err) {
      console.log(err);
    }
  }

  favedIds = async() => {
    try {
      let favedids = this.setState({ faveIds: this.getFaves() });
      return favedids;
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <FavesContext.Provider
        value={{
          ...this.state,
          queryAllFaves: this.favedIds,
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
