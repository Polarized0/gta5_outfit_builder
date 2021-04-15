import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      items: {
        "hat": {
          id: 0,
          index: 0,
          prop: true
        },
        "ears": {
          id: 0,
          index: 2,
          prop: true
        },
        "glasses": {
          id: 0,
          index: 1,
          prop: true
        },
        "accessoire": {
          id: 0,
          index: 7
        },
        "undershirt": {
          id: 0,
          index: 8
        },
        "top": {
          id: 0,
          index: 11
        },
        "armor": {
          id: 0,
          index: 9
        },
        "decals": {
          id: 0,
          index: 10
        },
        "torso": {
          id: 0,
          index: 3
        },
        "watch": {
          id: 0,
          index: 6,
          prop: true
        },
        "bracelet": {
          id: 0,
          index: 7,
          prop: true
        },
        "legs": {
          id: 0,
          index: 4
        },
        "shoes": {
          id: 0,
          index: 6
        }
      },
      modalImageSrc: null,
      listCategory: null,
      listGender: "M"
    };

    this.allCached = false;
  }

  getUrlFromItem(item, data, gender, id = data.id) {
    const prefix = "120px";
    const itemType = data.prop ? "Prop" : "Clothing";
    const uri = prefix + "-" + itemType + "_" + gender + "_" + data.index + "_" + id + ".webp";
    return "items/" + item + "/" + (gender === "M" ? "male" : "female") + "/" + uri;
  }

  onItemClick(url) {
    this.setState({ modalImageSrc: url });
  }

  renderOutfitLayout(gender, allCached) {
    return (
      <div className="outfit-layout" style={{ "visibility": allCached ? "visible" : "hidden" }}>
        {Object.keys(this.state.items).map(item => {
          const items = this.state.items;
          const data = items[item];

          if (!data.indices) data.indices = { "M": [], "F": [], "matches": [] };
          if (!data["count" + gender]) data["count" + gender] = 0;

          const url = this.getUrlFromItem(item, data, gender, data.didCache ? data.id : data["count" + gender]);
          const existsOnOtherGender = data.indices[gender === "M" ? "F" : "M"].includes(data.id);
          const doesExist = data.indices[gender].includes(data.id);

          return (
            <div className={(existsOnOtherGender ? "" : "merge ") + item}
              onClick={ev => {
                if (ev.target.tagName.toUpperCase() !== "BUTTON") this.onItemClick(doesExist ? url : "not_found.png");
              }}
            >

              <img src={url} alt={item}
                onError={ev => {
                  if (data.didCache) {
                    ev.target.src = "not_found.png";
                  } else {
                    data.loadFails = data.loadFails ? data.loadFails + 1 : 1;

                    if (data.loadFails > 100) {
                      data["count" + gender] = 0;
                      data.didCache = true;
                    } else {
                      data["count" + gender]++;
                    }

                    this.setState(items);
                  }
                }}
                onLoad={() => {
                  if (!data.didCache) {
                    data.indices[gender].push(data["count" + gender]);
                    data.loadFails = 0;
                    data["count" + gender]++;
                    this.setState(items);
                  }
                }} />
              <div className="desc">
                <span>ID: {data.id}</span>
                <button onClick={
                  () => {
                    this.setState({
                      listCategory: item,
                      listGender: gender
                    });
                  }
                }>List</button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  renderModal() {
    return (
      <div id="modal" onMouseUp={() => this.setState({ modalImageSrc: null })}>
        <img src={this.state.modalImageSrc} alt="Modal" />
      </div>
    );
  }

  renderList() {
    let category = this.state.items[this.state.listCategory];
    return (
      <div id="listWrapper" onClick={ev => {
        if (ev.target.id !== "list") this.setState({ listCategory: null })
      }}>
        <div id="list">
          {category.indices[this.state.listGender].map(index => {
            let existsOnOtherGender = category.indices[this.state.listGender === "M" ? "F" : "M"].includes(index);

            return (
              <div className={existsOnOtherGender ? "" : "merge"} data-id={index}>
                <img src={this.getUrlFromItem(this.state.listCategory, category, this.state.listGender, index)} alt={this.state.listCategory + " " + index} onClick={() => {
                  let items = this.state.items;
                  category.id = index;

                  this.setState({
                    items,
                    listCategory: null
                  });
                }} />
              </div>)
          })}
        </div>
      </div>
    );
  }

  render() {
    let allCached = Object.keys(this.state.items).every(item => this.state.items[item].didCache);

    let cachedImages = 0;
    for (let item in this.state.items) {
      if (this.state.items[item].indices) cachedImages += this.state.items[item].indices["M"].length + this.state.items[item].indices["F"].length; // male and female images
    }

    if (allCached && !this.allCached) {
      let { items } = this.state;

      for (let item in items) {
        let data = items[item];
        let mIndices = data.indices["M"];
        let fIndices = data.indices["F"];

        for (let index of mIndices) {
          if (fIndices.includes(index)) data.indices["matches"].push(index);
        }
      }

      this.allCached = true;
    }

    return (
      <div className="App">
        {!allCached && <div id="loading">Loading... {cachedImages} images cached</div>}
        {this.state.modalImageSrc && this.renderModal()}
        {this.state.listCategory && this.renderList()}
        {this.renderOutfitLayout("M", allCached)}
        {this.renderOutfitLayout("F", allCached)}
        <div id="info">
          <div className="infoTitle">GTA 5 Outfit Builder</div>
          <div className="content">
            <b>Find item textures here</b>:
            <br />
            <br />
            <a href="https://github.com/OnlyMisT/VtextureLookup" target="_blank" rel="noopener noreferrer">VtextureLookup</a>
            <br />
            <a href="https://docs.google.com/document/d/1O8pp41q7iR6N84BNxMzXTXMKXAwUmypvtpKX8eyqaLE/edit" target="_blank" rel="noopener noreferrer">Next Gen Clothing Components</a>
            <br />
            <a href="https://forge.plebmasters.de/clothes/" target="_blank" rel="noopener noreferrer">forge.plebmasters.de</a>
            <br />
            <br />
          </div>
          <hr></hr>
          <div>All the pictures of the props and components belong to <a href="https://rage.mp" target="_blank" rel="noopener noreferrer">rage.mp</a> and are licensed under <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a>.</div>
        </div>
      </div>
    );
  }
}

export default App;
