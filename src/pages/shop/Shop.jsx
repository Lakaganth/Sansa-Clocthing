import React, { Component } from "react";
import SHOP_DATA from "./shop.data";
import CollectionPreview from "./../../components/collection-preview/CollectionPreview";

export default class Shop extends Component {
  state = {
    collections: SHOP_DATA
  };

  render() {
    const { collections } = this.state;
    console.log(collections);
    return (
      <div className="shop-page">
        {collections.map(collection => (
          <CollectionPreview key={collection.id} collection={collection} />
        ))}
      </div>
    );
  }
}
