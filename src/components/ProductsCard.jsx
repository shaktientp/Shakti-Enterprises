import appwriteService from "../appwrite/config";
function ProductsCard({ name, image, link }) {
  return (
    <div className="product-card">
      <img
        src={appwriteService.getFilePreview(image)}
        alt={name}
        className="product-img"
      />
      <div className="card-lower-section">
        <div className="product-info">
          <h3>{name}</h3>
        </div>
        <button
          className="card-button"
          onClick={() => window.open(link, "_blank")}>
          Inquire Now
        </button>
      </div>
    </div>
  );
}

export default ProductsCard;
