import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div className="my-3">
        <div className="card shadow-sm" style={{ borderRadius: "10px", width: "100%", maxWidth: "20rem", margin: "auto" }}>
          <img
            src={imageUrl ? imageUrl : "https://cdn.wionews.com/sites/default/files/2024/10/04/458348-oct-4-4.png"}
            className="card-img-top"
            alt="News"
            style={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10px", height: "12rem", objectFit: "cover" }}
          />
          <div className="card-body" style={{ padding: "1.25rem" }}>
            <h5 className="card-title" style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#343a40" }}>
              {title.length > 50 ? title.slice(0, 50) + "..." : title}
            </h5>
            <p className="card-text" style={{ color: "#6c757d" }}>
              {description.length > 100 ? description.slice(0, 100) + "..." : description}
            </p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-dark"
              style={{ width: "100%", padding: "0.5rem", fontSize: "1rem" }}
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
