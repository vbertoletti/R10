import Realm from "realm";

//define models and their properties
const FaveSchema = {
  name: "Faves",
  primaryKey: 'id',
  properties: {
    id: "string",
    faved_on: {type: "date", optional: true}
  }
};


const realm = new Realm({ schema: [FaveSchema] });


export default realm;