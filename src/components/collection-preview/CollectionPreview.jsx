import React from "react";
import "./CollectionPreview.scss";
import CollectionItem from "./../collection-item/CollectionItem";

const CollectionPreview = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, i) => i < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
