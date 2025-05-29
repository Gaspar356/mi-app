const CategoryForm = ({ newCategory, setNewCategory, handleAddCategory }) => (
  <form onSubmit={handleAddCategory} className="mb-3">
    <input
      type="text"
      value={newCategory}
      onChange={(e) => setNewCategory(e.target.value)}
      placeholder="Category name"
      className="form-control mb-2"
      required
    />
    <button type="submit" className="btn btn-primary">Add Category</button>
  </form>
);

export default CategoryForm;
